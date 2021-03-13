const express = require('express');

const router = express.Router();
const questionController = require('../../../controllers/api/v1/home_api')

router.get('/',(req,res)=>{
    return res.status(200).json({message:"Welcome to Wysa Api"});
});
router.post("/create",questionController.createQuestion);
router.get('/questions',questionController.getQuestions);
router.get('/questions/filterQuestions',questionController.getFilteredQuestion);
router.delete('/questions/deleteQuestions',questionController.deleteQuestion);
router.put('/questions/updateQuestion/:id',questionController.updateQuestion);
module.exports = router;