import React from 'react'
import { useState } from 'react'
import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'

const ItemDetail = ({ id, nombre, precio, img, desc, stock }) => {
    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const {agregarProducto} = useContext(CarritoContext);

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        // console.log("Produtos Agregados: " + cantidad)
        const item = {id,nombre,precio};
        agregarProducto(item,cantidad);
    }

    return (
        <div>
            <h2 className='h2Detail'>{nombre} </h2>
            <h3 className='h3Detail'>Precio: {precio} </h3>
            <p className='pDetail'>{desc}</p>
            <img className='imgDetail' src={img} alt={nombre} />
            {

            }
            {
                agregarCantidad > 0 ? (<Link to="/cart"> Finalizar Compra </Link>) : (<ItemCount inicial={1} stock={stock} fnAgregar={manejadorCantidad}/>)
            }
        </div>
    )
}

export default ItemDetail