import React, {useState, useEffect} from 'react';
import axios from 'axios';

export const images = {
  1: require('./image/audi.jpg'),
  2: require('./image/house.jpg'),
  3: require('./image/countryHouse.jpg'),
};

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://btpeel.com/back/test/productlist')
      .then(response => {
        setProducts(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={images[parseInt(product.image.replace(/\D/g, ''), 10)]} alt={product.title} style={{ width: '200px' }}/>
            <h3>{product.title}</h3>
            <p>{product.text}</p>
            <p>Price: {product.price}</p>
            <p>Active: {product.active ? 'Yes' : 'No'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export { ProductPage }
