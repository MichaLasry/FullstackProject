const Post = require("../models/post")
const Magazine = require("../models/magazine")


const createPost = async (req, res) => {
  try {
      let post = new Post(req.body)
      await post.save()
      let magazine = await Magazine.findById(post.magazine)
      // console.log(post.magazine)
      magazine.posts.push(post._id)
      await magazine.save()
      console.log(post);
      res.send(200).json(post)
  } catch (error) {
      res.status(400).send(error)
  }
}

const getPost = (req,res) =>{
  Post.findById(req.params.postId).populate('magazine').then((post)=>{
    // Task.findById(taskId).populate('user')
    res.status(200).json(post)
  }).catch((error)=>{
    es.status(400).send(error)})
}

const getPosts = async(req,res) => {
  try{
    let posts = await Post.find()
    res.status(200).json(posts)
  }
  catch(err){
    res.status(400).json(err)
  }
}
const deletePost = (req,res)=>{
  Post.findByIdAndDelete(req.params.postId)
  .then(post => {
    Magazine.findByIdAndUpdate(post.magazine, {$pull: {posts: post._id}},{new: true})
    .then((magazine) =>{res.status(200).json({message: 'post deleted!', magazine: magazine})}).catch(err=>res.status(400).json(err))
  }).catch(err=>res.status(400).json(err))
}

const updatePost = async(req,res)=>{
  let {postId}=req.params
  let newValues=req.body
  try{
  let post=await Post.findOneAndUpdate({_id:postId},newValues, {new: true})
  res.status(200).json({message:post})
}
catch(err){
  res.status(400).json(err)
 }
}
module.exports = {createPost, deletePost, getPost, getPosts, updatePost}