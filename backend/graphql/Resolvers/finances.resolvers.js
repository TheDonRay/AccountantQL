// this is for my resolvers here 
// remember we only have resolvers for whereever we have a mutation query or input etc.  
const financeModel = require('../../model/financedata.model.js'); 
// import the AI part here as well   
const openAi = require('openai'); 
const client = new openAi({ 
    apiKey: process.env.APIKEY
}); 

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
                const findCreditCard = await financeModel.findOne(); 
                if (!findCreditCard) { 
                    throw new Error('No credit card information entered'); 
                } 
                return findCreditCard.creditCards.length; 
            } catch (error) { 
                throw new Error('Error retrieving data on creditcards', error); 
            }
        }, 

        creditCardBills: async () => { 
            try { 
                const findBills = await financeModel.findOne(); 
                // some error checking here as such 
                if (!findBills) { 
                    throw new Error('Cannot find credit card bills'); 
                } 
                return findBills.creditCards.map(card => card.bill);  
            } catch (error) { 
                throw new Error('Error retrieving data from the database', error)
            }
        }, 

        creditCardBillDueDates: async () => { 
            try { 
                const findDueDates = await financeModel.findOne();  
                if (!findDueDates) { 
                    throw new Error('Cannot find bills due dates'); 
                } 
                return findDueDates.creditCards.map(card => card.dueDate); 
            } catch (error) { 
                throw new Error('Error retrieving data from the database', error); 
            }
        }, 

        goalAmount: async () => {  
            try {
                const userGoalAmt = await financeModel.findOne(); 
                if (!userGoalAmt) { 
                    throw new Error('Error cannot find goalAmount'); 
                }   
                return userGoalAmt.goalAmt; 
            } catch (error) { 
                throw new Error('Error retrieving data from the backend', error); 
            }
        },  

        // this last one is where we can implement the AI implementation  
        getAccountantAnalysis: async () => { 
            try { 
                const financeData = await financeModel.findOne();

                if (!financeData) {
                    throw new Error('Error finding finance data');
                }
                //get the entire finances data here as such 
                const FullFinanceData = {
                    AccountBalance: financeData.accountTotal,
                    CreditCardInfo: financeData.creditCards,
                    ClientFinancialGoal: financeData.goalAmt,
                };
                // now we want to send this data to the AI as such 
                const accountantAnalysis = await client.chat.completions.create({ 
                    model: "gpt-5-nano", 
                    messages: [ 
                        { 
                            role: "system", 
                            content: "Act as both my financial accountant and financial advisor. Analyze the financial data I provide, identify key expenses and spending patterns, and recommend specific steps I should take to reach my financial goals based on the information given"
                        }, 
                        { 
                            role: 'user', 
                            content: `Client Financial Data:\n${JSON.stringify(FullFinanceData, null, 2)}`
                        }
                    ]
                });  
                // handle some validation here as such  
                if (!accountantAnalysis) { 
                    throw new Error('Error analyzing client financial data'); 
                }
                // return the result now as such  
                financeData.accountantAnalysis = accountantAnalysis.choices[0].message.content
                // save the data here as such 
                await financeData.save();  
                // finally return it
                return financeData; 

            } catch (error) { 
                throw new Error('Error, analysis failed'); 
            }
        }
    }
}; 




//export these resolvers