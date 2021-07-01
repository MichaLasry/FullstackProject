const router=require('express').Router()
const postFunctions = require('../controllers/post')

const User =require('../controllers/user')

router.post('/createUser',User.createUser)
router.post('/createPost', postFunctions.createPost)
router.get('/getPost/:postId', postFunctions.getPost)
router.get('/getPosts', postFunctions.getPosts)
router.delete('/deletePost/:postId', postFunctions.deletePost)
router.patch('/updatePost/:postId', postFunctions.updatePost)



module.exports=router