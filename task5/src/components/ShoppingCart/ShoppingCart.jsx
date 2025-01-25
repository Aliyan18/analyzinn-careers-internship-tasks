import { useState, useEffect } from 'react';
import CartItem from '../CartItem';
import { useContext } from 'react';
import { CartContext } from '../../Pages/CartContext';
import useFetch from './useFetch';

 function ShoppingCart() {
  const { cartItems, isHidden, setHidden, setItems } = useContext(CartContext);
  const [windowWidth, setWinWidth] = useState(window.outerWidth);

  // Fetch data using the custom useFetch hook
  const { data, loading, error } = useFetch({ url: 'http://localhost:3000/cart/getData' });

  useEffect(() => {
    const handleResize = () => {
      setWinWidth(window.outerWidth);
    };

    // Set the items once data is loaded
    if (data && data.cart) {
      setItems(data.cart); // Update state with the fetched cart
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [data, setItems]); // Re-run effect when data changes

  // Close the cart
  function handleClose() {
    setHidden(true);
  }

 

  return (
    <>
      <div
        style={{
          width: windowWidth > 1000 ? '20%' : '30%',
          position: 'absolute',
          right: '0',
          top: '40px',
          display: isHidden ? 'none' : 'flex',
          justifyContent: 'space-between',
          border: '1px solid black',
          flexDirection: 'column',
          backgroundColor: 'teal',
          height: '94%',
        }}
      >
        <div style={{ height: '80%' }}>
          <h4 style={{ fontWeight: '700' }}>CART</h4>
          {(loading)? <div>Loading...</div>:''} 
          {(error)? <div>Error: {error}</div>:''}
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className="btns1" style={{ height: '10%', padding: '0' }}>
          <button type="button" onClick={handleClose} style={{ margin: '0' }}>
            CLOSE
          </button>
        </div>
      </div>
    </>
  );
}
export default ShoppingCart;