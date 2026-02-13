import { useEffect, useRef } from "react";
import Message from "./Message";
import "../../assets/CSS/ChatMessages.css"


export default function ChatMessage({ ChatMessages }) {
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [ChatMessages]);

  return (
    <div className="chat-container" ref={chatMessagesRef}>
      {ChatMessages.map((chatmessage) => {
        return (
          <Message
            isbot={chatmessage.isbot}
            message={chatmessage.message}
            key={chatmessage.id}
          />
        );
      })}
    </div>
  );
}
