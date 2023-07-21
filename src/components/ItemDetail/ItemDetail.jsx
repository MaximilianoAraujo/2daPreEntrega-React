import React from 'react'
import { useState } from 'react'
import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'

const ItemDetail = ({ id, nombre, precio, img, desc, stock }) => {
    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const { agregarProducto } = useContext(CarritoContext);

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        const item = { id, nombre, precio };
        agregarProducto(item, cantidad);
    }

    return (
        <div className='divContenedor'>
            <div className='divDetalles'>
                <img className='imgDetail' src={img} alt={nombre} />
            </div>
            <div className='divCantidad'>
            <h2 className='h2Detail'>{nombre} </h2>
                <p className='pDetail'>{desc}</p>
                <h3 className='h3Detail'>Precio: {precio} ARS</h3>
                {
                    agregarCantidad > 0 ? (<Link className='finalizarCompra' to="/cart"> Finalizar Compra </Link>) : (<ItemCount inicial={1} stock={stock} fnAgregar={manejadorCantidad} />)
                }
            </div>
        </div>
    )
}

export default ItemDetail