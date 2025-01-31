import { useId } from "react"
import { CartIcon ,ClearCartIcon } from "./Icons"
import './Cart.css'

function Cart() {
    const checkBoxId = useId()
    return (
        <>
            <label htmlFor="cart" className="cart-button">
                <CartIcon/>
            </label>
            <input type="checkbox" id={checkBoxId} hidden/>

            <aside className="cart">
                <ul>
                    <li><img src="" alt="" /></li>
                </ul>
                <div>
                    <strong></strong>
                </div>
                <footer>
                    <small></small>
                    <button>+</button>
                </footer>

                <button>
                    <ClearCartIcon/>
                </button>
            </aside>
        </>
    )
}

export default Cart