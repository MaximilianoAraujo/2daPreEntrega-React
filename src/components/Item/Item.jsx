import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img, stock }) => {
    return (
        <div className='divItem'>
            <img className="imgItem" src={img} alt={nombre} />
            <h3 className='h3Item'>{nombre}</h3>
            <p className='pItem'>Precio: {precio} ARS</p>
            <p className='stock'>Stock: {stock}</p>
            <button className='buttonItem'>
            <Link to={`/item/${id}`}> Ver Detalles </Link>
            </button>
        </div>
    )
}

export default Item