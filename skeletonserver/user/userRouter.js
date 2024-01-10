const express = require('express')
const router = express.Router()
const userDAO = require('./userDAO')


router.post('/signup', async (req, res, next) => {
  console.log('user router, signup..........')

  const data = req.body
  userDAO.signup(data, (resp) => {
    res.send(resp)
  })
})

module.exports = router