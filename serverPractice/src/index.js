require('./models/User')
require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const authRoutes = require('./routes/authRoutes')
const requireAuth = require('./middlewares/requireAuth')

const app = express();
app.use(bodyParser.json())
app.use(authRoutes)

const mongoURI = process.env.mongoURI
mongoose.connect(mongoURI)

mongoose.connection.on('connected', ()=>{
  console.log('connected to mongo instance')
})

mongoose.connection.on('error', (err)=>{
  console.error('err connecting to mongo instance', err)
})

app.get('/', requireAuth, (req, res) => {
  res.json({
    msg: `Hi there, your email: ${req.user.email}`
  })
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})