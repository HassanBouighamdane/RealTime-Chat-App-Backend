const conversationService=require("../services/conversationService")

async function createConversation(req,res){
    try {
        const { users, lastMessage } = req.body;
        const newConversation = await conversationService.createConversation(users, lastMessage);
        res.status(201).json(newConversation);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

async function getConversationById(req,res){
    try {
        const conversationId = req.params.conversationId;
        const conversation = await conversationService.getConversationById(conversationId);
        res.status(200).json(conversation);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}
async function updateLastMessage(req,res){
    try {
        const conversationId = req.params.conversationId;
        const { lastMessage } = req.body;
        const updatedConversation = await conversationService.updateLastMessage(conversationId, lastMessage);
        res.status(200).json(updatedConversation);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

async function getUserConversations(req,res){
    try {
        const userId = req.params.userId;
        const conversations = await conversationService.getUserConversations(userId);
        res.status(200).json(conversations);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}
module.exports={
    updateLastMessage,
    getConversationById,
    createConversation,
    getUserConversations
};