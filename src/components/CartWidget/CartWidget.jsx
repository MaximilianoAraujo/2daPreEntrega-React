import React from 'react'
import "./CartWidget.css"

const CartWidget = () => {
    const iconoCarrito = "https://img.icons8.com/glyph-neue/64/shopping-cart.png"

    return (
        <div className="containerCarrito">
            <img src={iconoCarrito} alt="carrito de compras" />
            <strong className="numero">7</strong>
        </div>
    )
}

export default CartWidget