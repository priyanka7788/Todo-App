const express=require("express")
const router = express.Router();
const model=require("../model")


router.post('/todos', async (req, res) => {
    try {
        
        const todo = await model.create({data:req.body.data})
        res.status(201).json(todo)
    }
    catch (err) {
        return res.status(500).send({status:false,message:err.message})
    }

    
})
router.get('/todos', async (req, res)=>{
    try {

       const gettodo=await model.find().sort({createdAt:-1})
        res.status(200).json(gettodo)
    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
})

router.get('/todos/:id', async (req, res) => {
    try {
        const todo = req.params.id

        const gettodo = await model.findById(todo)
        const settodo = await model.findByIdAndUpdate({ _id: todo }, { done: !gettodo.done }, {new:true})
        await settodo.save()
        res.status(200).json(settodo)

    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
})

router.put('/todos/:id', async (req, res) => {
    try {
        const todo = req.params.id
        const settodo = await model.findOneAndUpdate({ _id: todo }, {data:req.body.data }, { new: true })
        await settodo.save()
        res.status(200).json(settodo)

    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
})
router.delete('/todos/:id', async (req, res) => {
    try {
        const todo = req.params.id
        const settodo = await model.findOneAndDelete({ _id: todo })
        // await settodo.save()
        res.status(200).json(settodo)

    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
})

module.exports=router