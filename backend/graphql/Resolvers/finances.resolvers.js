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
            // if its found lets just return i t 
            return retrieveFinances; 
            } catch (error) { 
                throw new Error('Error cannot retrieve Rays Finances'); 
            }
        }
    }
}