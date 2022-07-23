import React from 'react';

import '../styles/components/Products.scss';

const Product = ({ product, handleAddtoCart }) => {
  return (
    <section className="product__item">
      <img src={product.image} alt={product.title} />
      <div className="item__info">
        <h2>
          {product.title}
          <span> ${product.price}</span>
        </h2>
        <p>{product.description}</p>
      </div>
      <button className='item__button' type="button" onClick={handleAddtoCart(product)}>
       Add To Cart
      <i className="fa-duotone fa-cart-plus"/>
      </button>
    </section>
  );
};

export { Product };
