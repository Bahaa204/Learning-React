import { useState } from "react";
import UserInput from "./components/UserInput";
import ChatMessage from "./components/ChatMessage";
import "../assets/CSS/app.css"

function App() {
  const [ChatMessages, setChatMessages] = useState([
    {
      message:
        "Welcome to the chatbot project! Send a message using the textbox above.",
      isbot: true,
      id: crypto.randomUUID(),
    },
  ]);
  return (
    <div className="App">
      <UserInput
        ChatMessages={ChatMessages}
        setChatMessages={setChatMessages}
      />
      <ChatMessage ChatMessages={ChatMessages} />
    </div>
  );
}

export default App;
