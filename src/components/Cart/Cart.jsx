import './Cart.css'
import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'


export const Cart = () => {
    const {cart, clearCart, totalQuantity, total, removeItem} = useContext(CartContext)

    if(totalQuantity === 0){
        return(
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/tienda' className='btn-cart'>Productos</Link>
            </div>
        )
    }
    return (
        <div className='py-5'>
            <div className='container cart-header col-md-8 col-sm-10'>
                <h1>Carrito de compras</h1>
                <button onClick={() => clearCart()} className='btn-clean'>Limpiar carrito</button>
            </div>
            <div className='container cart-container col-md-8 col-sm-10'>
                <table>
                    <thead className='table-dark'>
                        <tr>
                            <th scope="col">Producto</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio unitario</th>
                            <th scope="col">Subtotal</th>
                            <th scope="col">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                {cart.map (prod => (
                    <tr>
                        <th scope="row">{prod.name}</th>
                        <td>{prod.quantity}</td>
                        <td>${prod.price}</td>
                        <td>${prod.quantity*prod.price}</td>
                        <td>
                            <button onClick={() => removeItem(prod.id)} className='trash-cart'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill trash-cart" viewBox="0 0 16 16">
                                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                                </svg>
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
                </table>
            </div>
            
            <h3 className='py-3'><strong>Total:</strong> ${total()}</h3>
            
            <Link to='/checkout' className='btn-cart'>Checkout</Link>
        </div>
    )
}
