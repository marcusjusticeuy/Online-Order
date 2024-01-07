import Header from './components/layout/Header';
import MenuItems from './components/itemCard/MenuItems';
import CartProvider from './context/CartProvider';
import Modal from './components/layout/Modal';

import { PayPalScriptProvider } from "@paypal/react-paypal-js"

import { useState } from 'react';

function App() {
  const [toggleCart, setToggleCart] = useState(false)

  const toggleCartHandler = () => {
    setToggleCart(prevState => !prevState)
  }
  const closeCartHandler = () => {
    setToggleCart(false)
  }

  return (
    <CartProvider>
      <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID, currency: 'CAD'}}>
        { toggleCart && <Modal onClose={closeCartHandler} /> }
        <Header onToggle={toggleCartHandler}/>
        <MenuItems/>
      </PayPalScriptProvider>
    </CartProvider>
  );
}

export default App;
