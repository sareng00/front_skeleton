const getPool = require('../common/pool')

const sql = {
  boardList: 'SELECT * FROM board',
  insert:'INSERT INTO board (name, title, content) VALUES (?,?,?)',
  board: 'SELECT * FROM board WHERE id = ?',
  delete: 'DELETE FROM board WHERE = ?',
  update: 'UPDATE board SET title = ?, content = ? WHERE id = ?',
}

const boardDAO = {

  boardList: async (callback) => {
    let conn = null
    try{
      conn = await getPool().getConnection()

      const [resp] = await conn.query(sql.boardList, [])

      console.log('000', resp)
      callback({status: 200, message: 'OK', data: resp})
    }catch(error){
      return {status: 500, message: '조회 실패', error: error}
    }finally {
      if(conn !== null) conn.release()
    }
  },
  insert: async (item, callback) => {
    let conn = null
    try{
      conn = await getPool().getConnection()

      const [resp] = await conn.query(sql.insert, [item.name, item.title, item.content])

      console.log('000', resp)
      callback({status: 200, message: 'OK', data: resp})
    }catch(error){
      console.log(error)
      return {status: 500, message: '입력 실패', error: error}
    }finally {
      if(conn !== null) conn.release()
    }
  },
  board: async (item, callback) => {
    let conn = null
    try{
      conn = await getPool().getConnection()

      const [resp] = await conn.query(sql.board, item)

      console.log('000', resp)
      callback({status: 200, message: 'OK', data: resp[0]})
    }catch(error){
      console.log(error)
      return {status: 500, message: '입력 실패', error: error}
    }finally {
      if(conn !== null) conn.release()
    }
  },
  delete: async (item, callback) => {

  },
  update: async (item, callback) => {
    
  }
}
module.exports = boardDAO