import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export const CartItem = (id) => {
    const {cart, removeItem, isInCart} = useContext(CartContext)
    const prod = cart.isInCart(id);
    return (
        <div>
            <table>
                <tr>
                    <th>{prod.name}</th>
                    <th>Cantidad: {prod.quantity}</th>
                    <th>Precio unitario: {prod.price}</th>
                    <th>Subtotal: {prod.quantity*prod.price}</th>
                    <th><button onClick={removeItem(id)}>x</button></th>
                </tr>
            </table>
        </div>
    )
}
