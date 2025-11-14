import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const API='https://dummyjson.com/products/categories';

const MenuPrincipal = () => {
  const [datos, setDatos] = useState([])
    const getDatos = async () =>{
        try {
          const response = await fetch(API);
          const data = await response.json();
          //console.log(data)
          setDatos(data);
        } catch (error) {
          console.error(error)
        }
      };
      useEffect(()=>{
        getDatos();
      },[]);
  return (
    
     <>
       {datos && datos.map((item, index) => (
        <li>
        <div className="categories-item">
            <Link to={`/shop/${item.slug}`} href="#" className="text-dark"><i className="fas fa-check text-secondary me-2" />
            {item.name}</Link>
            <span>(3)</span>
        </div>
        </li>
        ))}
    
    </>

  )
}

export default MenuPrincipal