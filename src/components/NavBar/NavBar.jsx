import React from 'react'
import {CartWidget} from '../CartWidget/CartWidget'
import logo from './assets/sabia-cultura-eco-hz-black.svg'
import './navbar.css'


export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg py-3 navbar-light bg-light shadow-sm">
        <div className="container navbarAlign">
            <img src={logo} alt="" className="d-inline-block align-middle mr-2 header__logo"/>
            
            <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>

            <div id="navbarSupportedContent" className="collapse navbar-collapse navbarAlign">
                <ul class="navbar-nav ml-auto mx-auto">
                    <li className="nav-item"><a href="#" className="nav-link">SOBRE NOSOTROS</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">TIENDA</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">CONTACTO</a></li>
                </ul>
                <div className="header__iconos">
                    <CartWidget/>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
        </div>
    </nav>
    )
}

