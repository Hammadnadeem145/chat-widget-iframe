"use client";
import React, { useState } from "react";

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        className="bg-blue-500 text-white rounded-full p-3 shadow-lg"
        onClick={toggleChat}
      >
        Chat
      </button>
      {isOpen && (
        <div className="fixed bottom-16 right-4 bg-white border border-gray-300 shadow-lg rounded-lg w-80">
          <div className="p-4">
            <div className="mb-4">
              <h2 className="text-lg font-bold text-gray-800">
                Welcome to Chat
              </h2>
              <p className="text-gray-600">Start typing to chat with us!</p>
            </div>

            <div className="h-48 overflow-y-auto">
              <div className="my-2 px-4 py-2 rounded-lg bg-gray-100 text-gray-800"></div>
              {/* Add Messages Here  */}
            </div>

            {/* Input and Button  */}
            <form className="mt-4 flex">
              <input
                type="text"
                name="message"
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-lg py-2 px-4 mr-2 focus:outline-none focus:ring focus:border-blue-500"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
