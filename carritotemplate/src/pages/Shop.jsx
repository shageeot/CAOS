import { useParams } from "react-router-dom"
import ProductOffer from "../component/ProductOffer"
import Searvices from "../component/Searvices"
import SinglePage from "../component/SinglePage"
import ShopPages from "./ShopPages"

const Shop = () => {
    const param = useParams()
  return (
    <>
        
        <SinglePage titulo={"Shop Page"}/>
        <Searvices/>
        <ProductOffer/>
        <ShopPages categoria={param.id}/>
    </>
  )
}

export default Shop