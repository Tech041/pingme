import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import useConversation from "../zustand/useConversation";
import useGetConversations from "../hooks/useGetConversations";
import { toast } from "react-toastify";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      toast.error("Search term must be greater than 3 characters");
      return
    }
    const conversation = conversations.find((c) =>
      c.username.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No user found");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          placeholder="Search..."
          className="input input-bordered rounded-full"
        />
        <button type="submit" className="btn btn-circle bg-sky-500 text-white">
          <IoSearch className="w-6 h-6 outline-none" />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
