import React, {FunctionComponent} from 'react';
import "./authinput.css"


type Props={
    placeholder:string
    label:string
    name:string,
    onChangeHandler:any,
    // other?:any
    type?:any
}


const AuthInput : FunctionComponent<Props> = ({placeholder, label,type, name, onChangeHandler}) =>{
    return(
        <div className={"authinput__container"}>

            <label className={"authinput__label-name"}><span className={"authinput__content-name"}>{label}</span></label>
            <input onClick={onChangeHandler} placeholder={placeholder} name={name} type={type}/>
        </div>
    )
}


export default AuthInput
