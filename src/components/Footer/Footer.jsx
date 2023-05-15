import React from 'react'
import logo from './assets/logo-sabia-vert-blanco.png'
import fb from './assets/icons8-facebook-nuevo.svg'
import ig from './assets/icons8-instagram.svg'
import './Footer.css'
import {Link} from 'react-router-dom'

export const Footer = () => {
    return (
    <>
        <footer className="footer">
            <div className="footer-row">
                <div className="footer__logo">
                    <img src={logo} alt="logo de sabia cultura eco"/>
                    <div className="footer__logo__rrss">
                        <Link to="https://www.instagram.com/sabiaculturaeco/" target="_blank"><img src={ig} alt="instagram de sabia cultura eco" className="jump"/></Link>
                        <Link to="https://www.facebook.com/sabiaculturaeco/" target="_blank"><img src={fb} alt="facebook de sabia cultura eco" className="jump"/></Link>
                    </div>
                </div>
                <div className="footer__section">
                    <p className="footer__section__titulo">ENLACES RÁPIDOS</p>
                    <ul className="footer__section__lista">
                        <li><Link to="/tienda">Compra ahora</Link></li>
                        <li><Link to="https://www.sabiaculturaeco.com.co/" target="_blank">Encuéntranos en Mercadolibre</Link></li>
                    </ul>
                </div>
                <div className="footer__section">
                    <p className="footer__section__titulo">SOBRE</p>
                    <ul className="footer__section__lista">
                        <li><Link to="/">Sobre nosotros</Link></li>
                    </ul>
                </div>
                <div className="footer__section">
                    <p className="footer__section__titulo">AYUDA</p>
                    <ul className="footer__section__lista">
                        <li><Link to="/">Contacto</Link></li>
                        <li><Link to="/">Política de tratamiento de datos</Link></li>
                    </ul>
                </div>
            </div>
            <p className="footer__copy">© 2022 SABIA CULTURA ECO</p>
        </footer>
    </>
    )
}
