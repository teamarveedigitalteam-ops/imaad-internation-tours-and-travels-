
import { GoogleGenAI } from "@google/genai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const message = req.body?.message;

    if (typeof message !== "string" || !message.trim()) {
      return res.status(400).json({ error: "Please enter a message." });
    }

    if (message.length > 2000) {
      return res.status(400).json({ error: "Message is too long." });
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message,
    });

    return res.status(200).json({
      reply: response.text,
    });
  } catch (error) {
    console.error("Gemini API request failed");
    return res.status(500).json({
      error: "The AI assistant is temporarily unavailable.",
    });
  }
}
