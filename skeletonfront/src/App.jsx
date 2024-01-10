import { Routes, Route } from 'react-router-dom'

import Header from './home/component/Header.jsx'
import Footer from './home/component/Footer.jsx'
import HomeMain from './home/HomeMain.jsx'
import UserMain from './user/UserMain'

const App = () => {
  return (
    <div>
      <Header/>
      
      <Routes>
        <Route path='/' element={<HomeMain />} />
        <Route path='/users/*' element={<UserMain />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App