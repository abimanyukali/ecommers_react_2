import React, { useContext } from 'react'
import { ShopContext } from '../Context/shopContext'
import { useParams } from 'react-router-dom'
import BreadCrum from '../Components/BreadCrums/BreadCrum'
import ProductDisplay from '../Components/ProductDisplay/productDisplay'
import DescriptionBox from '../Components/DiscriptionBox/DescriptionBox'
import RelatedProduct from '../Components/ReleatedProducts/ReleatedProducts'

const Product = () => {
  const {all_product}  =useContext(ShopContext)
  const {productId} =useParams()
  console.log(productId);
  const product = all_product.find((e)=>e.id === Number(productId))
  return (
    <div>
      <BreadCrum product ={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProduct/>
    </div>
  )
}

export default Product