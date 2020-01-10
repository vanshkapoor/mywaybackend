const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentclassschema = new Schema({
    student:{
        type:String,
        required: true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    TotalCLass:{
        type:Number,
        default:0
    },
    date:{
        type:Date,
        default: Date.now
    }
});

const StudentClass = mongoose.model('studentclass',studentclassschema);
module.exports = StudentClass;
