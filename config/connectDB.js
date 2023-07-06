const mongoose=require('mongoose')
const connectDB=()=>{
mongoose
.connect("mongodb+srv://bessemzaizaa1:22256442Nbtstat@cluster0.6rfww0o.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log('DB connected!'))
.catch((err)=>console.log(err))
}

module.exports=connectDB