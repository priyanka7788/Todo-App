const mongoose = require("mongoose")

const schema = new mongoose.Schema({
  data:{
    type:String,
    required:true
  },
  done:{
      type: Boolean,
      default:false
  },

}, {timestamps:true})
module.exports=mongoose.model("todolist",schema)