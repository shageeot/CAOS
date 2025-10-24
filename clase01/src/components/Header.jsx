import { Link, useNavigate } from "react-router-dom"
import FiltroCategorias from "./FiltroCategorias"
import { useState } from "react";

const Header = () => {

    const [txtbuscar, setTxtbuscar] = useState('');
    const manejoTxt = (e) => {
        setTxtbuscar(e.target.value);
        console.log(txtbuscar)
    };

    const navigate = useNavigate();
    const manejoEnvio = (event) => {
        event.preventDefault();
        navigate('/busquedas', {
            state: txtbuscar,
        });

    };

    return (
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
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

    )
}

export default Header