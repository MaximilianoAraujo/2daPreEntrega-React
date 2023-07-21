import React from 'react'
import "./ItemListContainer.css"
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, where, query } from 'firebase/firestore'
import { dataBase } from '../../services/config'

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([]);
    const { idCategoria } = useParams();

    useEffect(() => {
        const misProductos = idCategoria ? query(collection(dataBase, "inventario"), where("idCat", "==", idCategoria)) : collection(dataBase, "inventario");
        

        getDocs(misProductos)
            .then(res => {
                const nuevosProductos = res.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                const nuevosProductosOrdenados = nuevosProductos.slice().sort((a, b) => a.id - b.id);
                setProductos(nuevosProductosOrdenados)
            })
            .catch(error => console.log(error))
    }, [idCategoria])


    return (
        <>
            <h2 className="saludo">{greeting}</h2>
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer