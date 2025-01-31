import './Product.css'
import { AddToCartIcon } from './Icons'

export function Porduct({ products }) {
    return(
        <main className='products'>
            <ul>
                {
                    products.map(product => (
                        <li key={product.id}>
                            <img src={product.thumbnail} alt="" />
                            <div>
                                <strong>{product.title}</strong> - ${product.price}
                            </div>
                            <div>
                                <button><AddToCartIcon/></button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </main>
    )
}