import React, { useEffect, useState } from 'react'
import { getProductById } from '../../asyncMock'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
// import { getDoc, doc } from 'firebase/firestore'
import { getFirestore } from '../../Firebase/config'

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    // setLoading(true)

    // const docRef = doc(getFirestore())
    // getProductById(itemId)
    //     .then(response => {
    //         setProduct(response)
    //     })
    //     .catch(error => {
    //         console.error(error)
    //     })

    useEffect(() =>{
        setLoading(true)
        const db = getFirestore()
        const products = db.collection('products')
        const item = products.doc(itemId)
        item.get()
            .then((doc) => {
                setProduct({
                    id: doc.id, ...doc.data()
                })
            })
            .catch((err) => console.log(err))
            .finally(()=>{
                setLoading(false)
            })
    }, [itemId])
    return(
        <div>
            <ItemDetail {...product}/>
        </div>
    )
}
