import React, {FunctionComponent, } from "react"
import "./textInput.css"

type props ={
    placeholder:string,
    value:string,
    onChangeHandler:any,
    isTextArea?:boolean,
}

const TextInput : FunctionComponent<props> =({placeholder, value, onChangeHandler, isTextArea})=>{

    // const onChangeHandler =(e:any)=>{
    //     setEmail(e.target.value)
    // }
    // const onChangeHandler =(e:any)=>{
    //     setEmail(e.target.value)
    // }
    return(
        <section className={"textInput__container"}>
                {
                    !isTextArea
                    ? <input type={"text"} className={"textInput__input"} placeholder={placeholder} value={value} onChange={onChangeHandler}  />
                    : <textarea  placeholder={placeholder} value={value} onChange={onChangeHandler} className={"textInput__input_textArea"} />
                }
            {/*<input className={"textInput__input"} placeholder={placeholder} value={value} onChange={onChangeHandler} />*/}
        </section>
    )
}
export default TextInput
