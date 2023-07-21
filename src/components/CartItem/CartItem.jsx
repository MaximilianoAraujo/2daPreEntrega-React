import React from 'react'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import "./CartItem.css"



const CartItem = ({ item, cantidad}) => {
    const { eliminarProducto } = useContext(CarritoContext);

    return (
        <div className='cardCont'>
            <h4 className='nombre'>{item.nombre}</h4>
            <strong className='parrafo'>Cantidad: {cantidad}</strong>
            <strong className='parrafoDos'>Precio: {item.precio} ARS </strong>
            <button className='eliminar' onClick={() => eliminarProducto(item.id)}>Eliminar</button>
            <hr/>
        </div>
    )
}

export default CartItem