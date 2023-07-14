import React, {FunctionComponent, useEffect, useState} from 'react';
import {RiCloseLine, RiMenu3Line} from 'react-icons/ri'
import {Link, useLocation} from 'react-router-dom'
// import {Navbar} from "../../common";
import './header.css'
import logo from "../../../assets/logo-qt.svg"
import SignInButton from "../buttons/signin/signInButton";


const Header: FunctionComponent = () => {
    const [toggleMenu, setToggleMenu]  = useState(false)
    const location = useLocation()

    useEffect(()=>{
        if(location.hash){
            document.getElementById(location.hash.substring(1))?.scrollIntoView({behavior:"smooth", inline:"start"})
        }else{
            window.scrollTo(0,0)
        }
    }, [location])
    return (
        <header className={"header__container container__padding"}>

            <div className={"header__container-logo"}>
                <Link to={"/"} className={"logo"}  >
                    <img className={"img"} alt={"logo"} src={logo} />
                </Link>
            </div>

            {/*<div className={"second-section"}>*/}
            {/*    <nav className={"navbar-container"}>*/}
            {/*        <Navbar />*/}
            {/*    </nav>*/}

            {/*</div>*/}

            <div className={"header__button"}>
                <SignInButton />
            </div>


            <div className={"header__menu-container"}>
                <div className={"header__menu"}>
                    {toggleMenu
                        ? <RiCloseLine color={"black"} size={27} onClick={()=>setToggleMenu(false)} />
                        : <RiMenu3Line color={"black"} size={27} onClick={()=>setToggleMenu(true)} />
                    }
                </div>

            </div>

        </header>
    );
};

export default Header
