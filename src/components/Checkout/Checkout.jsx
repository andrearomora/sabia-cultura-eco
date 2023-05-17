import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Checkout.css'

export const Checkout = () => {

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phone, setPhone] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
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
