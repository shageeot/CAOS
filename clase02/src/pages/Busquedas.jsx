import { useCallback, useEffect, useState } from "react";
const API='https://dummyjson.com/products/search?q=';
import Cardprod from "../components/CardProd";
import { useLocation } from "react-router-dom";

const Busquedas = ({carrito, agregarAlCarrito}) => {

  const [datos, setDatos] = useState([]); //datos: Almacena los productos recibidos de la API.
  const [loading, setLoading] = useState(true); //loading: Indica si la carga está en progreso (para mostrar un spinner).
  const [error, setError] = useState(null); //error: Guarda el mensaje de error si la petición falla.
  const location = useLocation();
  const txtBuscar = location.state?.trim() || '';
  const URI = txtBuscar ? API + encodeURIComponent(txtBuscar) : null; 


  const getDatos = useCallback(async () => {
        // Si no hay URI válida, no hacemos nada
        if (!URI) {
            setError("No se proporcionó un término de búsqueda.");
            setLoading(false);
            return;
        }

        setLoading(true);
        setError(null);
        setDatos([]); // Limpiamos resultados anteriores para mejor UX

        try {
            const response = await fetch(URI);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setDatos(data.products);
        } catch (err) {
            setError(err.message);
        } finally {
            // Aseguramos que loading siempre se desactive, incluso si hay error
            setLoading(false);
        }
    }, [URI]); // 🔹 Dependencia: URI (que incluye txtBuscar codificado)

  useEffect(() => {
        if (txtBuscar) {
            getDatos();
        } else {
            // Si no hay búsqueda, mostramos error inmediatamente
            setError("No se proporcionó un término de búsqueda.");
            setLoading(false);
        }
    }, [txtBuscar, getDatos]); // ✅ Ahora sin warnings
  if (loading) {
        return (
            <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p>Cargando Personajes...</p>
            </div>
        );
  }
  if (error) {
        return (
            <div className="text-center py-5 text-danger">
                <h4>Error al cargar los Personajes</h4>
                <p>{error}</p>
            </div>
        );
  }
  return (
    <div className="container">
      <h4 className="text-center py-4"> Busquedas {txtBuscar} {datos.length}</h4>
      <div className="row">
        {datos.map((item) => (
            <Cardprod key = {item.id} item={item} carrito={carrito} agregarAlCarrito={agregarAlCarrito} />
        ))}
      </div>
    </div>
  )
}

export default Busquedas