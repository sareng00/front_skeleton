const express = require('express')
const path = require('path')
const morgan = require('morgan')
const cors = require('cors')
const nunjucks = require('nunjucks')

// 프로젝트 루트에 .env파일 이용
// 다른 폴더, 파일을 이용하려면 매개변수에 지정.
require('dotenv').config()

const homeRouter = require('./home/homeRouter')
const userRouter = require('./user/userRouter')
const boardRouter = require('./board/boardRouter')

const app = express()

app.set('view engine', 'html')
nunjucks.configure('common/views', {
  express: app,
  watch: true
})

app.use(morgan('dev'))
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))

// 클라이언트 요청 데이터, 응답 데이터를 위함
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// 개발자가 각 파일로 분리시킨 라우터 등록
app.use('/', homeRouter)
app.use('/users', userRouter)
app.use('/boards', boardRouter)

// 404일 때
app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url}라우터가 없습니다.`)
  error.status = 404
  // 에러 발생 시 아래의 미들웨어가 처리할 것이다.
  next(error)
})

// error handle middlware
// 에러 전문 middleware는 매개변수가 4개
app.use((err, req, res, next)=>{
  res.locals.message = err.message
  res.locals.error = process.env.NODE_ENV != 'production' ? err : {}
  res.status(err.status||500)
  res.render('error')//erro html
})

app.listen(8000,()=>{
  console.log(8000,'번 포트에서 대기중...')
})