require("dotenv").config(); 
// import database here as such 
const databaseConnection = require('./config/database.connection.js'); 
const { app, express } = require("./app.js");

const PORT = process.env.PORT || 4000;

const startServer = async () => {
  // invoke database connection here as such 
  databaseConnection(); 

  // call the server here

  // mount the apollo server here below

  // set up the listening server
  app.listen(PORT, () => {
    console.log(`Server is successfully running on http://localhost:${PORT}`);
  });
};

// invoke the function here as such
startServer();
