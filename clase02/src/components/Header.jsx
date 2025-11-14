import { Link, useNavigate } from "react-router-dom"
import FiltroCategorias from "./FiltroCategorias"

import { FaTable } from "react-icons/fa";

import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { formatCurrency, formatNumber } from "../util/funciones";
import CarritoOfCambas from "./CarritoOfCambas";
import { useCarrito } from "../context/CarritoContext";
import CarritoModal from "./CarritoModal";

const Header = () => {

    const {carrito} = useCarrito();

    const [txtbuscar, setTxtbuscar] = useState('');
    const manejoTxt = (e) => {
        setTxtbuscar(e.target.value);
        console.log(txtbuscar)
    };

    const navigate = useNavigate();
    const manejoEnvio = (event) => {
        event.preventDefault();
         if (!txtbuscar.trim()) {
            alert("Por favor, ingresa un término de búsqueda.");
            return;
        }
        navigate('/busquedas', {
            state: txtbuscar,
        });

    };

    
    return (
        <>

        <nav className="navbar navbar-expand-lg bg-menu">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={'/inicio'} className="nav-link active" aria-current="page" href="#">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/movil'} className="nav-link" href="#">Movil</Link>
                        </li>
                         <li className="nav-item">
                            <Link to={'/laptop'} className="nav-link" href="#">Laptop</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/tablets'} className="nav-link" href="#">Tablets</Link>
                        </li>
                         <li className="nav-item">
                            <Link to={'/tienda'} className="nav-link" href="#">Tienda</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/tabla'} className="nav-link" href="#">Tabla</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/tabla2'} className="nav-link" href="#">Tabla2</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorias
                            </a>
                            <ul className="dropdown-menu">
                                <FiltroCategorias/>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex" role="search" onSubmit={manejoEnvio}>
                        <input value={txtbuscar} onChange={manejoTxt} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>
                    
                   {carrito.length > 0 && (
                        <button 
                            type="button" 
                            className="btn btn-outline-warning me-2"
                            data-bs-toggle="modal"
                            data-bs-target="#carritoModal">
                                <div className="d-flex justify-content-between align-items-center gap-2">
                                    <FaTable /><span className="badge bg-danger m-1">{carrito.length}</span>
                                </div>
                        </button>
                    )}

                   
                </div>
            </div>
        </nav>
        <CarritoModal/>
      
        </>

    )
}

export default Header