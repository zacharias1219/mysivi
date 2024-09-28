export const startAudioRecording = async (
    setRecorder: React.Dispatch<React.SetStateAction<MediaRecorder | null>>,
    setAudioChunks: React.Dispatch<React.SetStateAction<Blob[]>>
  ) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
  
      let chunks: Blob[] = [];
  
      mediaRecorder.ondataavailable = (event) => {
        chunks.push(event.data);
      };
  
      mediaRecorder.onstop = () => {
        setAudioChunks(chunks); // Save chunks to state
      };
  
      mediaRecorder.start(); // Start recording
      setRecorder(mediaRecorder); // Save the recorder instance
    } catch (error) {
      console.error("Error accessing the microphone: ", error);
    }
  };
  
  export const stopAudioRecording = (recorder: MediaRecorder | null) => {
    if (recorder) {
      recorder.stop(); // Stop the recording
    }
  };
  