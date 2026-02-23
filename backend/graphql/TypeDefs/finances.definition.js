// instead of defining the card structure multiple times we can just nest the credit card type , just define another structure here as such 

const finances = `   
    
    type CreditCard { 
         bill : Int! 
         dueDate: String! 
    }

    type Finances { 
        accountTotal: Int!  
        creditCards : [CreditCard!]! 
        goalAmt: Int!  
        accountantAnalysis: String! 
    }

    type Query { 
        raysFinances: [Finances!]!  
        numCreditCards: Int! 
        creditCardBills: [Int!]! 
        creditCardBillDueDates: [String!]! 
        raysGoalAmount: Int!  
        getAccountantAnalysis: Finances! 
    } 
    
    type Mutation { 
        createCreditCardBills(bill: Int!, dueDate: String!) : CreditCard! 
        createFinances(accountTotal: Int!, creditCards: [CreditCard!]!, goalAmt: Int!, accountantAnalysis: String!) : Finances!
    }
`;
