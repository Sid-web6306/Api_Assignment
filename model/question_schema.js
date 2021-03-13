const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    question_type:{
        type:String,
        required: true,
    },
    description:{
        type:String,
        required:true,
    },
    alternative:[
        {
            option: {
                type:String
            }
        }
    ],
    user_input:{
        type:String,
        required: true,
    }
},{
    timestamps: true
})
 

module.exports =  mongoose.model('Question',questionSchema);