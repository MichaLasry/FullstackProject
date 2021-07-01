const mongoose=require('mongoose')


const createUser = async (req, res) => {

    console.log("req.body", req.body.userName)
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
        console.log('cannot saved user', error);
    }
}

module.exports={createUser}