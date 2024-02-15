const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        default: function() {
            return this.firstname + this.lastname;
        },
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String
    },
    location: {
        type: String
    },
    picture: {
        type: String
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    dateOfBirth: {
        type: Date
    },
    registerDate: {
        type: Date,
        default:Date.now,
    }

});
module.exports = User = mongoose.model("users", UserSchema);