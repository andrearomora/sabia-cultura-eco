import React, { useContext, useState } from 'react'
import {ItemCount} from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import './ItemDetail.css'


export const ItemDetail = ({id,name,price,stock,large,width,fabric,description,unitsPerPack,category,discount,img,size}) => {
    
    const [quantityAdded, setQuantityAdded] = useState(0);

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }

        addItem(item, quantity)

    }

    return (
        <>
        <div className='container fichaProducto'>
            <div className="row fichaProducto__contenedor">
                <picture className='col col-md-7 fichaProducto__contenedor___img'>
                    <img src={`/../../../${img}`} alt={name} className='imgDetail'/>
                </picture>
                <div className='col col-md-5 fichaProducto__contenedor___info'>
                    <h2>{name}</h2>
                    <h3>${price}</h3>
                    <p>Unidades disponibles: {stock}</p>
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
                    <div>
                        {
                            quantityAdded > 0 ? (
                                <Link to='/carrito' className="btn-item">Terminar compra</Link>
                            ) : (
                                <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
            
        </>
    )
}
