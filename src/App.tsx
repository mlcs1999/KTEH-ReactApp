import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Products from './components/Products';
import { Product } from './models/product';

const products: Product[] = [
  new Product(1, 'Proizvod 1', 'Opis proizvoda 1', 0),
  new Product(2, 'Proizvod 2', 'Opis proizvoda 2', 0),
  new Product(3, 'Proizvod 3', 'Opis proizvoda 3', 0),
  new Product(4, 'Proizvod 4', 'Opis proizvoda 4', 0),
];

function App() {
  const [cartNum, setCartNum] = useState(0);

  const addToCart = (id: number) => {
    console.log(`Dodat proizvod ${id} u korpu!`);
    products.map((product) => {
      if(product.id == id) {
        product.amount++;
        setCartNum(cartNum + 1);
        console.log(`Trenutna kolicina proizvoda ${product.id} je ${product.amount}`);
      }
    });
    // productProps.amount++;
  // console.log(`Trenutna kolicina proizvoda ${productProps.id} je ${productProps.amount}`);
}
  return (
    <div className="App">
      <NavBar cartNum={cartNum}/>
      <Products productsProps={products} onAdd={addToCart}/>
    </div>
  );
}

export default App;
