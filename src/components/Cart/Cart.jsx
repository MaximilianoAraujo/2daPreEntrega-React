import React from 'react'
import { useContext } from 'react';
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from 'react-router-dom';
import CartItem from "../CartItem/CartItem";
import "./Cart.css"

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <div className='contProd'>
                <h2 className='sinProductos'>No hay productos en el carrito!</h2>
                <Link className='linkProductos' to="/"> Ver Productos </Link>
            </div>
        )
    }

    return (
        <div>
            {carrito.map(producto => <CartItem key={producto.item.id} {...producto} />)}
            <h3 className='cantidad'>Total de Productos: {cantidadTotal}</h3>
            <h3 className='total'>Total: $ {total} ARS</h3>
            <div className='divBotones'>
                <button className='vaciar' onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
                <Link className='finalizarCompra' to="/checkout">Finalizar Compra</Link>
            </div>
        </div>
    )
}

export default Cart