import React, { useState } from "react";
import { FaRobot } from "react-icons/fa";
import "./Chatbot.css";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hi! How can I help you today?" },
    ]);
    const [input, setInput] = useState("");

    const toggleChat = () => setIsOpen(!isOpen);

    const sendMessage = () => {
        if (input.trim() === "") return;

        const newMessages = [
            ...messages,
            { sender: "user", text: input },
            { sender: "bot", text: "Thanks for your message!" }, // Static reply
        ];

        setMessages(newMessages);
        setInput("");
    };

    return (
        <div className="chatbot-container">
            <button className="chatbot-toggle" onClick={toggleChat}>
                <FaRobot size={24} />
            </button>

            {isOpen && (
                <div className="chatbot-box">
                    <div className="chatbot-messages">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`chatbot-msg ${msg.sender}`}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    <div className="chatbot-input">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) =>
                                e.key === "Enter" && sendMessage()
                            }
                            placeholder="Type your message..."
                        />
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
