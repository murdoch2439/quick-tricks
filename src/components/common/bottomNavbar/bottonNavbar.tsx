import React, {FunctionComponent} from "react"
import {Link} from 'react-router-dom'
import './bottomNavbar.css'

const BottomNavbar : FunctionComponent = () =>{
    return(
        <section className={"bottom-navbar"}>
            <Link to="/faq" className="navbar-el">Faq</Link>
            <Link to="/privacy-policy" className="navbar-el">Privacy policy</Link>
            <Link to="/contact" className="navbar-el">Contact</Link>
        </section>
    )
}
export default BottomNavbar
