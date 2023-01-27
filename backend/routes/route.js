const express=require("express")
const router = express.Router();
const model=require("../model")


router.post('/todos', async (req, res) => {
    try {
        
        const todo = await model.create({data:req.body.data})
        res.status(201).send({status:true,data:todo})
    }
    catch (err) {
        return res.status(500).send({status:false,message:err.message})
    }

    
})
router.get('/todos', async (req, res)=>{
    try {

       const gettodo=await model.find().sort({createdAt:-1})
        res.status(200).send({ status: true, data: gettodo })
    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
})
module.exports=router