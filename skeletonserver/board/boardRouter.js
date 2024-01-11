const express = require('express')
const router = express.Router()
const boardDAO = require('./boardDAO')

 
router.get('/boardList', function(req, res, next) {
  boardDAO.boardList((resp) => {
    res.json(resp)
  })
})

router.post('/insert', function(req, res, next)  {

  const data = req.body
  boardDAO.insert(data, (resp) => {
    res.json(resp)
  })
})

router.get('/board/:id', function(req, res, next){
  const id = req.params.id
  boardDAO.board(id, (resp) => {
    res.json(resp)
  })
})

router.post('/delete/:id', function(req, res, next){

})
router.post('/update', function(req, res, next){
  
})
module.exports = router