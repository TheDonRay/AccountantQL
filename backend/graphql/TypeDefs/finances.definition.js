const finances = ` 
    type Finances { 
        AccountTotal: Int!  
        NumOfCreditCards: Int!  
        Card1Bill: Int! 
        Card2Bill: Int!  
        Card1BillDue: String! 
        Card2BillDue: String! 
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
