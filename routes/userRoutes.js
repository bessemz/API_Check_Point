const express=require('express')
const {adduser,getAllUsers,getUserById,UpdateUser,DeleteUser}=require('../controllers/userControllers')
const Router = express.Router()

Router.post('/adduser',adduser)
Router.get('/getAllUsers',getAllUsers)
Router.get('/getuserbyid/:id',getUserById)
Router.put('/UpdateUser/:id',UpdateUser)
Router.delete('/DeleteUser/:id',DeleteUser)
module.exports=Router