const express = require("express");
const welcomeRoute = express.Router();
const welcomeController = require("../controllers/welcome.controller.js");

welcomeRoute.get("/welcome", welcomeController);

module.exports = welcomeRoute;
