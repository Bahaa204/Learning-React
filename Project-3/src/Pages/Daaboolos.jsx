import Header from "../components/Header";
import Footer from "../components/Footer";
import { MdSend } from "react-icons/md";
import Logo from "../../assets/Images/old-logo.png";
import GIF from "../../assets/GIF/Daaboolos.gif";
import "../../assets/CSS/Daaboolos.css";

export default function Daaboolos() {
  return (
    <>
      <Header />
      <main className="main-ai">
        <img src={Logo} alt="Daaboolos Logo" />
        <div className="chat-container">
          <div className="chat-window">
            <div className="chat-messages" id="chatMessages">
              <div className="message bot-message">
                <div className="message-content">
                  <p>
                    Hello! I'm Daaboolos, your AI cooking assistant. Ask me
                    anything about recipes, cooking techniques, or ingredients!
                  </p>
                </div>
              </div>
            </div>
            <div className="chat-input-area">
              <input
                type="text"
                id="userInput"
                className="chat-input"
                placeholder="Ask me a cooking question..."
              />
              <button className="send-btn">
                <MdSend />
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <div className="gif-popup" id="gifPopup">
        <div className="gif-backdrop"></div>
        <div className="gif-media">
          <img src={GIF} alt="Daaboolos gif" />
        </div>
      </div>
    </>
  );
}
