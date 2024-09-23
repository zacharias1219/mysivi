import AgoraRTC, { IAgoraRTCClient, ILocalVideoTrack, ILocalAudioTrack } from 'agora-rtc-sdk-ng'

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
  private remoteUsers: Record<string, any> = {};

  constructor() {
    this.client = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });
    this.setupEventListeners();
  }

  private setupEventListeners() {
    this.client.on('user-published', async (user, mediaType) => {
      if (mediaType === 'audio' || mediaType === 'video') {
        await this.subscribe(user, mediaType);
      }
    });

    this.client.on('user-unpublished', (user) => {
      this.removeRemoteUser(user.uid.toString());
    });

    this.client.on('user-left', (user) => {
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

  private async subscribe(user: any, mediaType: 'video' | 'audio') {
    await this.client.subscribe(user, mediaType);

    if (mediaType === 'video') {
      const remoteVideoTrack = user.videoTrack;
      this.remoteUsers[user.uid] = remoteVideoTrack;
      this.playRemoteVideo(user.uid.toString());
    }

    if (mediaType === 'audio') {
      const remoteAudioTrack = user.audioTrack;
      this.remoteUsers[user.uid] = remoteAudioTrack;
      remoteAudioTrack.play();
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

    this.remoteUsers[uid].play(containerId);
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
      mute ? this.localAudioTrack.setEnabled(false) : this.localAudioTrack.setEnabled(true);
      console.log(`Microphone is now ${mute ? 'muted' : 'unmuted'}`);
    }
  }

  toggleCamera(off: boolean) {
    if (this.localVideoTrack) {
      off ? this.localVideoTrack.setEnabled(false) : this.localVideoTrack.setEnabled(true);
      console.log(`Camera is now ${off ? 'off' : 'on'}`);
    }
  }
}