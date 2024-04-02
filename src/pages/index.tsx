"use client";
import React, { useState } from "react";

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <iframe
      src="https://chat-widget-pi.vercel.app/"
      title="Chat Widget"
      className="mx-auto block"
      width="100%"
      height="500px"
    ></iframe>
  );
};

export default ChatWidget;
