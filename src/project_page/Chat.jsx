import React, { useState } from "react";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, message]);
      setMessage("");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Chat</h2>
      <div className="mb-4">
        <input
          type="text"
          className="border rounded py-2 px-3 mr-2"
          placeholder="Type your message"
          value={message}
          onChange={handleMessageChange}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
      <ul>
        {messages.map((message, index) => (
          <li key={index} className="mb-2">
            {message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Chat;
