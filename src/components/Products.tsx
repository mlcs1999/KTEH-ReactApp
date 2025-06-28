import React from 'react'
import OneProduct from './OneProduct'
import { Product } from '../models/product'

const product1 = new Product(1, 'Proizvod 1', 'Opis proizvoda 1',0);
const Products = () => {
  return (
    <div className='all-products'>
      {/* CTRL + ALT + strelica na dole/gore */}
        <OneProduct productProps={product1}/>
        <OneProduct productProps={product1}/>
        <OneProduct productProps={product1}/>
        <OneProduct productProps={product1}/>
    </div>
  )
}

export default Products