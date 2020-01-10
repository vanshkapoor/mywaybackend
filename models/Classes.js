const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classschema = new Schema({
    user:{
		type:Schema.Types.ObjectId,
		ref:'users'
    },
    TotalCLass:{
        type:Number,
        default:0
    },
    students:[
        {
            student:{
				type:String
            }
        }
       ],
    date:{
        type:Date,
        default: Date.now
    }

});

const Class = mongoose.model('class',classschema);
module.exports = Class;
