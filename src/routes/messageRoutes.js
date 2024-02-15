const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

router.post('/', messageController.createMessage);
router.get("/:conversationId/messages",messageController.getConversationMessages);
router.patch('/:messageId', messageController.updateMessageStatus);
router.delete('/:messageId', messageController.deletedMessage);
module.exports=router;
