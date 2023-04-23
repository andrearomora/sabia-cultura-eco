import React from 'react'
import {ItemCount} from '../ItemCount/ItemCount'
import './ItemDetail.css'


export const ItemDetail = ({id,name,price,stock,large,width,fabric,description,unitsPerPack,category,discount,img,size}) => {
    
    return (
        <>
            <picture>
                <img src={`/../../../${img}`} alt={name} className='imgDetail'/>
            </picture>
            <div>
                <h2>{name}</h2>
                <h3>${price}</h3>
                <h4>Unidades disponibles: {stock}</h4>
                <div>
                    <h4>Descripción</h4>
                    <p>{description}</p>
                </div>
                <div>
                    <h4>Características</h4>
                    <p>Medidas: {width}cm de ancho x {large}cm de largo</p>
                    <p>Material: {fabric}</p>
                    <p>Unidades por compra: {unitsPerPack}</p>
                </div>
            </div>
            <ItemCount initial={1} stock={stock} onAdd={(quantity)=> console.log('Cantidad agregada', quantity)}/>
        </>
    )
}
