import { Link } from "react-router-dom"
import ModalProd from "./ModalProd"

const CardProd = ({item, carrito, agregarAlCarrito}) => {
  const agregar  = () => {
       agregarAlCarrito(item); // 👈 Llamamos a la función que viene de App       
  };

// 🔍 Ver si este producto está en el carrito
const enCarrito = carrito.find(producto => producto.id === item.id);


  return (
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 py-2">
                    <div className="card h-100">
                        <div className="card-header text-center">
                            {/* 🔹 Badge de cantidad si está en carrito */}
                            {enCarrito && (
                                <span className="position-absolute top-0 end-0 badge rounded-pill text-bg-warning fs-4 m-2">
                                    {enCarrito.cantidad}
                                </span>
                            )}
                            <img src={item.thumbnail} alt={item.title} className="img-fluid" />
                        </div>
                        <div className="card-body text-center">
                             <p className="fs-5">
                                {item.title}<br/>
                                <span className="small">{item.brand}</span>
                            </p>
                             <p className="badge text-bg-info">Precio: {item.price}</p>
                        </div>
                        <div className="card-footer text-center">
                           <a href="" className="btn btn-outline-info btn-sm me-2" 
                           data-bs-toggle="modal" 
                           data-bs-target={`#caja${item.id}`}>Modal</a>
                            <Link to={`/detalle/${item.id}/${item.title}`} href="" className="btn btn-danger btn-sm">
                                Detalle
                            </Link>

                            <hr />
                            <button className="btn btn-success btn-sm" onClick={agregar}>
                                + Agregar al Carrito
                            </button>
                        </div>
                    </div>

                    <ModalProd item={item}/>


                </div>
  )
}

export default CardProd