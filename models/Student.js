const mongoose = require('mongoose');
const schema = mongoose.Schema;

const studentschema = new schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    classes:{
        type:Number,
        // required: false
    }
});

const Student = mongoose.model('student',studentschema);
module.exports = Student;
