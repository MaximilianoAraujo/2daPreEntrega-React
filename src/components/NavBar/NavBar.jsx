import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import "./NavBar.css"

export const NavBar = () => {
    return (
        <header className="containerItems">
            <nav>
                <Link to="/"><img className='logo' src="../img/logo.jpg" alt="logo" /></Link>
                <ul>
                    <li><NavLink to="/categoria/1">PlayStation 5</NavLink></li>
                    <li><NavLink to="/categoria/2">Xbox Series</NavLink></li>
                    <li><NavLink to="/categoria/3">Nintendo Switch</NavLink></li>
                    <li><NavLink to="/categoria/4">Consolas</NavLink></li>
                </ul>
                <CartWidget/>
            </nav>
        </header>
    )
}

export default NavBar