import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'


export const Item = ({id,name,price,img}) => {
    return (
        <>
            <div className="cardItem">
                <img src={img} className="card-img-top" alt={name}/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">${price}</p>
                    <Link to={`/item/${id}`} className="btn-card">Ver detalle</Link>
                </div>
            </div>
        </>
    )
}
