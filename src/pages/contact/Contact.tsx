import React, {FunctionComponent} from "react"
import "./contact.css"
import {useNavigate} from "react-router-dom";

const Contact : FunctionComponent = () =>{

    const navigate= useNavigate()

    return(
        <div className={"contact__container"}>
            <div className={"container__padding contact__content"}>

                <h1 className={"second__title"} style={{color:"#2a374e", padding:"0.8rem 0"}}>Contact</h1>
                <p className={"paro"}>This page is being constructed...</p>
                <p className={"paro"}>Come back later to check its availability.</p>
                <div className={"call-to-action"}>
                    {/*<div>*/}
                    <button onClick={()=>navigate("/")} className={"call-to-action-button"}>Go home</button>
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}

export default Contact
