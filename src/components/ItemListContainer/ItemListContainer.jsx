import React, { useEffect, useState } from 'react'
import './itemlistcontainer.css'
import '../../App.css'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getFirestore } from '../../Firebase/config.js'
import { Link } from 'react-router-dom'

export const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    // const asyncFunc = categoryId ? getProductsByCategory : getProducts

    // asyncFunc(categoryId)    
    //     .then(response => {
    //         setProducts(response)
    //     })
    //     .catch(error => {
    //         console.error(error)
    //     })
    const [loading, setLoading] = useState(false)
    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)

        const db = getFirestore();
        
        const products = db.collection('products')
        

        if(categoryId){
            const filtered = products.where("category","==",categoryId)
            filtered.get()
                .then((res) => {
                    const newProd = res.docs.map((doc)=>{
                        return{id: doc.id, ...doc.data()}
                    })
                    setProducts(newProd)
                })
                .catch((err) => console.log(err))
                .finally(()=>{
                    setLoading(false)
                })
        }else{
            products.get()
            .then((res) => {
                const newProd = res.docs.map((doc) => {
                    return {id: doc.id, ...doc.data()}
                })
                console.table(newProd)
                setProducts(newProd)
            })
            .catch((error) => console.log(error))
            .finally(()=>{
                setLoading(false)
            })
        }
    }, [categoryId])

    return (
        <div>
            <section className='products__container'>
                <ItemList products={products}/>
            </section>
        </div>
    )
}