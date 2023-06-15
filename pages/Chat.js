import { useEffect, useState } from "react";
import { Message, initialMessages, ChatMessage } from './components/MessageDisplay';
import { useCookies } from "react-cookie";
import Header from "./components/Header";
import Footer from "./components/Footer";

const COOKIE_NAME = "next-openai-chatgpt";

const PreLoader = () => (
  <div className="prompt left">
    <p className="name">AI</p>
    <div className="loader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

const InputMessage = ({ input, setInput, sendMessage }) => (
  <div className="question">
    <input
      type="text"
      aria-label="chat input"
      required
      value={input}
      placeholder="Type a message to start the conversation"
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          sendMessage(input);
          setInput("");
        }
      }}
      onChange={(e) => {
        setInput(e.target.value);
      }}
    />
    <button
      type="submit"
      onClick={() => {
        sendMessage(input);
        setInput("");
      }}
    >
      Ask
    </button>
  </div>
);

export default function ChatBox() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [cookie, setCookie] = useCookies([COOKIE_NAME]);

  useEffect(() => {
    if (!cookie[COOKIE_NAME]) {
      const randomId = Math.random().toString(36).substring(7);
      setCookie(COOKIE_NAME, randomId);
    }
  }, [cookie, setCookie]);

  const sendMessage = async (message) => {
    setLoading(true);

    const newMessages = [
      ...messages,
      { message: message, who: "user" },
    ];
    setMessages(newMessages);

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: newMessages,
        user: cookie[COOKIE_NAME],
      }),
    });

    const data = await response.json();

    setMessages([
      ...newMessages,
      { message: data.text.trim(), who: "bot" },
    ]);

    setLoading(false);
  };

  return (
    <>
    <Header/>
    <div className="dialogue" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', padding: '30px' }}>
      {messages.map(({ message, who }, index) => (
        <ChatMessage key={index} who={who} message={message} />
      ))}

      {loading && <PreLoader />}

      <InputMessage
        input={input}
        setInput={setInput}
        sendMessage={sendMessage}
      />
    </div>
    <Footer/>
    </>
  );
}
