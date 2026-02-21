const finances = ` 
    type Finances { 
        AccountTotal: Int!  
        NumOfCreditCards: Int!  
        Card1Bill: Int! 
        Card2Bill: Int!  
        Card1BillDue: String! 
        Card2BillDue: String! 
        GoalAmt: Int! 
    }

    type Query { 
        RaysFinances: [Finances!]!  
        NumCreditCards: Int! 
        CreditCardBills: [Int!]! 
        CreditCardBillDueDates: [String!]! 
        RaysGoalAmount: Int! 
    } 
    
    type Mutation { 
        // define the mutations here for everything. 
    }
`