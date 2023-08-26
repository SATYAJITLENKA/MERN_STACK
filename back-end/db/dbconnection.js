const mongoose=require("mongoose");
const url='mongodb://127.0.0.1:27017/mydatabase'

const dbconnect=async()=>{
    try{
        await mongoose.connect(url);
        console.log("Connected to Mongodb");
    }catch(err){
        console.log(err)
    }
}


module.exports=dbconnect;