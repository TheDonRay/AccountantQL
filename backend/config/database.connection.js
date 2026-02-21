const mongoose = require("mongoose");
const URI = process.env.MONGOURI;

// set up the connection here as such
const DBconnection = async () => {
  // implement a try and catch case here
  try {
    await mongoose.connect(URI);
    console.log("Successfully connected to the database");
    return true;
  } catch (error) {
    console.error("There was an error connecting to the database", error);
    return false;
  }
};

module.exports = DBconnection;
