import React, { useState } from "react";
import ChatBox from "./ChatBox";
import TypingIndicator from "./TypingIndicator";

const ChatRoom = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Prashant",
      senderAvatar: "https://i.pravatar.cc/150?img=8",
      message: "Hello 👋",
    },
    {
      id: 2,
      sender: "Shivani",
      senderAvatar: "https://i.pravatar.cc/150?img=45",
      message: "Hey!",
    },
    {
      id: 3,
      sender: "Shivani",
      senderAvatar: "https://i.pravatar.cc/150?img=45",
      message: "How are you?",
    },
    {
      id: 4,
      sender: "Prashant",
      senderAvatar: "https://i.pravatar.cc/150?img=8",
      message: "Great! It's been a while... 🙃",
    },
    {
      id: 5,
      sender: "Shivani",
      senderAvatar: "https://i.pravatar.cc/150?img=45",
      message: "Indeed.... We're gonna have to fix that. 🌮🍻",
    },
  ]);

  const [isTyping, setIsTyping] = useState({});

  const sendMessage = (sender, senderAvatar, message) => {
    setTimeout(() => {
      const newMessageItem = {
        id: messages.length + 1,
        sender: sender,
        senderAvatar: senderAvatar,
        message: message,
      };
      setMessages([...messages, newMessageItem]);
      resetTyping(sender);
    }, 400);
  };

  const typing = (writer) => {
    setIsTyping((prevTyping) => ({ ...prevTyping, [writer]: true }));
  };

  const resetTyping = (writer) => {
    setIsTyping((prevTyping) => ({ ...prevTyping, [writer]: false }));
  };

  const users = {
    Prashant: "https://i.pravatar.cc/150?img=8",
    Shivani: "https://i.pravatar.cc/150?img=45",
  };

  return (
    <div className={"chatApp__room"}>
      {Object.keys(users).map((name) => (
        <ChatBox
          key={name}
          owner={name}
          ownerAvatar={users[name]}
          sendMessage={sendMessage}
          typing={typing}
          resetTyping={resetTyping}
          messages={messages}
          isTyping={isTyping}
        />
      ))}
      <TypingIndicator owner="Prashant" isTyping={isTyping} />
      <TypingIndicator owner="Shivani" isTyping={isTyping} />
    </div>
  );
};

export default ChatRoom;
