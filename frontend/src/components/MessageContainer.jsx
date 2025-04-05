import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import NoChatSelected from "./NoChatSelected";
import useConversation from "../zustand/useConversation";
import useGetMessages from "../hooks/useGetMessages";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { messages } = useGetMessages();
  console.log("Messages are", messages);
  useEffect(() => {
    // Clean up function
    return () => {
      setSelectedConversation(null);
    };
  }, [setSelectedConversation]);

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-gray-300 px-4 py-2 mb-2">
            <span className="label-text pr-2 text-white">To</span>
            <span className=" text-green-700 font-bold">
              {selectedConversation.username}
            </span>
          </div>
          {/* Messages */}
          <Messages messages={messages} />
          {/* <MessageInput /> */}
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;
