import React, { FunctionComponent, } from 'react';
import {NavLink} from 'react-router-dom'
import './navbar.css'

const Navbar : FunctionComponent = () =>{
    return(
        <nav className={"navbar"}>
            <div className={"navbar__container"}>
            </div>
                <NavLink to="/" className={({isActive})=>(isActive ? "navbar-item active" : "navbar-item")}>Home</NavLink>
                <NavLink to="/tricks" className={({isActive})=>(isActive ? "navbar-item active" : "navbar-item")}  >Tricks</NavLink>
                <NavLink to="/about" className={({isActive})=>(isActive ? "navbar-item active" : "navbar-item")}>About</NavLink>
            {/*<a href="/shop" className="navbar-item">Shop</a>*/}
            {/*<a href="/blog" className="navbar-item">Blog</a>*/}
            <NavLink to="/contact" className={({isActive})=>isActive ? "navbar-item active" : "navbar-item"}>Contact</NavLink>
        </nav>
    )
}

export default Navbar
