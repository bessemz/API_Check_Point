const user=require('../modules/userschema')

const adduser=async(req,res)=>{
    console.log(req.body)
    try {
       const newUser=new user(req.body) 
       const User=await newUser.save()
       return res.json({message:"user Added",User})
    } catch (error) {
        res.json(error.message)
    }
}

const getAllUsers=async(req,res)=>{
    try {
       const allUsers=await user.find() 
       return res.json(allUsers)
    }  catch (error) {
        res.json(error.message)
    }
}
const getUserById=async(req,res)=>{
    try {
        const getUserById=await user.findByIda(req.params.id)
        return res.json(getUserById)
    } catch (error) {
        res.json(error.message)
    }
}

const UpdateUser=async(req,res)=>{
    try {
        const Updateuser=await user.findByIdAndUpdate(req.params.id,{$set: {age:req.body.age}},{new:true})
        return res.json(Updateuser)
    }catch (error) {
        res.json(error.message)
    }
}

const DeleteUser=async(req,res)=>{
    try {
        await user.findByIdAndDelete(req.params.id)
        return res.json('user deleted')
    }catch (error) {
        res.json(error.message)
    }
}
module.exports={adduser,getAllUsers,getUserById,UpdateUser,DeleteUser}

