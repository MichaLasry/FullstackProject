const mongoose=require('mongoose')
const User =require('../models/user')
const Magazine =require('../models/magazine')


const createUser = async (req, res) => {

    let currentUser = new User(req.body)
    
    try {
        await currentUser.save()
        console.log('user saved ', currentUser)
     
        res.status(200).json({
            User: currentUser
        })
    } 
    catch (error) {
        res.json({status: 400, message: error})
        console.log('cannot saved user', error)

    }
}

const deleteUser = async (req, res) => {
    let userId = req.params.userId
    await User.findByIdAndDelete(userId, (error, user) => {
        if (error)
            res.send(error)
        else {
            if (user) {
                console.log('deleted user..');
                console.log(user.magazines);
                try { 
                    user.magazines.map(async magazine => {
                    console.log('magazine:', magazine._id);
                    await Magazine.findByIdAndDelete(magazine._id)
                    console.log('deleted magazine..', magazine._id);
                })
                res.json(user)
            }
            catch{
                console.log('cannot find magazine..' ,error);
            }
            } 
            else {
                res.send('cannot find user: ',userId)
            }
        }
    })
}
2
const getAllUsers = async (req, res) => {
    console.log("getAllUsers..")
    try {
        let users = await User.find()
        res.json(users)
    } 
    catch (error) {
        res.json(error)
    }
}

const updateUser = async (req,res)=>{
    try {
        console.log("updateUser...");
        let userId=req.params.userId
        console.log("params...",userId);
        console.log("body...",req.body);
         await User.findByIdAndUpdate(userId,req.body)
        
        // await user.save()
        console.log('user saved... ')
     
        res.status(200).json(user)
    }
     catch (error) {
        
        res.json({status: 400, message: error})
        console.log('cannot saved user', error)
    }
}
module.exports=
    {
        createUser,
        deleteUser,
        getAllUsers,
        updateUser
    }