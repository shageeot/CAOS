//zona de importacion
import { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
//COMPONENTES
import Footer from "./components/Footer"
import Header from "./components/Header"
//PAGINAS
import Inicio from "./pages/Inicio"
import Movil from "./pages/Movil"
import Laptop from "./pages/Laptop"
import Tienda from "./pages/Tienda"
import Detalle from "./pages/Detalle"
import Tablets from "./pages/Tablets"
import Categorias from "./pages/Categorias"
import Busquedas from "./pages/Busquedas"
import Tabla from "./pages/Tabla"

import Tabla2 from "./pages/Tabla2"
import { CarritoProvider } from "./context/CarritoContext"

/*
const getInitialCart = () => {
  try {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const parsed = JSON.parse(savedCart);
      return Array.isArray(parsed) ? parsed : [];
    }
  } catch (e) {
    console.error("Error al cargar el carrito:", e);
    localStorage.removeItem("cart");
  }
  return [];
};
*/

const App = () => {
  //zona de la logica

 
  // 🔹 Función para enviar el pedido
  const enviarPedido = () => {
    const confirmacion = window.confirm("¿Desea finalizar la compra?");
    if (!confirmacion) return; // Sale si cancela
    // Validar carrito vacío
    if (carrito.length === 0) {
      alert("El carrito está vacío");
      return;
    }

    fetch("https://dummyjson.com/carts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: 1,
        products: carrito.map((item) => ({
          id: item.id,
          quantity: item.cantidad,
        })),
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error ${res.status}: ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Pedido creado:", data);
        alert("✅ ¡Gracias por su compra!\nID del carrito: " + data.id);
        setCarrito([]); // Vaciar SOLO si fue exitoso
      })
      .catch((error) => {
        console.error("Error al procesar la compra:", error);
        alert("❌ Error al procesar la compra:\n" + error.message);
      });
  };

  return (
    <CarritoProvider>
      <BrowserRouter>
      <div className="app">
        
      <Header 
            
      />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/movil" element={<Movil />} />
          <Route path="/laptop" element={<Laptop 
                    
          />} />
          <Route path="/tienda" element={<Tienda 
                                                  />} 
          />      
          <Route path="/tablets" element={<Tablets 
            
          />} />  
          <Route path="detalle/:id/:title" element={<Detalle />} />
          <Route path="categorias/:cat/:nombre" element={<Categorias 
                    
          />} />
          <Route path="/busquedas" element={<Busquedas 
                  
          />} />
          <Route path="/tabla" element={<Tabla />} /> 
          <Route path="/tabla2" element={<Tabla2 />} /> 
          <Route path="*" element={<Inicio />} />

        </Routes>
      <Footer/>
      </div>
    </BrowserRouter>
   </CarritoProvider>
  )
}

export default App