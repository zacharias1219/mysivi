// File: openaiTranscription.ts
import axios from "axios";

export const transcribeAndChat = async (audioBlob: Blob) => {
  const formData = new FormData();
  formData.append("file", audioBlob, "audio.wav");

  try {
    const response = await axios.post("/api/transcribe", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data.transcription;
  } catch (error) {
    console.error("Error transcribing audio: ", error);
    return null;
  }
};
