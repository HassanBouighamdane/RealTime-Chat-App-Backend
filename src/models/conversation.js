const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const conversationSchema = new Schema({
    usersIDs: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
    status: { type: String, enum: ['Active', 'Archived'], default: 'Active' },
});

const Conversation = mongoose.model('User', conversationSchema);

module.exports = Conversation;
