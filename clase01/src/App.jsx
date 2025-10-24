//zona de importacion

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Inicio from "./pages/Inicio"
import Movil from "./pages/Movil"
import Laptop from "./pages/Laptop"
import Tienda from "./pages/Tienda"
import Detalle from "./pages/Detalle"
import Tablets from "./pages/Tablets"
import Categorias from "./pages/Categorias"
import Busquedas from "./pages/Busquedas"
import Tabla from "./pages/Tabla"


const App = () => {
  //zona de la logica

  return (
    <BrowserRouter>
    <div className="app">
    <Header/>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/movil" element={<Movil />} />
        <Route path="/laptop" element={<Laptop />} />
        <Route path="/tienda" element={<Tienda />} />      
        <Route path="/tablets" element={<Tablets />} />  
        <Route path="detalle/:id/:title" element={<Detalle />} />
        <Route path="categorias/:cat/:nombre" element={<Categorias />} />
        <Route path="/busquedas" element={<Busquedas />} />
        <Route path="/tabla" element={<Tabla />} /> 
        <Route path="*" element={<Inicio />} />

      </Routes>
    <Footer/>
    </div>
   </BrowserRouter>
  )
}

export default App