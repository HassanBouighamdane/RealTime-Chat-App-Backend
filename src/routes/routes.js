const express = require("express");
const user = require("./user");

module.exports = function (app) {
    //json parser
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

   
    //routers
    app.use("/api/user", user);
}