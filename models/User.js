const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userschema = new schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        // required:true
    },
    password:{
        type:String,
        required:true
    }
});

const User = mongoose.model('users',userschema);
module.exports = User;
