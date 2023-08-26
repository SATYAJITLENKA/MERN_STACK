const express = require('express');
const app = express();
const port = 8000;
const connectDB = require("./db/dbconnection");
const User=require('./db/user')
const cors =require('cors')



app.use(express.json());
app.use(cors());


app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ massage: "registration successful" });

    
  } catch (error) {
    res.status(500).json({ error: "registration failed" });
    console.log(error);
  }
});

app.post('/login',async(req,res)=>{
    try{
        const {username,password}=req.body;
    const user=await User.findOne({username})

    if(!user){
        return res.status(401).json({error:"invalid username or password"})
    }
    if(user.password!==password){
        return res.status(401).json({error:"invalid username or password"})
    }
    res.status(201).json({massage:"login successful"})
    }catch(error){
        res.status(500).json({error:"login failed"})
    }
})

connectDB();






app.listen(port, () => {
  console.log(`server is running on the port ${port}`);
});
