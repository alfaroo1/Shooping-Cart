import './Product.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import {useCart} from "../hooks/useCart"

export function Porduct({ products }) {

    const { cart, addToCart, removeToCart } = useCart();

    //Añadir producto al carrito visualmente
    const checkCartProduct = product =>{
        return cart.some(item => item.id === product.id)
    }
    return(
        <main className='products'>
            <ul>
                {products.slice(0, 10).map(product => {
                    const isProductInCart = checkCartProduct(product);
                    return(
                        <li key={product.id}>
                            <img src={product.thumbnail} alt="" />
                            <div>
                                <strong>{product.title}</strong> - ${product.price}
                            </div>
                            <div>
                                <button onClick={() => isProductInCart ? removeToCart(product) : addToCart(product)}>
                                    {
                                        isProductInCart 
                                        ? <RemoveFromCartIcon/>
                                        : <AddToCartIcon/>
                                    }
                                </button>
                            </div>
                        </li>
                    )})
                }
            </ul>
        </main>
    )
}