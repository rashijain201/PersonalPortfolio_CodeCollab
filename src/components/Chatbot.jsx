import { useState } from "react";
import { FaRobot } from "react-icons/fa";
import { useNavigate } from "@tanstack/react-router";
import "./Chatbot.css";

const Chatbot = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hi! How can I help you today?" },
    ]);
    const [input, setInput] = useState("");

    const toggleChat = () => {
        setIsOpen(!isOpen);
        const el = document.querySelector(".chatbot-box");
        if (el) {
            el.classList.toggle("closed");
        }
        const btn = document.querySelector(".chatbot-toggle");
        btn.classList.toggle("active");
        const container = document.querySelector(".chatbot-container");
        if (isOpen) {
        setTimeout(() => {
            container.style.width = "50px";
            container.style.height = "50px";
        }, 500)
    } else {
            container.style.width = "400px";
            container.style.height = "400px";
    }
    }

    const sendMessage = async () => {
        if (input.trim() === "") return;
        const trimmedInput = input.trim();
        var response = "I'm not sure how to respond to that.";
        if (trimmedInput.includes("tour")) {
            response = "Sure! I can guide you through a tour of our features.";
            startTour();
        } else if (trimmedInput === "help") {
            response =
                "You can ask me about our services, features, or anything else!";
        } else if (trimmedInput === "hello") {
            response = "Hello! How can I assist you today?";
        } else if (trimmedInput === "bye") {
            response = "Goodbye! Have a great day!";
        }
        setInput("");
        await addUserInput(trimmedInput);
        await addBotReply(response);
    };

    async function addUserInput(input) {
        setMessages((prevMessages) => [
            ...prevMessages,
            { sender: "user", text: input },
        ]);
    }

    async function addBotReply(response) {
        setMessages((prevMessages) => [
            ...prevMessages,
            { sender: "bot", text: response },
        ]);
    }

    function startTour() {
        setTimeout(() => {
            addBotReply("Starting the tour in...");
            setTimeout(() => {
                addBotReply("3");
                setTimeout(() => {
                    addBotReply("2");
                    setTimeout(() => {
                        addBotReply("1");
                        setTimeout(() => {
                            addBotReply("Let's begin the tour!");
                            navigate({
                                to: "/about",
                                search: { isTouring: true },
                            });
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }

    return (
        <div className="chatbot-container text-black chatbot-container-closed">
            <button className="chatbot-toggle active" onClick={toggleChat}>
                <FaRobot size={24} />
            </button>
                <div className="chatbot-box closed">
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
                            required
                        />
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
        </div>
    );
};

export default Chatbot;
