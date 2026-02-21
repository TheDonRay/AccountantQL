const welcomeController = async (req, res) => { 
    res.status(200).json({ 
        WelcomeMsg: "Welcome to AccountantQL a graphql based API that handles my finances with AI recommendation and analysis based of the fields I fill out in the query"
    }); 
}; 

module.exports = welcomeController; 