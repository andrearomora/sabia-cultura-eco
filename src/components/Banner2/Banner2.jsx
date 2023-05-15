import React from 'react'
import {Link} from 'react-router-dom'
import './Banner2.css'
import '../../App.css'

export const Banner2 = () => {
    return (
        <>
        <section className="homePropuestaValor desktop">
            <div className="homePropuestaValor__contenido">
                <h2 className="homePropuestaValor__titulo">¿Qué  ganas  al  adquirir  tus  nuevas  bolsas?</h2>
                <ul className="homePropuestaValor__lista">
                    <li className="homePropuestaValor__lista__elemento">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check homePropuestaValor__icono" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                        </svg>
                        <div className="homePropuestaValor__lista__elemento__txt">
                            <h4>Garantiza una mayor duración y resistencia</h4>
                            <p>Costuras reforzadas</p>
                        </div>
                    </li>
                    <li className="homePropuestaValor__lista__elemento">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check homePropuestaValor__icono" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                        </svg>
                        <div className="homePropuestaValor__lista__elemento__txt">
                            <h4>Con terminado en costura francesa</h4>
                            <p>Acabados estéticos</p>
                        </div>
                    </li>
                    <li className="homePropuestaValor__lista__elemento">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check homePropuestaValor__icono" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                        </svg>
                        <div className="homePropuestaValor__lista__elemento__txt">
                            <h4>Amigable con el medio ambiente</h4>
                            <p>Materiales biodegradables</p>
                        </div>
                    </li>
                    <li className="homePropuestaValor__lista__elemento">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check homePropuestaValor__icono" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                        </svg>
                        <div className="homePropuestaValor__lista__elemento__txt">
                            <h4>Mayor comodidad al usar</h4>
                            <p>Asas extra largas</p>
                        </div>
                    </li>
                </ul>
            <div className="homePropuestaValor__lista__elemento">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-bookmark-star-fill homePropuestaValor__icono--grande" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zM8.16 4.1a.178.178 0 0 0-.32 0l-.634 1.285a.178.178 0 0 1-.134.098l-1.42.206a.178.178 0 0 0-.098.303L6.58 6.993c.042.041.061.1.051.158L6.39 8.565a.178.178 0 0 0 .258.187l1.27-.668a.178.178 0 0 1 .165 0l1.27.668a.178.178 0 0 0 .257-.187L9.368 7.15a.178.178 0 0 1 .05-.158l1.028-1.001a.178.178 0 0 0-.098-.303l-1.42-.206a.178.178 0 0 1-.134-.098L8.16 4.1z"/>
                </svg>
                <div className="homePropuestaValor__lista__elemento__txt">
                    <h4>Compra segura!</h4>
                    <p>Tendrás garantía de 30 días.</p>
                </div>
            </div>
            </div>
        </section>

        <section className="mobile">
            <div className="homePropuestaValor__contenido">
                <ul className="homePropuestaValor__lista container">
                    <li className="homePropuestaValor__lista__elemento row">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check homePropuestaValor__icono col" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                        </svg>
                        <div className="homePropuestaValor__lista__elemento__txt col-10">
                            <h4>Garantiza una mayor duración y resistencia</h4>
                            <p>Costuras reforzadas</p>
                        </div>
                    </li>
                    <li className="homePropuestaValor__lista__elemento row">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check homePropuestaValor__icono col" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                        </svg>
                        <div className="homePropuestaValor__lista__elemento__txt col-10">
                            <h4>Amigable con el medio ambiente</h4>
                            <p>Materiales biodegradables</p>
                        </div>
                    </li>
                    <li className="homePropuestaValor__lista__elemento row">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check homePropuestaValor__icono col" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                        </svg>
                        <div className="homePropuestaValor__lista__elemento__txt col-10">
                            <h4>Compra segura!</h4>
                            <p>Tendrás garantía de 30 días.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        <section className="buyerPersona">
            {/* <Link to="#" className="btn-home">COMPRAS AL POR MAYOR</Link> */}
            <Link to="/tienda" className="btn-home">TIENDA</Link>
        </section>
        </>
    )
}
