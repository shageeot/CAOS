import { useEffect, useMemo, useState } from "react"

import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';

import { FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaAngleDoubleRight} from 'react-icons/fa';

import { FaEye, FaInfoCircle} from 'react-icons/fa'
import { Link } from "react-router-dom";
import ModalProd from "../components/ModalProd";

const API='https://dummyjson.com/products?limit=200';

const Tabla = () => {
  const [datos, setDatos] = useState([]); //datos: Almacena los productos recibidos de la API.
  const [loading, setLoading] = useState(true); //loading: Indica si la carga está en progreso (para mostrar un spinner).
  const [error, setError] = useState(null); //error: Guarda el mensaje de error si la petición falla.
  //Filtrado
  const [searchTerm, setSearchTerm] = useState('');
  
  /*ordenar PARA LOS ICONOS DE ORDENAMIENTO*/
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  //paginar
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  

  //filtro por categoria
  const [selectedCategory, setSelectedCategory] = useState(''); 

  const getDatos = async () => {
        try {
            const response = await fetch(API);
            if (!response.ok) {
                throw new Error("HTTP error! status: " + response.status);
            }
            const data = await response.json();
            console.log(data);
            setDatos(data.products);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };
     useEffect(() => {
        getDatos();
    }, []);
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm]);


   
    /*FILTRADO*/
    const filteredData = useMemo(() => {
        return datos.filter(item => {
            const matchesSearch = 
            (item.title?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
            (item.brand?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
            (item.category?.toLowerCase() || '').includes(searchTerm.toLowerCase());

            const matchesCategory = selectedCategory === '' || selectedCategory === 'Todas' || item.category === selectedCategory;

            return matchesSearch && matchesCategory;
        });
    }, [datos, searchTerm, selectedCategory]);
    /*FILTRADO*/

     // Resúmenes globales (asegurando que sean números)
    const totalStockF          = filteredData.reduce((sum, item) => sum + Number(item.stock), 0);
    const totalInventoryValueF = filteredData.reduce((sum, item) => sum + Number(item.price) * Number(item.stock), 0);



    // Resúmenes globales (asegurando que sean números)
    const totalStock          = datos.reduce((sum, item) => sum + Number(item.stock), 0);
    const totalInventoryValue = datos.reduce((sum, item) => sum + Number(item.price) * Number(item.stock), 0);

    /*FUNCION PARA ORDENAR*/
     const handleSort = (key) => {
            let direction = 'asc';
            if (sortConfig.key === key && sortConfig.direction === 'asc') {
                direction = 'desc';
            }
            setSortConfig({ key, direction });
      }
      const sortedData = useMemo(() => {
            if (!sortConfig.key) return filteredData;

            return [...filteredData].sort((a, b) => {
                const aValue = a[sortConfig.key];
                const bValue = b[sortConfig.key];

                if (aValue === bValue) return 0;

                if (typeof aValue === 'string' && typeof bValue === 'string') {
                    return sortConfig.direction === 'asc'
                        ? aValue.localeCompare(bValue, 'es', { numeric: true })
                        : bValue.localeCompare(aValue, 'es', { numeric: true });
                }

                if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
                if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
                return 0;
            });
      }, [filteredData, sortConfig]);
     /*FUNCION PARA ORDENAR*/

    /*PAGINAR*/

    const totalPages = Math.ceil(sortedData.length / itemsPerPage);
    
    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };
    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const paginatedData = useMemo(() => {
            const startIndex = (currentPage - 1) * itemsPerPage;
            return sortedData.slice(startIndex, startIndex + itemsPerPage);
    }, [sortedData, currentPage, itemsPerPage]);
    
    const getPageNumbers = () => {
        const delta = 2; // Cuántos botones a cada lado de la página actual
        const range = [];
        const rangeWithDots = [];

        for (let i = Math.max(1, currentPage - delta); 
            i <= Math.min(totalPages, currentPage + delta); i++) {
            range.push(i);
        }

        if (range[0] > 1) {
            rangeWithDots.push(1);
            if (range[0] > 2) rangeWithDots.push('...');
        }

        rangeWithDots.push(...range);

        if (range[range.length - 1] < totalPages) {
            if (range[range.length - 1] < totalPages - 1) rangeWithDots.push('...');
            rangeWithDots.push(totalPages);
        }

        return rangeWithDots;
    };

    /*PAGINAR*/

    
    /*FILTRO POR CATEGORIA*/
    const categories = useMemo(() => {
        const cats = datos.map(item => item.category);
        return ['Todas', ...new Set(cats)].sort(); // 'Todas' al inicio
    }, [datos]);
    /*FILTRO POR CATEGORIA*/

    /*Resumen por Categoría*/
    const categorySummary = useMemo(() => {
        const summary = {};
        datos.forEach(item => {
            if (!summary[item.category]) {
                summary[item.category] = {
                    category: item.category,
                    productCount: 0,
                    totalStock: 0,
                    totalValue: 0,
                    percent: 0
                };
            }
            summary[item.category].productCount += 1;
            summary[item.category].totalStock += Number(item.stock);
            summary[item.category].totalValue += Number(item.price) * Number(item.stock);
        });

        const totalValue = Object.values(summary).reduce((acc, cat) => acc + cat.totalValue, 0);

        Object.values(summary).forEach(cat => {
            cat.percent = (cat.totalValue / totalValue) * 100;
        });

        return Object.values(summary).sort((a, b) => a.category.localeCompare(b.category));
    }, [datos]); // 👈 ¡Depende de `datos`, no de `filteredData`!

    const globalTotals = useMemo(() => {
    return datos.reduce((acc, item) => {
            acc.productCount += 1;
            acc.totalStock += Number(item.stock);
            acc.totalValue += Number(item.price) * Number(item.stock);
            return acc;
        }, { productCount: 0, totalStock: 0, totalValue: 0 });
    }, [datos]);
    /*Resumen por Categoría*/

    /*FORMATEO*/
    const formatCurrency = (value) => {
        const numericValue = Number(value);
        if (isNaN(numericValue)) {
            return '0,00';
        }
        // Forzar formato con separador de miles siempre
        const parts = numericValue.toFixed(2).split('.');
        const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        const decimalPart = parts[1];
        return `${integerPart},${decimalPart}`;
    };

    const formatNumber = (value) => {
        const numericValue = Number(value);
        if (isNaN(numericValue)) {
            return '0';
        }
        // Formato sin decimales
        const integerValue = Math.round(numericValue);
        return integerValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    };
    /*FORMATEO*/

    if (loading) {
        return (
            <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p>Cargando Productos...</p>
            </div>
        );
    }
    if (error) {
        return (
            <div className="text-center py-5 text-danger">
                <h4>Error al cargar los Productos</h4>
                <p>{error}</p>
            </div>
        );
    }

  return (
    <div className="container">
        <h4 className="text-center py-4">Tabla</h4>
        <div>
            <p className="text-center fs-3 text-info">Total Inventario {formatCurrency(totalInventoryValue)}</p>
        </div>
        <div className="text-end my-3">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Total por Categorias
            </button>
        </div>
        <div className="row justify-content-end">
            <div className="col-md-6">
                <div className="d-flex justify-content-between">
                    <nav>
                        <ul className="pagination">
                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                <button className="page-link" onClick={() => goToPage(1)} disabled={currentPage === 1}>
                                    <FaAngleDoubleLeft />
                                </button>
                            </li>
                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                <button className="page-link" onClick={prevPage} disabled={currentPage === 1}>
                                    <FaAngleLeft />
                                </button>
                            </li>
                            {getPageNumbers().map((pageNum, index) => (
                                <li
                                    key={index}
                                    className={`page-item ${pageNum === currentPage ? 'active' : ''} ${pageNum === '...' ? 'disabled' : ''}`}
                                >
                                    {pageNum === '...' ? (
                                        <span className="page-link">...</span>
                                    ) : (
                                        <button
                                            className="page-link"
                                            onClick={() => goToPage(pageNum)}
                                        >
                                            {pageNum}
                                        </button>
                                    )}
                                </li>
                            ))}

                            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                <button className="page-link" onClick={nextPage} disabled={currentPage === totalPages}>
                                    <FaAngleRight />
                                </button>
                            </li>
                            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                <button
                                    className="page-link"
                                    onClick={() => goToPage(totalPages)}
                                    disabled={currentPage === totalPages}
                                >
                                    <FaAngleDoubleRight />
                                </button>
                            </li>
                            <li>
                                <select
                                    value={itemsPerPage}
                                    onChange={(e) => {
                                        setItemsPerPage(Number(e.target.value));
                                        setCurrentPage(1); // Reiniciar a página 1 al cambiar items per page
                                    }}
                                    className="form-select w-auto d-inline-block ms-2"
                                >
                                    <option value={10}>10</option>
                                    <option value={20}>20</option>
                                    <option value={30}>30</option>
                                    <option value={50}>50</option>
                                    <option value={75}>75</option>
                                    <option value={100}>100</option>
                                </select>
                            </li>
                        </ul>

                    </nav>
                </div>
            </div>
            <div className="col-md-3">
                <select
                    className="form-select"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    {categories.map((cat, index) => (
                    <option key={index} value={cat === 'Todas' ? '' : cat}>
                        {cat}
                    </option>
                    ))}
                </select>
            </div>
            <div className="col-md-3 ">
                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Buscar por nombre, marca o categoría..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
        <div>
            <table className="table">
                <thead className="table-info text-center">
                    <tr>
                        
                        <th className="text-end" style={{ cursor: 'pointer' }} onClick={() => handleSort('id')}>
                                ID
                                {sortConfig.key === 'id' ? (
                                        sortConfig.direction === 'asc' ? <FaSortUp className="ms-3 fs-3 text-success" /> : <FaSortDown className="ms-3  fs-3 text-success" />
                                ) : (
                                        <FaSort className="ms-3 fs-3" />
                                )}
                        </th>
                        <th>Imagen</th>
                        <th className="text-end" style={{ cursor: 'pointer' }} onClick={() => handleSort('title')}>
                                Nombre
                                {sortConfig.key === 'title' ? (
                                        sortConfig.direction === 'asc' ? <FaSortUp className="ms-3 fs-3 text-success" /> : <FaSortDown className="ms-3  fs-3 text-success" />
                                ) : (
                                        <FaSort className="ms-3 fs-3" />
                                )}
                        </th>
                        <th className="text-end" style={{ cursor: 'pointer' }} onClick={() => handleSort('category')}>
                                Categoria
                                {sortConfig.key === 'category' ? (
                                        sortConfig.direction === 'asc' ? <FaSortUp className="ms-3 fs-3 text-success" /> : <FaSortDown className="ms-3  fs-3 text-success" />
                                ) : (
                                        <FaSort className="ms-3 fs-3" />
                                )}
                        </th>
                        <th className="text-end" style={{ cursor: 'pointer' }} onClick={() => handleSort('brand')}>
                                Marca
                                {sortConfig.key === 'brand' ? (
                                        sortConfig.direction === 'asc' ? <FaSortUp className="ms-3 fs-3 text-success" /> : <FaSortDown className="ms-3  fs-3 text-success" />
                                ) : (
                                        <FaSort className="ms-3 fs-3" />
                                )}
                        </th>
                        <th className="text-end" style={{ cursor: 'pointer' }} onClick={() => handleSort('price')}>
                                Precio
                                {sortConfig.key === 'price' ? (
                                        sortConfig.direction === 'asc' ? <FaSortUp className="ms-3 fs-3 text-success" /> : <FaSortDown className="ms-3  fs-3 text-success" />
                                ) : (
                                        <FaSort className="ms-3 fs-3" />
                                )}
                        </th>
                        <th className="text-end" style={{ cursor: 'pointer' }} onClick={() => handleSort('stock')}>
                                Stock
                                {sortConfig.key === 'stock' ? (
                                        sortConfig.direction === 'asc' ? <FaSortUp className="ms-3 fs-3 text-success" /> : <FaSortDown className="ms-3  fs-3 text-success" />
                                ) : (
                                        <FaSort className="ms-3 fs-3" />
                                )}
                        </th>
                        <th className="text-end">Total</th>
                        <th className="text-end">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {paginatedData.map((item) =>(                   
                        <tr className="text-center" key={item.id}>                            
                            <td>{item.id}</td>
                            <td>
                                <img src={item.thumbnail} alt={item.title} width={50} />
                            </td>
                            <td className="text-start">{item.title}</td>
                            <td>{item.category}</td>
                            <td>{item.brand}</td>
                            <td className="text-end">{formatCurrency(item.price)}</td>
                            <td>{formatNumber(item.stock)}</td>
                            <td className="text-end">{formatCurrency(item.price*item.stock)}</td>
                            <td className="text-center">
                                <Link to={`/detalle/${item.id}/${item.title}`} href="#"
                                    className="btn btn-sm btn-outline-primary me-2"
                                    title="Ver detalle"
                                >
                                    <FaEye />
                                </Link>
                                <button
                                    className="btn btn-sm btn-outline-secondary"
                                    title="Más información"
                                    data-bs-toggle="modal"
                                    data-bs-target={`#caja${item.id}`}
                                >
                                    <FaInfoCircle />
                                </button>
                            </td>
                            
                        </tr>
                    ))}
                    
                </tbody>
                <tfoot className="table-secondary">  
                    {searchTerm && (
                    <tr>        
                        <th colSpan={5} className="text-end">Total...:</th>
                        <th className="text-center">{formatNumber(totalStockF)}</th>
                        <th className="text-end">{formatCurrency(totalInventoryValueF)}</th>
                    </tr>
                    )}
                    <tr>        
                        <th colSpan={6} className="text-end">Total...:</th>
                        <th className="text-center">{formatNumber(totalStock)}</th>
                        <th className="text-end">{formatCurrency(totalInventoryValue)}</th>
                        <th></th>
                        <th></th>
                        
                    </tr>   
                </tfoot>
            </table>
            {paginatedData.map((item) =>(
                <ModalProd key={item.id} item={item} />
            ))}
        </div>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Total por Categorias</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                    </div>
                    <div className="modal-body">

                        <table className="table table-sm table-bordered">
                            <thead className="table-light">
                                <tr>
                                    <th>Categoría</th>
                                    <th className="text-center">Productos</th>
                                    <th className="text-center">Stock Total</th>
                                    <th className="text-end">Valor del Inventario</th>
                                    <th className="text-end">%</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categorySummary.map((cat, index) => (
                                    <tr key={index}>
                                        <td><strong>{cat.category}</strong></td>
                                        <td className="text-center">{cat.productCount}</td>
                                        <td className="text-center">{formatNumber(cat.totalStock)}</td>
                                        <td className="text-end">{formatCurrency(cat.totalValue)}</td>
                                        <td className="text-end">{cat.percent.toFixed(2)}%</td> 
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot className="table-light fw-bold">
                                <tr>
                                    <td>Total General</td>
                                    <td className="text-center">{globalTotals.productCount}</td>
                                    <td className="text-center">{formatNumber(globalTotals.totalStock)}</td>
                                    <td className="text-end">{formatCurrency(globalTotals.totalValue)}</td>
                                    <td></td> 
                                </tr>
                            </tfoot>
                        </table>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Tabla