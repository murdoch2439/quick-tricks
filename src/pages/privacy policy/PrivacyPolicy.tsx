import React, {FunctionComponent} from "react"
import "./privacypolicy.css"
import {useNavigate} from "react-router-dom";


export const PrivacyPolicy : FunctionComponent = () =>{
    const navigate= useNavigate()
    return(
        <div className={"privacyContainer"}>
            <div className={"container__padding contact__content"}>
                <h1 style={{color:"#2a374e"}}>Privacy policy</h1>

                <p className={"paro"}>This page is being constructing...</p>
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