
const mongoose = require('mongoose');
const Conversation = require('../models/Conversation')

// Function to create a new conversation
async function createConversation(users, lastMessage) {
  try {
    const newConversation = new Conversation({
      users,
      lastMessage
    });
    const savedConversation = await newConversation.save();
    return savedConversation;
  } catch (error) {
    throw new Error('Error creating conversation: ', error.message);
  }
}

// Function to retrieve a conversation by ID
async function getConversationById(conversationId) {
  try {
    const conversation = await Conversation.findById(conversationId);
    return conversation;
  } catch (error) {
    throw new Error('Error retrieving conversation: ', error.message);
  }
}

// Function to retrieve conversations for a user
async function getUserConversations(userId) {
  try {
    const conversations = await Conversation.find({ users: userId });
    return conversations;
  } catch (error) {
    throw new Error('Error retrieving user conversations: ', error.message);
  }
}

// Function to update the last message in a conversation
async function updateLastMessage(conversationId, lastMessage) {
  try {
    // Check if the conversationId is valid
    if (!mongoose.Types.ObjectId.isValid(conversationId)) {
      throw new Error('Invalid conversationId');
    }

    // Check if the lastMessage is provided
    if (!lastMessage) {
      throw new Error('lastMessage is required');
    }

    // Find and update the conversation
    const updatedConversation = await Conversation.findByIdAndUpdate(
      conversationId,
      { $set: { lastMessage } }, // Use $set to update the lastMessage field
      { new: true }
    );

    // Check if the conversation is found and updated
    if (!updatedConversation) {
      throw new Error('Conversation not found or could not be updated');
    }

    return updatedConversation;
  } catch (error) {
    throw new Error('Error updating last message: ' + error.message);
  }
}


module.exports = {
    createConversation,
    getUserConversations,
    getConversationById,
    updateLastMessage,
}