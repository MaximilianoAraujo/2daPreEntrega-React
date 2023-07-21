import React from 'react'
import { useState } from 'react'
import "./ItemCount.css"

const ItemCount = ({ inicial, stock, fnAgregar }) => {
    const [contador, setContador] = useState(inicial);

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (
        <>
            <div>
                <div className='divMasmenos'>
                    <button className='menos' onClick={decrementar}> - </button>
                    <p className='contador'> {contador} </p>
                    <button className='mas' onClick={incrementar}> + </button>
                </div>
                <div className='divAgregar'>
                    <button className='agregar' onClick={() => fnAgregar(contador)}> Agregar al carrito</button>
                </div>
            </div>
        </>
    )
}

export default ItemCount