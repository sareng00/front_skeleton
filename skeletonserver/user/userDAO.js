const bcrypt = require('bcrypt')
const getPool = require('../common/pool')

const sql = {
  checkId: 'SELECT * FROM user WHERE email = ?',
  signup: 'INSERT INTO user (name, email, password) VALUES (?,?,?)',
}


const userDAO = {
  signup: async (item, callback) => {
    let conn = null
    try {
      conn = await getPool().getConnection()

      console.log('dao', item)

      const [respCheck] = await conn.query(sql.checkId, item.email)
      if (respCheck[0]) {
        callback({ status: 500, message: '사용자가 존재합니다.' })
      } else {
        const salt = await bcrypt.genSalt()
        bcrypt.hash(item.password, salt, async (error, hash) => {
          if (error) callback({ status: 500, message: '암호화 실패', error: error })
          else {
            const [resp] = await conn.query(sql.signup, [item.name, item.email, hash])
            callback({ status: 200, message: 'OK', data: resp })
          }
        })
      }
    } catch (error) {
      return { status: 500, message: '유저 입력 실패', error: error }
    } finally {
      if (conn !== null) conn.release()
    }
  }
}

module.exports = userDAO