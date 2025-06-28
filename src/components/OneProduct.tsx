import React from 'react'
import { Product } from '../models/product'

interface OneProductProps {
  productProps: Product;
  onAdd: (id: number) => void;
}


const OneProduct : React.FC<OneProductProps> = ({productProps, onAdd}) => {
    const stil = {
        margin: 10,
        borderStyle: 'dashed',
    }
  // function addToCart() {
  //     console.log(`Dodat proizvod ${productProps.name} u korpu!`);
  //     productProps.amount++;
  //     console.log(`Trenutna kolicina proizvoda ${productProps.id} je ${productProps.amount}`);
  // }

  return (
    // border-style; margin-top
    <div className="card" style={stil}>
        <img className="card-img-top" src="https://picsum.photos/200" alt='Product image'/>
        <div className="card-body">
            {/* <h3 className="card-title">{props.productProps.name}</h3> */}
            <h3 className="card-title">{productProps.name}</h3>
            <p className="card-text">{productProps.description}</p>
            <a className='btn' onClick={() => onAdd(productProps.id)}>+</a>
            <a className='btn'>-</a>
        </div>
    </div>
  )
}

export default OneProduct