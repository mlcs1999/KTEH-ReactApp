import React from 'react'
import OneProduct from './OneProduct'
import { Product } from '../models/product'

interface ProductsProps {
  productsProps: Product[];
}
const product1 = new Product(1, 'Proizvod 1', 'Opis proizvoda 1',0);
const Products : React.FC<ProductsProps> = ({productsProps}) => {
  return (
    <div className='all-products'>
      {/* CTRL + ALT + strelica na dole/gore */}
        <OneProduct productProps={productsProps[0]}/>
        <OneProduct productProps={productsProps[1]}/>
        <OneProduct productProps={productsProps[2]}/>
    </div>
  )
}

export default Products