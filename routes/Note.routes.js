const express=require("express")
const {NoteModel}=require("../models/Notes.model")


const noteRouter=express.Router()
//for all the following things authentication is required.


noteRouter.get("/", async(req,res)=>{
    const notes = await NoteModel.find()
   res.send("All the notes", notes)
})


noteRouter.post("/create", async (req,res)=>{
const payload=req.body
const new_note=new NoteModel(payload)
await new_note.save()
res.send({"msg":"Note Created"})
})


// noteRouter.patch("/update/:id",async (req,res)=>{
//     const payload=req.body //ok
//     const id=req.params.id //ok
//     const note=await NoteModel.findOne({"_id":id})
//     console.log(note)
//     const userID=req.body.authorID
//     console.log("author id from db",note.authorID)
//     console.log("from req.body",userID)
//     try{
//     if(note.authorID!==userID){
//     res.send({"msg":"You are not authorized to perform this operation"})
//     } else {
//     await NoteModel.findByIdAndUpdate({"_id":id},payload)
//     res.send("Updated the note")
//     }
//     }catch(err){
//     console.log(err)
//     res.send({"msg":"Something went wrong"})
//     }
// })


    
noteRouter.delete("/delete/:id", async(req,res)=>{
//logic to delete the notes
const noteID = req.params.id
await NoteModel.findByIdAndDelete({_id:noteID})
res.send({"msg":`Note with id: ${noteID} has been deleted`})

})


module.exports={
noteRouter
}
//import it in index.js as well.