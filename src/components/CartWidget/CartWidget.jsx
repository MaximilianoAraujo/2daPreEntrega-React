import React from 'react'
import "./CartWidget.css"
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { cantidadTotal } = useContext(CarritoContext);

    const iconoCarrito = "https://img.icons8.com/glyph-neue/64/shopping-cart.png"

    return (
        <div className="containerCarrito">
            <Link to="/cart">
                <img src={iconoCarrito} alt="carrito de compras" />
                {
                    cantidadTotal > 0 && <strong className="numero"> {cantidadTotal} </strong>
                }
            </Link>
        </div>
    )
}

export default CartWidget