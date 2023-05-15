import React, { useState } from 'react';
import './itemcount.css'

export const ItemCount = ({stock,initial,onAdd}) => {
    
    const [counter, setCounter] = useState(initial);

    const sumar = () => {
        if(counter<stock){
            setCounter(counter+1)
        }
    }

    const restar = () => {
        if(counter>1){
            setCounter(counter-1)
        }
        
    }

    return(
        <>
            <div className='contadorCont'>
                <button onClick={restar} className='btn-contador'>-</button>
                <h4>{counter}</h4>
                <button onClick={sumar} className='btn-contador'>+</button>
            </div>
            <div>
                <button onClick={(() => onAdd(counter))} disabled={!stock} className='btn-contador'>Agregar al carrito</button>
            </div>
        </>
    )

}