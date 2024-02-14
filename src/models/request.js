const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const reqSchema = new Schema({
    usersIDs: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
    status: { type: String, enum: ['Accepted', 'Refused', 'Canceled'], required: true },
});

const Request = mongoose.model('User', reqSchema);

module.exports = Request;
