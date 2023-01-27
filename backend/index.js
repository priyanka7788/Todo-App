const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require("body-parser")
const route = require("./routes/route")
const multer=require("multer")


mongoose.connect("mongodb+srv://madhusmita_123:5fiVrKsOKBIGJsKe@cluster0.cpbhduk.mongodb.net/merntodolist")
    .then(() => {
    console.log("mongodb is connected")
    })
.catch((err)=>console.log(err))

    mongoose.set('strictQuery', true);
const app = express()
app.use(cors())
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(multer().any())

app.use('/', route)

// app.listen(PORT, () => console.log(`Your server is running successfulyy on PORT ${PORT}`));
app.listen(process.env.PORT || 4000, function () {
    console.log("express app runing on port " + (process.env.PORT || 4000))
})