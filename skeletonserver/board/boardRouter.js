const express = require('express')
const router = express.Router()
const boardDAO = require('./boardDAO')

router.get('/boardList', function(req, res, next) {
  console.log('boardlist........')

  const data = req.body
  boardDAO.boardList(data, (resp) => {
    res.json(resp)
  })
})

module.exports = router