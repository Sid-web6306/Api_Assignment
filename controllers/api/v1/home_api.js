const Question = require('../../../model/question_schema');

module.exports.createQuestion = async (req,res)=>{
    try{
        // const {question_type,description,alternative,user_input} = req.body;
        const {question_type} = req.body;
        const {description} = req.body;
        const {alternative} = req.body;
        const {user_input} = req.body;
        const question = Question.create({
            question_type,description,alternative,user_input
        })

        return res.status(200).json({message:`${question_type} Type Question created successfully`})

    }catch(err){
        console.log("something went wrong in creating a question: ",err);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

module.exports.updateQuestion = async (req,res)=>{
    try{
        let _id = req.params.id;
         const {question_type, description,alternative,user_input} = req.body;

         let question = await Question.findOne({_id});
         if(!question){
            Question.create({
                question_type,description,alternative,user_input
            })
         }else{
            question.question_type = question_type;
            question.description = description;
            question.alternative = alternative;
            question.user_input = user_input;
            await question.save();
         }
         return res.status(200).json(question);


    }catch(err){
        console.log("something went wrong in updating a question: ",err);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

module.exports.getQuestions = async (req,res)=>{
    try{
        const questions = await Question.find();
        return res.status(200).json(questions);

    }catch(err){
        console.log("something went wrong in getting a question: ",err);
        return res.status(500).json({message:"Internal Server Error"});
    }
}
module.exports.getFilteredQuestion = async (req,res)=>{
    try{
        // let id = req.query.id;
        let question_type = req.query.question_type;
        console.log(question_type);
        const questions = await Question.find({question_type:{$in:question_type}});
        return res.status(200).json(questions);

    }catch(err){
        console.log("something went wrong in getting a question: ",err);
        return res.status(500).json({message:"Internal Server Error"});
    }
}
module.exports.deleteQuestion = async (req,res)=>{
    try{
        let id = req.query.id;
        const questions = await Question.deleteMany({_id:{$in:id}});
        return res.status(200).json({message:`Questions delete Successfully!!`});

    }catch(err){
        console.log("something went wrong in deleting a question: ",err);
        return res.status(500).json({message:"Internal Server Error"});
    }
}