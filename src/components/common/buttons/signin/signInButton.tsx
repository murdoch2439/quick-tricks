import React, {FunctionComponent} from 'react'
import "./button.css"
import { useNavigate} from 'react-router-dom'
import {AUTHENTICATION} from "../../../../constants/variableNames";

const SignInButton : FunctionComponent = () =>{
    const navigate= useNavigate()
    const onClick=()=>{
        navigate(AUTHENTICATION)
    }
    return(
        <div className={"button-container"}>
            <div className={"button"}>
                <button type={"button"}  onClick={onClick}>Sign up</button>
                {/*<Link to={"/signup"}>Sign in</Link>*/}
                {/*<p className={"buttonText"}>Sign in</p>*/}
            </div>
        </div>
    )
}










































































































































































































































































































































































































































export default SignInButton





































































































