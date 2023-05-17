import React, { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import firebase from 'firebase'
import 'firebase/firestore'
import Swal from 'sweetalert2'
import './Checkout.css'
import { getFirestore } from '../../Firebase/config'

export const Checkout = () => {

    const {cart, total, clearCart} = useContext(CartContext)
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phone, setPhone] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
    
        const order = {
            buyer: {
                email,
                name,
                lastName,
                phone
            },
            item: cart,
            total_price: total(),
            data: firebase.firestore.Timestamp.fromDate(new Date())
        }
        console.log(order)

        const db = getFirestore()

    const orders = db.collection('orders')

    orders.add(order)
    .then((res)=>{
        Swal.fire({
            icon: 'success',
            title: 'Gracias por comprometerte con el medio ambiente',
            text: `Tu orden de compra fue registrada con éxito, este es tu número de seguimiento: ${res.id}`,
            willClose: () =>{
                clearCart()
            }
        })
    })
    .finally(()=>{
        console.log('Orden registrada con éxito')
    })
    }

    

    return (
        <div className='py-5'>
            <h1>Checkout</h1>
            <form onSubmit={handleSubmit} className="container col-md-6 col-sm-10">
                <div className="form-group">
                    <label htmlFor="">e-mail</label>
                        <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Nombre</label>
                        <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} value={name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Apellido</label>
                        <input type="text" className="form-control" onChange={(e) => setLastName(e.target.value)} value={lastName}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Teléfono</label>
                        <input type="number" className="form-control" onChange={(e) => setPhone(e.target.value)} value={phone}/>
                </div>
                <button type='submit' className='btn-checkout'>Finalizar compra</button>
                <br />
                <Link to="/carrito" className='link-checkout'>Volver al carrito</Link>
            </form>
        </div>
    )
}
