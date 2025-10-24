

const ModalProd = ({item}) => {
  return (
    <div className="modal fade" id={`caja${item.id}`} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">{item.title}</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body row">
                    <div className="col-md-4">
                        <img src={item.thumbnail} alt={item.title} className="img-fluid" />
                    </div>
                    <div className="col-md-8">
                        <h3>{item.title}</h3>
                        <div>
                            <b>Marca:</b> {item.brand}<br />
                            <b>Categoria:</b> {item.category}<br />
                            <b>SKU:</b> {item.sku}<br />
                            <b>Stock:</b> {item.stock}<br />
                            <b>Descripcion:</b> {item.description}<br />
                            <h4>Precio: {item.price} </h4>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ModalProd