require("dotenv").config();
// import database here as such
const databaseConnection = require("./config/database.connection.js");
const { app, express } = require("./app.js"); 
const { expressMiddleware } = require("@as-integrations/express5");   
//importing the apolloserver here as such 
const apolloserver = require('./graphql/Apolloserver.js'); 

const PORT = process.env.PORT || 4000;

const startServer = async () => {
  // invoke database connection here as such
  databaseConnection();

  // call the server here
  await apolloserver.start(); 
  // mount the apollo server here below
  app.use('/api/v1/clientFinances', express.json(), expressMiddleware(apolloserver)); 
  // set up the listening server
  app.listen(PORT, () => {
    console.log(`Server is successfully running on http://localhost:${PORT}`);
  });
};

// invoke the function here as such
startServer();
