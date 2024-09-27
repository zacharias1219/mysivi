// Import required modules
import axios from 'axios';
import { Buffer } from 'buffer';
import { FormData } from 'form-data';
import 'dotenv/config';

// Initialize OpenAI API client with the provided API key
const secretKey = process.env.OPENAI_API_KEY;

// Function to transcribe audio using Whisper
export async function transcribeAndChat(audioBlob) {
    try {
        // Convert Blob to Buffer for use with OpenAI API
        const buffer = Buffer.from(await audioBlob.arrayBuffer());
        
        // Create form-data to send as POST body
        const form = new FormData();
        form.append("file", buffer, "audio.wav");
        form.append("model", "whisper-1");
        form.append("response_format", "text");

        // Send audio data to OpenAI Whisper API
        const response = await axios.post("https://api.openai.com/v1/audio/transcriptions", form, {
            headers: {
                ...form.getHeaders(),
                Authorization: `Bearer ${secretKey}`,
            },
        });

        // Extract and log the transcribed text
        const transcribedText = response.data.text;
        console.log("Transcribed Text:", transcribedText);

        // Return the transcribed text
        return transcribedText;
    } catch (error) {
        console.error("Error transcribing audio:", error.message);
    }
}
