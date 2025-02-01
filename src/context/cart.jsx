import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider ({children}) {
    const [cart, setCart] = useState([]);

    const addToCart = product => {
        const productInCart = cart.findIndex(item => item.id === product.id);

        //Si el producto se encuentra en el carrito
        if (productInCart >= 0) {
            const newCart = structuredClone(cart);
            newCart[productInCart].quantity += 1;
            return setCart(newCart);
        }
        //Si el producto no se encuentra en el carrtio
        setCart(prevState => ([...prevState,{
            ...product,
            quantity: 1
        }]))
    }

    const removeToCart = product =>{
        setCart(prevState => prevState.filter(item => item.id === product.id))
    }

    const clearToCart = () =>{
        setCart([]);
    }
    return(
        <CartContext.Provider value={{ 
            cart,
            addToCart,
            removeToCart
        }}>
            {children}
        </CartContext.Provider>
    )
}