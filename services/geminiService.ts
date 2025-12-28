
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export async function askAgent(prompt: string, agentName: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `You are ${agentName}, a specialized meta-agent within SentinelWorks, an autonomous enterprise intelligence system. Your goal is to provide executive-level, conversational, and actionable insights. Be professional, direct, and authoritative in your domain. If someone asks for data, simulate based on "SentinelWorks" context.`,
        temperature: 0.7,
      }
    });
    return response.text || "I am processing the data. Please standby.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Communication link with core intelligence temporarily unstable. Retrying synchronization...";
  }
}
