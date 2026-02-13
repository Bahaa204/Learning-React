import { useState } from "react";
import { Chatbot } from "supersimpledev";
import "../../assets/CSS/UserInput.css";

export default function UserInput({ ChatMessages, setChatMessages }) {
  const [InputValue, setInputValue] = useState("");

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function BotResponse() {
    const userinput = InputValue.trim().toLocaleLowerCase();
    const response = Chatbot.getResponse(userinput);
    const newChatMessages = [
      ...ChatMessages,
      { message: InputValue, isbot: false, id: crypto.randomUUID() },
    ];
    setChatMessages([
      ...newChatMessages,
      { message: response, isbot: true, id: crypto.randomUUID() },
    ]);
  }

  function handleClick() {
    if (InputValue != "") {
      setChatMessages([
        ...ChatMessages,
        { message: InputValue, isbot: false, id: crypto.randomUUID() },
      ]);
      setInputValue("");
      BotResponse();
    }
  }

  function handlekey(event) {
    if (event.key === "Enter") {
      handleClick();
    }
  }

  return (
    <div className="user-input">
      <input
        type="text"
        placeholder="Enter a message to the bot"
        id="UserInput"
        value={InputValue}
        onChange={handleInputChange}
        onKeyUp={handlekey}
      />
      <button type="button" id="SendBtn" onClick={handleClick}>
        Send
      </button>
    </div>
  );
}
