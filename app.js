const express = require("express")
const app = express()
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()


const bodyParser=require('body-parser')
app.use(bodyParser.json())

const optionsConnection = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

const mongoose=require("mongoose")
mongoose.connect(process.env.DB_CONNECT,optionsConnection)
.then(()=>{console.log("connected to db")})
.catch(error=>{console.log(`error connect ${error}`)})
const router=require('./router/router')
app.use(cors(), router)
app.listen(process.env.PORT,
  () => console.log(`listening port ${process.env.PORT}`))



