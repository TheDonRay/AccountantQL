// instead of defining the card structure multiple times we can just nest the credit card type , just define another structure here as such 

const finances = `   
    
    type CreditCard { 
         bill : Int! 
         dueDate: String! 
    }

    type Finances { 
        AccountTotal: Int!  
        creditCards : [CreditCard!]! 
        GoalAmt: Int!  
        AccountantAnalysis: String! 
    }

    type Query { 
        RaysFinances: [Finances!]!  
        NumCreditCards: Int! 
        CreditCardBills: [Int!]! 
        CreditCardBillDueDates: [String!]! 
        RaysGoalAmount: Int!  
        AccountantAnalysis: Finances! 
    } 
    
    type Mutation { 
        // define the mutations here for everything for updating the data that i Have and returning. 
    }
`;
