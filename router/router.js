const router=require('express').Router()

const User =require('../controllers/user')

router.post('/createUser',User.createUser())



module.exports=router