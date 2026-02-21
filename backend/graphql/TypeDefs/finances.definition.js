const finances = ` 
    type Finances { 
        AccountTotal: Int!  
        NumOfCreditCards: Int!  
        Card1Bill: Int! 
        Card2Bill: Int!  
        Card1BillDue: String! 
        Card2BillDue: String! 
        GoalAmt: Int! 
    }, 

    type Query { 
        RaysFinances: [Finances!]!  
        NumCreditCards: NumOfCreditCards! : Finances!   
        CreditCardBills: [Card1Bill!, Card2Bill! : Finances! 
        CreditCardBillDueDates: [Card1BillDue!, Card2BillDue!] : Finances! 
        RaysGoalAmount: GoalAmt! : Finances! 
    } 
    
    type Mutation { 
        
    }
`