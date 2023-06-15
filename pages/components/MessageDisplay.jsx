import React from "react";

export const initialMessages = [
  {
    who: "bot",
    message: "Hi! I'm A friendly AI assistant. Fell free to ask me anything!",
  },
];

export const ChatMessage = ({ who = "bot", message }) => {
  if (!message) {
    return null;
  }

  return (
    <div className={`prompt ${who !== "bot" ? "right" : "left"}`}>
      <div>
        <p className="name">{who !== "bot" ? "You" : "AI"}</p>
        <p className="msg">{message}</p>
      </div>
    </div>
  );
};
