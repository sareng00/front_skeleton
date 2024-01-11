import axios from "axios";
import React,{useCallback,useState} from "react";
import { useNavigate } from "react-router-dom";

const BoardInsert = () =>{

  const navigate = useNavigate() 
  const [insert, setBoarInsert] = useState({
    status: '', message: '', data: []
  })
  const getBoardInsert = useCallback(async (e) => {
    e.preventDefault();
    const resp = await axios.post("http://localhost:8000/board/insert", data);
      if (resp.data.status === 500) window.alert('게시물 입력 실패')
      else navigate('/board')
  }, [data, navigate])

  useEffect(() => {
    getBoardInsert()
  }, [getBoardInsert])


  return(
    <main id="main">
      {/* <!-- ======= Intro Single ======= --> */}
      <section class="intro-single">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-lg-8">
              <div class="title-single-box">
                <h1 class="title-single">게시물 입력</h1>
                <span class="color-text-a">Insert</span>
              </div>
            </div>
            <div class="col-md-12 col-lg-4">
              <nav aria-label="breadcrumb" class="breadcrumb-box d-flex justify-content-lg-end">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Properties Grid
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section class="property-grid grid">
        <div class="container">
          <div class='row'>
            <div class='col-sm-12'>
              <table class='table'>
                <tbody>
                  <tr>
                    <td>이름</td>
                    <td>
                      <input type="text" class='form-control' name='name'/>
                    </td>
                  </tr>
                  <tr>
                    <td>타이틀</td>
                    <td>
                      <input type="text" class='form-control' name='title'/>
                    </td>
                  </tr>
                  <tr>
                    <td>내용</td>
                    <td>
                      <textarea cols="80" rows="10" name="content" class='form-control'></textarea>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2" class="text-end">
                      <button type="button" class="btn btn-primary btn-sm">취소</button>
                      {" "}
                      <button type="submit" class="btn btn-primary btn-sm">입력</button>
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

export default BoardInsert