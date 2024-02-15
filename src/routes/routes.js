const express = require("express");
const userRoutes = require("./userRoutes");
const messageRoutes = require("./messageRoutes");
const conversationRoutes = require("./conversationRoutes");

module.exports = function (app) {
    //json parser
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

   
    //routers
app.use('/api/users', userRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/conversations', conversationRoutes);
}