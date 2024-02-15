const express = require('express');
const router = express.Router();
const conversationController = require('../controllers/conversationController');

router.post('/', conversationController.createConversation);
router.get('/:conversationId', conversationController.getConversationById);
router.patch('/:conversationId', conversationController.updateLastMessage);
router.get('/users/:userId', conversationController.getUserConversations);

module.exports=router;
