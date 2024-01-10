import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const SignIn = () => {

  const navigate = useNavigate()

  const [data, setData] = useState({ email: '', password: '' })

  const changeData = useCallback((e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }))
  }, [])

  const login = useCallback(async (e) => {
    e.preventDefault()

    const resp = await axios.post('http://localhost:8000/users/signin', data)
    if (resp.data.status === 500) window.alert(resp.data.message)
    else navigate('/')
  }, [data, navigate])
  return (
    <main id="main">

      <section className="intro-single">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="title-single-box">
                <h1 className="title-single">We Do Great Design For Creative Folks</h1>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="#">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    About
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="intro-single">
        <div className="container">
          <h2>Login</h2>
          <form className="row">
            <div className="col-sm12 position-relative form-group mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="text" className="form-control" id="email" name="email"
                value={data.email} onChange={changeData} />
            </div>
            <div className="col-sm12 position-relative form-group mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" name="password"
                value={data.password} onChange={changeData} />
            </div>
            <div className="col-sm12 position-relative form-group mb-3">
              <button type="submit" className="btn btn-danger btr-sm" onClick={login}>send</button>
              <button type="reset" className="btn btn-primary btn-sm">reset</button>
            </div>
          </form>
        </div>
      </section>

      <section className="section-about">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 position-relative">
              <div className="about-img-box">
                <img src="/images/slide-about-1.jpg" alt="" className="img-fluid" />
              </div>
              <div className="sinse-box">
                <h3 className="sinse-title">EstateAgency
                  <span></span>
                  <br /> Sinse 2017
                </h3>
                <p>Art & Creative</p>
              </div>
            </div>
            <div className="col-md-12 section-t8 position-relative">
              <div className="row">
                <div className="col-md-6 col-lg-5">
                  <img src="images/about-2.jpg" alt="" className="img-fluid" />
                </div>
                <div className="col-lg-2  d-none d-lg-block position-relative">
                  <div className="title-vertical d-flex justify-content-start">
                    <span>EstateAgency Exclusive Property</span>
                  </div>
                </div>
                <div className="col-md-6 col-lg-5 section-md-t3">
                  <div className="title-box-d">
                    <h3 className="title-d">Sed
                      <span className="color-d">porttitor</span> lectus
                      <br /> nibh.
                    </h3>
                  </div>
                  <p className="color-text-a">
                    Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget
                    consectetur sed, convallis
                    at tellus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum
                    ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit
                    neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                  </p>
                  <p className="color-text-a">
                    Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                    Mauris blandit aliquet
                    elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed,
                    convallis at tellus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-agents section-t8">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title-wrap d-flex justify-content-between">
                <div className="title-box">
                  <h2 className="title-a">Meet Our Team</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card-box-d">
                <div className="card-img-d">
                  <img src="images/agent-7.jpg" alt="" className="img-d img-fluid" />
                </div>
                <div className="card-overlay card-overlay-hover">
                  <div className="card-header-d">
                    <div className="card-title-d align-self-center">
                      <h3 className="title-d">
                        <Link href="agent-single.html" className="link-two">Margaret Sotillo
                          <br /> Escala</Link>
                      </h3>
                    </div>
                  </div>
                  <div className="card-body-d">
                    <p className="content-d color-text-a">
                      Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.
                    </p>
                    <div className="info-agents color-a">
                      <p>
                        <strong>Phone: </strong> +54 356 945234
                      </p>
                      <p>
                        <strong>Email: </strong> agents@example.com
                      </p>
                    </div>
                  </div>
                  <div className="card-footer-d">
                    <div className="socials-footer d-flex justify-content-center">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <Link href="#" className="link-one">
                            <i className="bi bi-facebook" aria-hidden="true"></i>
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link href="#" className="link-one">
                            <i className="bi bi-twitter" aria-hidden="true"></i>
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link href="#" className="link-one">
                            <i className="bi bi-instagram" aria-hidden="true"></i>
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link href="#" className="link-one">
                            <i className="bi bi-linkedin" aria-hidden="true"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-box-d">
                <div className="card-img-d">
                  <img src="images/agent-6.jpg" alt="" className="img-d img-fluid" />
                </div>
                <div className="card-overlay card-overlay-hover">
                  <div className="card-header-d">
                    <div className="card-title-d align-self-center">
                      <h3 className="title-d">
                        <Link href="agent-single.html" className="link-two">Stiven Spilver
                          <br /> Darw</Link>
                      </h3>
                    </div>
                  </div>
                  <div className="card-body-d">
                    <p className="content-d color-text-a">
                      Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.
                    </p>
                    <div className="info-agents color-a">
                      <p>
                        <strong>Phone: </strong> +54 356 945234
                      </p>
                      <p>
                        <strong>Email: </strong> agents@example.com
                      </p>
                    </div>
                  </div>
                  <div className="card-footer-d">
                    <div className="socials-footer d-flex justify-content-center">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <Link href="#" className="link-one">
                            <i className="bi bi-facebook" aria-hidden="true"></i>
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link href="#" className="link-one">
                            <i className="bi bi-twitter" aria-hidden="true"></i>
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link href="#" className="link-one">
                            <i className="bi bi-instagram" aria-hidden="true"></i>
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link href="#" className="link-one">
                            <i className="bi bi-linkedin" aria-hidden="true"></i>
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link href="#" className="link-one">
                            <i className="bi bi-dribbble" aria-hidden="true"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-box-d">
                <div className="card-img-d">
                  <img src="images/agent-5.jpg" alt="" className="img-d img-fluid" />
                </div>
                <div className="card-overlay card-overlay-hover">
                  <div className="card-header-d">
                    <div className="card-title-d align-self-center">
                      <h3 className="title-d">
                        <Link href="agent-single.html" className="link-two">Emma Toledo
                          <br /> Cascada</Link>
                      </h3>
                    </div>
                  </div>
                  <div className="card-body-d">
                    <p className="content-d color-text-a">
                      Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.
                    </p>
                    <div className="info-agents color-a">
                      <p>
                        <strong>Phone: </strong> +54 356 945234
                      </p>
                      <p>
                        <strong>Email: </strong> agents@example.com
                      </p>
                    </div>
                  </div>
                  <div className="card-footer-d">
                    <div className="socials-footer d-flex justify-content-center">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <Link href="#" className="link-one">
                            <i className="bi bi-facebook" aria-hidden="true"></i>
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link href="#" className="link-one">
                            <i className="bi bi-twitter" aria-hidden="true"></i>
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link href="#" className="link-one">
                            <i className="bi bi-instagram" aria-hidden="true"></i>
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link href="#" className="link-one">
                            <i className="bi bi-linkedin" aria-hidden="true"></i>
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link href="#" className="link-one">
                            <i className="bi bi-dribbble" aria-hidden="true"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default SignIn