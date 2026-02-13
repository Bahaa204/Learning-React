import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useRef, useState } from "react";
import { saveMessages, askGemini } from "../Helpers/ai";
import Logo from "../../assets/Images/old-logo.png";
import GIF from "../../assets/GIF/Daaboolos.gif";
import "../../assets/CSS/Daaboolos.css";

export default function Daaboolos() {
  const [messages, setMessages] = useState(
    JSON.parse(sessionStorage.getItem("messages")) || [],
  );
  const [input, setInput] = useState("");
  const [gifVisible, setGifVisible] = useState(false);

  const chatRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    saveMessages(chatRef, containerRef, messages);
  }, [messages]);

  function addMessage(text, isBot = false) {
    setMessages((prev) => [...prev, { text, isBot }]);
  }

  async function handleSend() {
    if (!input.trim()) {
      addMessage("Please enter some text.", true);
      return;
    }

    const userText = input;
    setInput("");
    addMessage(userText);

    try {
      const answer = await askGemini(userText, setGifVisible);
      addMessage(answer, true);
    } catch {
      addMessage("Something went wrong. Please try again later.", true);
    }
  }

  return (
    <>
      <Header />
      <main className="main-ai">
        <img src={Logo} alt="Daaboolos Logo" />
        <div className="chat-container" ref={containerRef}>
          <div className="chat-window">
            <div className="chat-messages" ref={chatRef}>
              {messages.length === 0 && (
                <div className="message bot-message">
                  <div className="message-content">
                    <p>
                      Hello! I'm Daaboolos, your AI cooking assistant. Ask me
                      anything about recipes, cooking techniques, or
                      ingredients!
                    </p>
                  </div>
                </div>
              )}

              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`message ${
                    msg.isBot ? "bot-message" : "user-message"
                  }`}
                >
                  <div className="message-content">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: msg.text,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="chat-input-area">
              <input
                className="chat-input"
                placeholder="Ask me a cooking question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button className="send-btn" onClick={handleSend}>
                Send
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {gifVisible && (
        <div className="gif-popup active">
          <div className="gif-backdrop" />
          <div className="gif-media">
            <img src={GIF} alt="Daaboolos thinking" />
          </div>
        </div>
      )}
    </>
  );
}
