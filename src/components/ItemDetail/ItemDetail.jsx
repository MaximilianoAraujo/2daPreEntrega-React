import React from 'react'
import "./ItemDetail.css"

const ItemDetail = ({ nombre, precio, img, desc }) => {
    return (
        <div>
            <h2 className='h2Detail'>{nombre} </h2>
            <h3 className='h3Detail'>Precio: {precio} </h3>
            <p className='pDetail'>{desc}</p>
            <img className='imgDetail' src={img} alt={nombre} />
        </div>
    )
}

export default ItemDetail