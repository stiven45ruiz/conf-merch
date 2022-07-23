import React from 'react';
import { useRef, useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AddContext from '../context/AppContext'


const Information = () => {
  const {state, addToBuyer} = useContext(AddContext);
  const form = useRef(null);
  const navigate = useNavigate();
  const { cart } = state;

  const handleSubmit=()=>{
    const formData = new FormData(form.current);
    const buyer ={
      'name' : formData.get('name') ,
      'email' : formData.get('email') ,
      'address' : formData.get('address') ,
      'apto' : formData.get('apto') ,
      'city' : formData.get('city') ,
      'country' : formData.get('country') ,
      'state' : formData.get('state') ,
      'cp' : formData.get('cp') ,
      'phone' : formData.get('phone') 
    }
    addToBuyer(buyer);
    navigate('/checkout/payment');
  };

  return (
    <div className="information">
      <div className="information__content">
        <div className="information__head">
          <h2>Informacion de contacto:</h2>
        </div>
        <div className="information__form">
          <form ref={form}>
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="text" placeholder="Correo Electronico" name="email" />
            <input type="text" placeholder="Direccion" name="address" />
            <input type="text" placeholder="Apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Codigo postal" name="cp" />
            <input type="text" placeholder="Telefono" name="phone" />
          </form>
        </div>
        <div className="information__buttons">
          <div className="information__back">
            <Link to='/checkout'>
              Regresar
            </Link>

          </div>
          <div className="information__next">
            <button
              type='button'
              onClick = {handleSubmit}
            >
              Pagar
            </button>
          </div>
        </div>
      </div>

      <div className="information__sidebar">
        <h3>Pedido:</h3>
        {
          cart.map((item)=>(
            <div 
              className="information__item"
              key={item.title}
            >
              <div className="information__element">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export {Information}