import React from 'react'
import { useState, useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { dataBase } from '../../services/config'
import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore'
import "./Checkout.css"

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenID, setOrdenId] = useState("");

    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    const manejadorForm = (event) => {
        event.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Complete todos los campos");
            return;
        }

        if (email !== emailConfirmacion) {
            setError("El mail ingresado no concide en ambos campos");
            return;
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        };

        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(dataBase, "inventario", productoOrden.id);
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;
                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad,
                })
            })
        )
            .then(() => {
                addDoc(collection(dataBase, "ordenes"), orden)
                    .then((docRef) => {
                        setOrdenId(docRef.id);
                        vaciarCarrito();
                    })
                    .catch((error) => {
                        console.log("Hubo un error al crear la orden", error);
                        setError("Hubo un error al crear la orden. Espere unos minutos e intente nuevamente")
                    })
            })
            .catch((error) => {
                console.log("No se puede actualizar stock", error);
                setError("No se pudo actualizar correctamente el stock");
            })
    }

    return (
        <div className='divCheckout'>
            {
                ordenID ? (
                    <strong className='compraFinalizada'>Gracias por comprar! Su numero de order es {ordenID}. En unos minutos recibirá un e-mail con todos los datos de la compra</strong>
                ) :
                    <form className='form' onSubmit={manejadorForm}>
                        <h2 className='tituloCheckout'>Checkout</h2>
                        {
                            carrito.map(producto => (
                                <div key={producto.item.id}>
                                    <p className='parrafoCarrito'> {producto.item.nombre} x {producto.cantidad} </p>
                                    <p className='parrafoPrecio'> ${producto.item.precio} ARS</p>
                                </div>
                            ))
                        }
                        <p className='parrafoTotal'>Cantidad Total: {cantidadTotal} </p>
                        <p className='precioFinal'>Precio Final: ${total} ARS</p>
                        <hr className='espacio' />

                        <div className='form-group'>
                            <label className='label' htmlFor="">Nombre</label>
                            <input className='input' type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        </div>

                        <div className='form-group'>
                            <label className='label' htmlFor="">Apellido</label>
                            <input className='input' type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                        </div>

                        <div className='form-group'>
                            <label className='label' htmlFor="">Telefono</label>
                            <input className='input' type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                        </div>

                        <div className='form-group'>
                            <label className='label' htmlFor="">Email</label>
                            <input className='input' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className='form-group'>
                            <label className='label' htmlFor="">Email Confirmacion</label>
                            <input className='input' type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                        </div>

                        {
                            error && <p className='error'> {error} </p>
                        }

                        <button className='compra' type="submit">Finalizar Compra</button>
                    </form>
            }
        </div>
    )
}

export default Checkout