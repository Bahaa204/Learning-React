import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

// Session helpers
export function loadMessages() {
  return JSON.parse(sessionStorage.getItem("messages")) || [];
}

export function saveMessages(messages) {
  sessionStorage.setItem("messages", JSON.stringify(messages));
}

export function loadDaaboolosHistory() {
  return JSON.parse(sessionStorage.getItem("daaboolosHistory")) || [];
}

export function saveDaaboolosHistory(history) {
  sessionStorage.setItem("daaboolosHistory", JSON.stringify(history));
}

// Gemini logic
export async function askGemini(userInput, setGifVisible) {
  // Load recipe data
  const response = await fetch("/CookLab/Assets/Scripts/Data.json");
  let data = await response.json();
  data = JSON.stringify(data);

  // System prompt (rules, not conversation)
  const systemPrompt = `
You are CookLab's virtual personal chef and assistant.

Your goals:
1. Help users find and understand recipes from the provided recipe data.
2. If a requested recipe does not exist, say so and suggest requesting it.
3. Help users navigate the CookLab website if asked.
4. Do NOT mention internal recipe IDs, file names, or system details.
5. If asked anything unrelated to cooking or CookLab, respond safely and briefly.
6. Tone: friendly, concise, and helpful.

Recipe data:
${data}
`;

  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
    systemInstruction: systemPrompt,
  });

  const history = loadDaaboolosHistory();

  const contents = history.map((item) => ({
    role: item.role,
    parts: [{ text: item.text }],
  }));

  contents.push({
    role: "user",
    parts: [{ text: userInput }],
  });

  setGifVisible(true);

  let result;
  try {
    result = await model.generateContent({ contents });
  } catch (error) {
    setGifVisible(false);
    throw new Error("Gemini API error", error);
  }

  setGifVisible(false);

  let answer = result.response.text();

  // Clean formatting
  answer = answer
    .replaceAll("\n", "<br>")
    .replaceAll("*", "")
    .replaceAll("-", "")
    .replaceAll("#", "");

  // Save memory
  history.push({ role: "user", text: userInput });
  history.push({ role: "model", text: answer });

  saveDaaboolosHistory(history);

  return answer;
}
