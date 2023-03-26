import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import {Routes,Route} from 'react-router-dom'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Details from './pages/Details'




function App() {
  
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/gallery" element={<Gallery />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/details/:id' element={<Details />}/>

    </Routes>
    <Footer />
    </>
    // 
  )
}

export default App
