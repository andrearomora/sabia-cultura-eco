import React from 'react'
import {CartWidget} from '../CartWidget/CartWidget'
import logo from './assets/sabia-cultura-eco-hz-black.svg'
import './navbar.css'
import {Link} from 'react-router-dom'


export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg py-1 navbar-light bg-light shadow-sm">
        <div className="container navbarAlign">
            <Link to="/"><img src={logo} alt="" className="d-inline-block align-middle mr-2 header__logo"/></Link>
            
            <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler"><span className="navbar-toggler-icon"></span></button>

            <div id="navbarSupportedContent" className="collapse navbar-collapse navbarAlign">
                <ul className="navbar-nav ml-auto mx-auto">
                    <li className="nav-item"><Link to="/nosotros" className="nav-link">SOBRE NOSOTROS</Link></li>
                    <li className="nav-item"><Link to="/tienda" className="nav-link">TIENDA</Link></li>
                    <li className="nav-item"><Link to="/contacto" className="nav-link">CONTACTO</Link></li>
                </ul>
                <div className="header__iconos">
                    <Link to="/carrito" className="header__iconos">
                        <CartWidget/>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </Link>
                </div>
            </div>
        </div>
    </nav>
    )
}

