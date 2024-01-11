import { Routes, Route } from "react-router-dom";

import Header from './home/component/Header'
import Footer from './home/component/Footer'
import HomeMain from "./home/HomeMain";
import UsreMain from "./user/UserMain"
import BoardMain from "./board/BoardMain";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/user/*" element={<UsreMain />} />
        <Route path='/board/*' element={<BoardMain/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App