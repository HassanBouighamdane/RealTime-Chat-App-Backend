const messageService = require('../services/messageService')


async function createMessage(req, res) {
    const { senderId,conversationId,receiverId, content } = req.body; 
    try {
        const savedMessage = await messageService.createMessage(senderId, receiverId, conversationId,content);
        res.status(201).json(savedMessage);
    } catch (error) {
        res.status(500).json({ error: 'Error creating message ' });
    }
  }
async function updateMessageStatus(req,res){
    try {
        const messageId=req.params.messageId;
        const{newStatus}=req.body;
        const updatedMessage = await messageService.updateMessageStatus(messageId, newStatus);
    res.status(200).json(updatedMessage);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
async function deletedMessage(req,res){
    try {
        const messageId=req.params.messageId;
        const deletedMessage=await messageService.deleteMessage(messageId);
        res.status(200).json(deletedMessage);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
async function getConversationMessages(req,res){
    try {
        const conversationId = req.params.conversationId;
        const messages = await messageService.getConversationMessages(conversationId);
        res.status(200).json(messages);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}



module.exports={
    createMessage,
    deletedMessage,
    updateMessageStatus,
    getConversationMessages,
    
};