const express = require('express');
const {connection} = require("./db");
const { authenticate } = require('./Middlewares/authenticate.middleware');
const { noteRouter } = require('./routes/Note.routes');
const {userRouter} = require("./routes/User.routes")
const cors = require("cors")
require("dotenv").config()

const app = express();

app.use(express.json())
app.use(cors())

app.get("/", (req, res)=>{
    res.send("Home Page");
})

app.use("/users", userRouter)
app.use(authenticate)
app.use("/notes", noteRouter)

// app.post("/register",async (req,res)=>{
//     const {name,email,pass,age}=req.body
//     try{
//     bcrypt.hash(pass, 8, async (err, hash)=>{
//     const user=new UserModel({name,email,pass:hash,age})
//     await user.save()
//     res.send("Registered")
//     });
//     }catch(err){
//     res.send("Error in registering the user")
//     console.log(err)
//     }
//     })
    

app.listen(process.env.port, async() => {
    try{
       await connection
       console.log("Connected to DB")
    }catch(err){
       console.log(err.message)
    }
    console.log(`Server running on port ${process.env.port}`)
})