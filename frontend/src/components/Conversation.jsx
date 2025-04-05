import React from "react";
import useConversation from "../zustand/useConversation";

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  return (
    <>
      <div
        onClick={() => setSelectedConversation(conversation)}
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${
          isSelected ? "bg-sky-500" : ""
        }`}
      >
        <div className="avatar avatar-online">
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="profil_pic" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-green-950 text-[12px]">
              {conversation.username}
            </p>
            <span className="text-[8px]">{conversation.gender}</span>
          </div>
        </div>
      </div>
      {!lastIdx && <div className="divider my-0 py-0 h-1" />}{" "}
    </>
  );
};

export default Conversation;
