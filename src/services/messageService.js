const Message = require("../models/Message")
const conversationService=require("./conversationService")

async function createMessage(senderId, receiverId, conversationId, content) {
    try {
      const newMessage = new Message({
        senderId,
        receiverId,
        conversationId,
        content
      });
      const savedMessage = await newMessage.save();
      const updatedConversation = await conversationService.updateLastMessage(conversationId, content);
      return savedMessage;
    } catch (error) {
      throw new Error('Error creating message: ', error.message);
    }
  }
  
  // Function to retrieve messages for a conversation
  async function getConversationMessages(conversationId) {
    try {
      const messages = await Message.find({ conversationId: conversationId });
      return messages;
    } catch (error) {
      throw new Error('Error retrieving messages: ', error.message);
    }
  }
  
  // Function to update message status
  async function updateMessageStatus(messageId, newStatus) {
    try {
      const updatedMessage = await Message.findByIdAndUpdate(
        messageId,
        { status: newStatus },
        { new: true }
      );
      return updatedMessage;
    } catch (error) {
      throw new Error('Error updating message status: ', error.message);
    }
  }
  
  // Function to delete a message
  async function deleteMessage(messageId) {
    try {
      const deletedMessage = await Message.findByIdAndDelete(messageId);
      return deletedMessage;
    } catch (error) {
      throw new Error('Error deleting message: ', error.message);
    }
  }

  module.exports = {
    createMessage,
    getConversationMessages,
    updateMessageStatus,
    deleteMessage,
  };
  