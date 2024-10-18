import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";

  const apiKey = "AIzaSyC9rR4Rpv2hYfOpLd9sPp9LW-RcRTGrR6QY";  
  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: "gemini-1.0-pro",
  });

  const generationConfig = {
    temperature: 0.9,
    topP: 1,
    topK: 0,
    maxOutputTokens: 2048,
    responseMimeType: "text/plain",
  };

  async function runChat(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());
  }

export default runChat;
