const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema for Users
const ConversationSchema = new Schema({
    users: [
        { type: Schema.Types.ObjectId, 
        ref: 'users' }
    ],
    lastMessage: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = Conversation = mongoose.model(
    'conversations',
    ConversationSchema
);
