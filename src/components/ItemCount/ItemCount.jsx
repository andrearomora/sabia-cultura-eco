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
            
            <div>
                <button onClick={restar}>-</button>
                <h4>{counter}</h4>
                <button onClick={sumar}>+</button>
            </div>
            <div>
                <button onClick={(() => onAdd(counter))} disabled={!stock}>Agregar al carrito</button>
            </div>
        </>
    )

}