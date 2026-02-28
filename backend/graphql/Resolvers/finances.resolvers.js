// this is for my resolvers here 
// remember we only have resolvers for whereever we have a mutation query or input etc.  
const financeModel = require('../../model/financedata.model.js'); 

const FinanceResolvers = { 
    Query: { 
        // first resolver is going to be the rays finances which gets data from the database 
        raysFinances: async () => { 
            // implement a try and catch case here as such  
            try {
                const retrieveFinances = await financeModel.find(); 
                // if its found lets just return it if not just throw a new error as such 
                if (!retrieveFinances) { 
                    throw new Error('Error retrieving rays finances'); 
                }
                return retrieveFinances; 
            } catch (error) { 
                throw new Error('Error cannot retrieve Rays Finances', error); 
            }
        }, 
        
        numCreditCards: async () => { 
            try { 
                // lets search the database here as such 
                const findCreditCard = await financeModel.find(creditCards); 
                if (!findCreditCard) { 
                    throw new Error('No credit card information entered'); 
                } 
                return findCreditCard; 
            } catch (error) { 
                throw new Error('Error retrieving data on creditcards', error); 
            }
        }

    }
}