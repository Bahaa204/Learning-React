import "../../assets/CSS/Message.css";
import User from "../../assets/Images/user.png";
import Bot from "../../assets/Images/robot.png";

export default function Message({ isbot, message }) {
  return (
    <div className={isbot ? "bot-message message" : "user-message message"}>
      <img src={isbot ? Bot : User} alt={isbot ? "Bot Img" : "User Img"} />
      <p>{message}</p>
    </div>
  );
}
