const express = require('express');   
const app = express(); 

// import any routes below here as such  
const welcomeRoute = require('./routes/welcome.route.js'); 

app.use(express.json());  

//mount and use routes here.  
app.use('/api/v1', welcomeRoute); 

app.get('/', (req, res) => { 
    res.json({ 
        Server: "Welcome to AccountantQL - A graphQL project"
    }); 
}); 


module.exports = { app, express }; 