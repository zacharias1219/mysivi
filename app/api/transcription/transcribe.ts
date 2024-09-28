import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAI } from "openai";
import formidable from "formidable";
import fs from "fs";


const openai = new OpenAI(apik);

export const config = {
  api: {
    bodyParser: false,
  },
};

const transcribeAudio = async (req: NextApiRequest, res: NextApiResponse) => {
  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      res.status(500).json({ error: "Error processing file" });
      return;
    }

    const audioFile = files.file as formidable.File;
    const fileStream = fs.createReadStream(audioFile.filepath);

    try {
      const transcription = await openai.createTranscription(fileStream, "whisper-1");
      res.status(200).json({ transcription: transcription.data.text });
    } catch (error) {
      res.status(500).json({ error: "Transcription failed" });
    }
  });
};

export default transcribeAudio;
