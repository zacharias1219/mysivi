import AgoraRTC, { IAgoraRTCClient, ILocalVideoTrack, ILocalAudioTrack, IRemoteVideoTrack, IRemoteAudioTrack, IAgoraRTCRemoteUser } from 'agora-rtc-sdk-ng';

interface JoinConfig {
  appId: string;
  channel: string;
  token: string | null;
  uid: string | number;
}

export class VideoCall {
  private client: IAgoraRTCClient;
  private localAudioTrack: ILocalAudioTrack | null = null;
  private localVideoTrack: ILocalVideoTrack | null = null;
  private remoteUsers: Record<string, { videoTrack?: IRemoteVideoTrack; audioTrack?: IRemoteAudioTrack }> = {};

  constructor() {
    this.client = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });
    this.setupEventListeners();
  }

  private setupEventListeners() {
    this.client.on('user-published', async (user: IAgoraRTCRemoteUser, mediaType: 'audio' | 'video') => {
      if (mediaType === 'audio' || mediaType === 'video') {
        await this.subscribe(user, mediaType);
      }
    });

    this.client.on('user-unpublished', (user: IAgoraRTCRemoteUser) => {
      this.removeRemoteUser(user.uid.toString());
    });

    this.client.on('user-left', (user: IAgoraRTCRemoteUser) => {
      this.removeRemoteUser(user.uid.toString());
    });
  }

  async joinRoom(config: JoinConfig) {
    const { appId, channel, token, uid } = config;
    try {
      await this.client.join(appId, channel, token, uid);

      this.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
      this.localVideoTrack = await AgoraRTC.createCameraVideoTrack();

      await this.client.publish([this.localAudioTrack, this.localVideoTrack]);

      console.log('Successfully joined the room and published local tracks');
    } catch (error) {
      console.error('Failed to join the room:', error);
    }
  }

  async leaveRoom() {
    try {
      await this.client.leave();

      this.localAudioTrack?.close();
      this.localVideoTrack?.close();

      this.localAudioTrack = null;
      this.localVideoTrack = null;

      console.log('Successfully left the room');
    } catch (error) {
      console.error('Failed to leave the room:', error);
    }
  }

  private async subscribe(user: IAgoraRTCRemoteUser, mediaType: 'video' | 'audio') {
    await this.client.subscribe(user, mediaType);

    if (mediaType === 'video' && user.videoTrack) {
      this.remoteUsers[user.uid.toString()] = { videoTrack: user.videoTrack };
      this.playRemoteVideo(user.uid.toString());
    }

    if (mediaType === 'audio' && user.audioTrack) {
      this.remoteUsers[user.uid.toString()] = { audioTrack: user.audioTrack };
      user.audioTrack.play();
    }
  }

  private playRemoteVideo(uid: string) {
    const containerId = `remote-video-${uid}`;
    let container = document.getElementById(containerId);

    if (!container) {
      container = document.createElement('div');
      container.id = containerId;
      container.style.width = '100%';
      container.style.height = '100%';
      document.getElementById('remote-container')?.appendChild(container);
    }

    const remoteVideoTrack = this.remoteUsers[uid]?.videoTrack;
    if (remoteVideoTrack) {
      remoteVideoTrack.play(containerId);
    }
  }

  private removeRemoteUser(uid: string) {
    const remoteVideoContainer = document.getElementById(`remote-video-${uid}`);
    if (remoteVideoContainer) {
      remoteVideoContainer.remove();
    }

    delete this.remoteUsers[uid];
  }

  toggleMicrophone(mute: boolean) {
    if (this.localAudioTrack) {
      if (mute) {
        this.localAudioTrack.setEnabled(false);
      } else {
        this.localAudioTrack.setEnabled(true);
      }
      console.log(`Microphone is now ${mute ? 'muted' : 'unmuted'}`);
    }
  }

  toggleCamera(off: boolean) {
    if (this.localVideoTrack) {
      if (off) {
        this.localVideoTrack.setEnabled(false);
      } else {
        this.localVideoTrack.setEnabled(true);
      }
      console.log(`Camera is now ${off ? 'off' : 'on'}`);
    }
  }
}
