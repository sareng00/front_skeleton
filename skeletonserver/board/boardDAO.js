const getPool = require('../common/pool')

const sql = {
  boardList: 'INSERT INTO board (id, name, title, content, cnt, createAt)',
}

const boardDAO = {
  boardList: async (callback) => {
    let conn = null
    try {
      conn = await getPool().getConnection()
      const [boardList] = await conn.query(sql.boardList)
      if (boardList[0]) {
        callback({ status: 500, message: '조회 실패', error: error })
      } else {
        callback({ status: 200, message: "OK", data: [boardList] })
      }
    } catch (error) {
      return { status: 500, message: '조회 실패', error: error }
    } finally {
      if (conn !== null) conn.release()
    }
  }
}
module.exports = boardDAO