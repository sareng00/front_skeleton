const express = require('express')
const router = express.Router()
const userDAO = require('./userDAO')


router.get('/signup', async (req, res, next) => {
  console.log('user router, signup..........')
  userDAO.signup({ name: '홍길동', email: 'hong@hong.com', password: '1234' }, (resp) => {
    res.send('success')
  })
})

module.exports = router