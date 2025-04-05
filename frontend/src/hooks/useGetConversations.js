import  {  useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
  const getConversations = async () => {
    setLoading(true);
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.get("/api/users");
      if (data.success) {
        setConversations(data.users);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getConversations();
  }, []);

  return { loading, conversations };
};

export default useGetConversations;
