const express = require('express')
const jwt = require('jsonwebtoken')
const { default: mongoose } = require('mongoose')
const User = mongoose.model('User')
require('dotenv').config()

const router = express.Router()

router.post('/signup', async(req, res) => {
  const { email, password } = req.body

  try {
    const user = new User({ email, password })
    const saveResult = await user.save()

    const token = jwt.sign({ userId: user.id}, process.env.jwtsecret)
    return res.json({
      token,
      
    })
  } catch (error) {
    return res.status(422).json({ message: error.message })
  }
})

router.post('/signin', async(req, res) => {
  const { email, password } = req.body

  if(!email || !password){
    return res.status(422).json({ message: 'Must provide email ^ password' })
  }
  try {
    const user = await User.findOne({ email })
    if(!user){
      return res.status(404).json({ message: 'Email not found' })
    }

    await user.comparePassword(password)
    const token = jwt.sign({ userId: user._id }, process.env.jwtsecret)
    return res.json({
      token
    })
  } catch (error) {
    return res.status(422).json({ message: error.message })
  }
})
module.exports = router