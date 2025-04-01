import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;
    if (!message || !receiverId || !senderId) {
      return res.json({ success: false, message: "Invalid Protocol" });
    }
    let conversation = await Conversation.findOne({
      participants: {
        $all: [senderId, receiverId],
      },
    });
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // Socket.IO Functionality

    // This way or use Promise.all to make the saving in database run in parallel
    // await conversation.save();
    // await newMessage.save();
    await Promise.all([conversation.save(), newMessage.save()]);
    return res.json({ success: true, newMessage });
  } catch (error) {
    console.log("ErrorError in sendMessage controller:", error.message);
    return res.json({ success: false, message: "Error sending message" });
  }
};

// Getting messages
export const getMessage = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;
    const conversation = await Conversation.findOne({
      participants: {
        $all: [senderId, userToChatId],
      },
    }).populate("messages");
    if (!conversation) {
      return res.json([]);
    }
    const messages = conversation.messages;
    return res.json(messages);
  } catch (error) {
    console.log("Error in getMessage controller:", error.message);
    res.json({ success: false, message: "Internal server errror" });
  }
};
