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


const App = () => {
  //zona de la logica

  // 🔹 Estado del carrito: array de productos con cantidad
  const [carrito, setCarrito] = useState(getInitialCart);

  // Guardar carrito en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(carrito));
  }, [carrito]);

  // Esta función agrega un producto al carrito de compras.
  const agregarAlCarrito = (producto) => {
    setCarrito(prev => { 
      // Ver si ya existe en el carrito
      const existe = prev.find(item => item.id === producto.id); 
      if (existe) {
        return prev.map(item =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        ); 
      } else {
        // Agregar nuevo producto con cantidad 1
        return [...prev, { ...producto, cantidad: 1 }];
      }
    });
  };

  // 🔹 Función para eliminar producto del carrito
  const eliminarDelCarrito = (id) => {
    const confirmacion = window.confirm("¿Está seguro de que desea vaciar el carrito?");
    if (confirmacion) {
      setCarrito(prev => prev.filter(item => item.id !== id));
    }
  };

  // 🔹 Función para actualizar cantidad
  const actualizarCantidad = (id, nuevaCantidad) => {
    if (nuevaCantidad < 1) return;
    setCarrito(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, cantidad: nuevaCantidad }
          : item
      )
    );
  };


  // 🔹 Función para vaciar carrito
  const vaciarCarrito = () => {
    const confirmacion = window.confirm("¿Está seguro de que desea vaciar el carrito?");
    if (confirmacion) {
      setCarrito([]);
    }
  };

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
    <BrowserRouter>
    <div className="app">
      
    <Header carrito={carrito} 
            actualizarCantidad={actualizarCantidad} 
            eliminarDelCarrito={eliminarDelCarrito} 
            vaciarCarrito={vaciarCarrito}
            enviarPedido={enviarPedido}
    />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/movil" element={<Movil />} />
        <Route path="/laptop" element={<Laptop 
            carrito={carrito} 
            agregarAlCarrito={agregarAlCarrito}         
        />} />
        <Route path="/tienda" element={<Tienda 
            carrito={carrito} 
            agregarAlCarrito={agregarAlCarrito}                                       />} 
        />      
        <Route path="/tablets" element={<Tablets 
            carrito={carrito} 
            agregarAlCarrito={agregarAlCarrito} 
        />} />  
        <Route path="detalle/:id/:title" element={<Detalle />} />
        <Route path="categorias/:cat/:nombre" element={<Categorias 
            carrito={carrito} 
            agregarAlCarrito={agregarAlCarrito}        
        />} />
        <Route path="/busquedas" element={<Busquedas 
            carrito={carrito} 
            agregarAlCarrito={agregarAlCarrito}        
        />} />
        <Route path="/tabla" element={<Tabla />} /> 
        <Route path="*" element={<Inicio />} />

      </Routes>
    <Footer/>
    </div>
   </BrowserRouter>
  )
}

export default App