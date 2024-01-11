import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import React, { useCallback, useState, useEffect } from "react"

const BoardDetail = () => {

  const navigate = useNavigate()

  const {id} = useParams()

  const [board, setBoard] = useState({name:"", content:"", title:"", cnt:"", createdAt:""})

  const getBoardDetail = async() => {
    const resp = await axios.get('http://localhost:8000/boards/board/'+id)
    setBoard(resp.data.data)
  }

  const deleteBoard = async (id) => {

  }

  useEffect(() => {
    getBoardDetail()
  }, [])
  return (
    <main id="main">
      <section className="intro-single">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-8">
            <div className="title-single-box">
              <h1 className="title-single">게시물 상세</h1>
              <span className="color-text-a">board</span>
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Properties Grid
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
    <section className="property-grid grid">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <table className="table">
              <tbody>
                <tr>
                  <td>타이틀</td>
                  <td>
                    {board.title}
                  </td>
                </tr>
                <tr>
                  <td>내용</td>
                  <td>
                    {board.content}
                  </td>
                </tr>
                <tr>
                  <td>작성일</td>
                  <td>
                    {board.createdAt}
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className='text-end'>
                    <button type='button' className='btn btn-primary btn-sm' onClick={()=>navigate('/board/list')}>목록</button>
                    {" "}
                    <button type='submit' className='btn btn-warning btn-sm' onClick={() => navigate('/board/update/'+board.id)}>수정</button>
                    {" "}
                    <button type='submit' className='btn btn-warning btn-sm' onClick={() => deleteBoard(board.id)}>삭제</button>
                  </td>
                </tr>
              </tbody>
              
              
            </table>
          </div>
        </div>
      </div>
    </section>
    </main>
  )
}
export default BoardDetail