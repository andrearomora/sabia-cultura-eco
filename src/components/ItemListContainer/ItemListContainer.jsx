import React, { useEffect, useState } from 'react'
import './itemlistcontainer.css'
import '../../App.css'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

export const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)    
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return (
        <div>
            <section className='products__container'>
                <ItemList products={products}/>
            </section>
        </div>
    )
}