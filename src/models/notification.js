const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const notificationSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    time: { type: Date, default: Date.now },
  
});

const Notification = mongoose.model('User', notificationSchema);

module.exports = Notification;