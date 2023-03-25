import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Details from './pages/Details'
import {Routes,Route} from 'react-router-dom'
import Contact from './pages/Contact'




function App() {
  
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details" element={<Details />}/>
      <Route path='/contact' element={<Contact />}/>

    </Routes>
    <Footer />
    </>
    // 
  )
}

export default App
