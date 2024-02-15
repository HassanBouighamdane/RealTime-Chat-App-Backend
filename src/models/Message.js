const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const MessageSchema=new Schema({
    senderId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    receiverId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    conversationId: { 
        type: Schema.Types.ObjectId, 
        ref: 'Conversation', 
        required: true },
    content: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['pending', 'delivered', 'read'],
        default: 'pending'
      }
});
module.exports = Message = mongoose.model("messages", MessageSchema);