const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://anujyadav12122003:TRfD0VbI9fwrBDh9@cluster0.5ycqvyq.mongodb.net/paytm");

const userSchema=new mongoose.Schema({
    username:String,
    password:String,
    firstname:String,
    lastname:String
})
const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const Account = mongoose.model('Account', accountSchema);
const User=mongoose.model('User',userSchema);
module.exports={
    User,
    Account
}; 