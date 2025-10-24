import { Link } from "react-router-dom"
import ModalProd from "./ModalProd"

const CardProd = ({item}) => {
  return (
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 py-2">
                    <div className="card h-100">
                        <div className="card-header text-center">
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
                        </div>
                    </div>

                    <ModalProd item={item}/>


                </div>
  )
}

export default CardProd