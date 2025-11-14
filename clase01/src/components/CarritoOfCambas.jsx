import { useEffect, useState } from "react";
import { formatCurrency, formatNumber } from "../util/funciones";

const CarritoOfCambas = ({carrito, actualizarCantidad, eliminarDelCarrito, vaciarCarrito, enviarPedido}) => {
  const [total, setTotal] = useState(0);

    // Calcular total cada vez que cambia el carrito
    useEffect(() => {
        const suma = carrito.reduce((acc, item) => acc + (item.price * item.cantidad), 0);
        setTotal(suma);
    }, [carrito]);

  return (
    <div>
        <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>
            
            <div className="mt-3 text-center">
                <button
                    className="btn btn-danger me-2"
                    onClick={vaciarCarrito}
                >
                    Vaciar Carrito
                </button>
                <button onClick={enviarPedido} className="btn btn-primary">
                📤 Enviar Pedido
                </button>
            </div>

            <div className="offcanvas-body">
            {carrito.map((item) => (
                <div className="card mb-3">
                    <div className="card-header text-center p-0">
                        <img src={item.thumbnail} alt={item.title} className="img-fluid" width={150} />   
                    </div>
                    <div className="card-body text-center text-warning">
                        <p className="fs-4">{item.title}</p>
                        <p>
                                <b>Precio: </b>{formatCurrency(item.price)} {" "}
                                <b>Cantidad: </b>{formatNumber(item.cantidad)} {" "}
                                <b>Total: </b>{formatCurrency(item.cantidad * item.price)}
                        </p>
                    </div>
                    <div className="card-footer text-center">
                        <button
                            className="btn btn-sm btn-success me-2"
                            onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}
                        >
                            + Agregar
                        </button>
                        <button
                            className="btn btn-sm btn-danger me-2"
                            onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}
                        >
                            - Restar
                        </button>
                        <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => eliminarDelCarrito(item.id)}
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
            ))}
            <hr />
            <div className="text-center border p-3 rounded-3 bg-light-subtle">
                <p>
                    <strong>Total Productos: </strong> 
                        {formatNumber(carrito.length)}
                </p>
                <p>
                    <strong>Total Item: </strong> 
                        {formatNumber(carrito.reduce((acc, item) => acc + item.cantidad, 0))}
                </p>
                <p>
                    <strong>Total a Pagar: </strong> 
                        ${formatCurrency(total.toFixed(2))}
                </p>
            </div>
            <div className="mt-3">
                <button
                    className="btn btn-danger w-100 mb-2"
                    onClick={vaciarCarrito}
                >
                    Vaciar Carrito
                </button>
                <button onClick={enviarPedido} className="btn btn-primary w-100">
                📤 Enviar Pedido
                </button>
            </div>

            </div>
        </div>
    </div>
  )
}

export default CarritoOfCambas