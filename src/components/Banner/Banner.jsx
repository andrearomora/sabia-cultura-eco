import React from 'react'
import {Link} from 'react-router-dom'
import './Banner.css'
import '../../App.css'

export const Banner = () => {
    return (
        <>
            <section className="homeBanner">
                <h1 className="homeBanner__titulo">Bolsas ecológicas en algodón</h1>
                <p className="homeBanner__texto">Encuentra aquí tote bags y bolsas ajustables en materiales biodegradables. Accede a descuentos por compras a partir de la docena</p>
                <Link to={`/`} className="btn-home">COMPRAR</Link>
            </section>
        </>
    )
}
