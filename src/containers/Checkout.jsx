import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

import '../styles/containers/Checkout.scss'

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product) => () => {
    removeFromCart(product);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <section className="checkout">
      <article className="checkout__list">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h3>Sin Pedidos...</h3>}
        {cart.map((item) => (
          <div className="checkout__item" key={item.id}>
            <div className="checkout__element">
              <img src={item.image} alt="" />
              <h4>{item.name}</h4>
              <span>${item.price}</span>
            </div>
            <button className='checkout__button' type="button" onClick={handleRemove(item)}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        ))}
      </article>
      {cart.length > 0 && (
        <article className="checkout__sidebar">
          <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
          <Link to="/checkout/info">
            <button type="button">Continuar pedido</button>
          </Link>
        </article>
      )}
    </section>
  );
};

export { Checkout };
