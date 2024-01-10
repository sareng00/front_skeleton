const express = require('express')
const path = require('path')
const morgan = require('morgan')
const cors = require('cors')
const nunjucks = require('nunjucks')



require('dotenv').config()

const homeRouter = require('./home/homerouter')
const userRouter = require('./user/userRouter')

const app = express()

app.set('view engine', 'html')
nunjucks.configure('common/views',{
  express: app,
  watch: true
})

app.use(morgan('dev'))
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))


app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/', homeRouter)
app.use('/users', userRouter)

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`)
  error.status = 404

  next(error)
})



app.use((err, req, res, next) => {
  res.locals.massage = err.massage
  res.locals.error = process.env.NODE_EVN != 'production' ? err : {}
  res.status(err.status || 500)
  res.render('error')
})

app.listen(8000, () => {
  console.log(8000, '번 포트에서 대기중...')
})