const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const messageSchema = new Schema({
  
    senderId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    conversationId: { type: Schema.Types.ObjectId, ref: 'Conversation', required: true },
    content: { type: String, required: true },
    files: [{ type: String }], // Array of file paths
    time: { type: Date, default: Date.now },
    status: { type: String, enum: ['Read', 'Delivered', 'Pending'], default: 'Pending' },
  
});

const Message = mongoose.model('User', messageSchema);

module.exports = Message;
