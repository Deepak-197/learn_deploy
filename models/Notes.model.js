const mongoose=require("mongoose");

const noteSchema=mongoose.Schema({
    titile: String,
    body: String,
    user: String,
   
})

const NoteModel=mongoose.model("note",noteSchema)

module.exports={
  NoteModel
}
