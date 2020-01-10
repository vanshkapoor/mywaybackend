const mongoose = require('mongoose');
const schema = mongoose.Schema;

const classschema = new schema({
    user:{
		type:Schema.Types.ObjectId,
		ref:'users'
    },
    TotalCLass:{
        type:Number,
        default:0
    },
    classes:[
        {
            student:{
				type:Schema.Types.ObjectId,
				ref:'student'
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
