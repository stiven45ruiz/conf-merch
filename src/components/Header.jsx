import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Header.scss';

const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;

  return (
    <div className="header">
      <h1 className="header__title">
        <Link className="header__title--link" to="/">Conf Merch</Link>
      </h1>
      <div className="header__checkout">
        <Link className='header__checkout--link' to="/checkout">Checkout</Link>
        {cart.length > 0 && <div className="header__alert">{cart.length}</div>}
      </div>
    </div>
  );
};

export default Header;
