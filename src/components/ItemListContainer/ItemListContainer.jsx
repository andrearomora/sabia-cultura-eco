import React from 'react'
import './itemlistcontainer.css'

export const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <h1 className='homeBanner__titulo'>{greeting}</h1>
        </div>
    )
}