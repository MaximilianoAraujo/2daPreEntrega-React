import React from 'react'
import { useState, useEffect } from 'react'
import { getProducto } from '../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const {idItem} = useParams();

    useEffect(() => {
        getProducto(idItem)
        .then(response => setProducto(response))
    }, [idItem])


    return (
        <div>
            <ItemDetail {...producto}/>
        </div>
    )
}

export default ItemDetailContainer