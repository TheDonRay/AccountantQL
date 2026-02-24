const mongoose = require('mongoose'); 

// need to have another schema to hold credit card bill data as well 
const creditcardSchema = new mongoose.Schema({ 
    bill: { 
        required: true, 
        type: Number, 
    }, 
    dueDate: { 
        required: true, 
        type: String, 
    }, 
}); 

const FinanceModel = new mongoose.Schema({ 
    // we will use the credit card schema as it will follow the Finances code structure here 
    accountTotal: { 
        required: true, 
        type: Number, 
    }, 
    creditCards: [creditcardSchema], 
    goalAmt: { 
        required: true, 
        type: Number, 
    }, 
    accountantAnalysis: { 
        required: true, 
        type: String, 
    }, 
})


module.exports = mongoose.model('accountantmodel', FinanceModel); 
