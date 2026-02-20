require('dotenv').config(); 
const { app, express } = require('./app.js'); 


const PORT = process.env.PORT || 4000; 

const startServer = async () => { 
    // if i have a db i can call it here 

    // call the server here 

    // mount the apollo server here below 

    // set up the listening server 
    app.listen(PORT, () => { 
        console.log(`Server is successfully running on http://localhost:${PORT}`); 
    }); 
 } 

 // invoke the function here as such 
startServer(); 