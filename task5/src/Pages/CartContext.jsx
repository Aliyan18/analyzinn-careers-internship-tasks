import { useState, useEffect,createContext } from "react";
export const CartContext=createContext()

export function CartProvider({children}){
      const [cartItems, setItems] = useState([]);
      const [isHidden,setHidden]=useState(true);
     
      function increaseQuantity(Item){
            setItems((prevItems) => {

                return prevItems.map((i) =>
                    i.id === Item.id
                      ? { ...i, quantity: i.quantity + 1 }
                      : i
                  );
              });
        }

        function decreaseQuantity(Item){
            setItems((prevItems) => {
             if (Item.quantity==1)
                return prevItems.filter((i)=>i.id!==Item.id)
             else
                return prevItems.map((i) =>
                    i.id === Item.id
                      ? { ...i, quantity: i.quantity - 1 }
                      : i
                  );
              });
        }
    
        const addToCartSession=async(item)=>{
       try{
        const response = await fetch('http://localhost:3000/cart/add', {
          method: 'POST', // Use GET to fetch session data
          credentials: 'include', // Include cookies for session handling
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({item:item}), // Sending the item data as JSON
        });
    
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
    
        const cartData = await response.json(); // Assuming the response is JSON
        console.log('Cart Info:', cartData.cart);
        return cartData;
      } catch (error) {
        console.error('Failed to retrieve cart info:', error);
      }
        }
       
      function addToCart(newItem) {
        setItems((prevItems) => {
          const existingItem = prevItems.find((i) => i.id === newItem.id);
    
          if (existingItem) {
            return prevItems.map((i) =>
              i.id === newItem.id
                ? { ...i, quantity: i.quantity + 1 }
                : i
            );
          }
          addToCartSession(newItem);

          return [...prevItems, { ...newItem, quantity: 1 }];
        });
      }
    
   
    return(
        <CartContext.Provider value={{isHidden,setItems,setHidden,cartItems,addToCart,increaseQuantity,decreaseQuantity}}>
            {children}
        </CartContext.Provider>
    )
}