import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./component/Footer"
import Header from "./component/Header"
import Error404 from "./pages/Error404"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
// animaciones
import 'animate.css';
import WOW from 'wow.js';
import { useEffect } from "react"
import SinglePage from "./component/SinglePage"

const App = () => {
    // inicializar WOW.js para las animaciones
  useEffect(() => {
    const wow = new WOW({
      live: true // detecta elementos dinámicos
    });
    wow.init();
  }, []);
  return (
    <BrowserRouter>
    <div className='app'>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/shop/:id' element={<Shop/>}></Route>
      <Route path='/error404' element={<Error404/>}></Route>
      <Route path='*' element={<Error404/>}></Route>
    </Routes>
    <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App