import React, { useContext } from 'react';
import { Product } from './Product';
import AppContext from '../context/AppContext';

import '../styles/components/Products.scss';

const Products = () => {
  const { state, addToCart } = useContext(AppContext);
  const { products } = state;

  const handleAddtoCart = (product) => () => {
    addToCart(product);
  };
  return (
    <section className="products">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          handleAddtoCart={handleAddtoCart}
        />
      ))}
    </section>
  );
};

export { Products };
