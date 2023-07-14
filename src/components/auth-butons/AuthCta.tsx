import React, {FunctionComponent} from "react"
import "./authcta.css"


type Props={
    title:string
    icon:any
    isActive:boolean
    activeProcessHandler:any
}

const AuthCta : FunctionComponent<Props> = ({title,icon, isActive, activeProcessHandler}) =>{
    return(
        <div onClick={activeProcessHandler} className={isActive ? " authCta__container selected": "authCta__container"}>
            <div className={"auth__content"}>
                <p>{title}</p>

                {icon}
            </div>


        </div>
    )
}

export default AuthCta
