import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"

export const NavBar = () => {
    return (
        <header>
            <div className="containerTitulo">
                <h1>MaxGaming</h1>
                <p>||LOGO||</p>
            </div>
            <div className="containerItems">
                <nav>
                    <ul>
                        <li>PlayStation 5</li>
                        <li>Xbox Series</li>
                        <li>Nintendo Switch</li>
                        <li>Consolas</li>
                    </ul>
                </nav>
                <CartWidget />
            </div>
        </header>
    )
}

export default NavBar