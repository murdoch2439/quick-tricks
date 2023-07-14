import React, {FunctionComponent, useState} from 'react'
import "./formComment.css"
import TextInput from "../textInput";


const FormComment : FunctionComponent = () =>{
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [content, setContent] = useState("")
    const [loading, setLoading] = useState(false)
    const isSubmitting = ()=>{
        console.log({name, email, content})
        setLoading(true)
        setTimeout(()=>{setLoading(false)}, 2000)
    }
    return(
        <section className={"FormComment__container"}>
            <h4>Leave a comment</h4>
            <p>Your email address will not be published. Required fields are marked *</p>
            <div className={"FormComment__container__form"}>
                <div className={"FormComment__container__form_section_textInput"}>
                    <TextInput placeholder={"Name"} value={name}  onChangeHandler={(e:any)=>setName(e.target.value)} />
                    <TextInput placeholder={"Email"} value={email}  onChangeHandler={(e:any)=>setEmail(e.target.value)} />
                </div>
                <TextInput placeholder={"Write your message here"} value={content} onChangeHandler={(e:any)=>setContent(e.target.value)} isTextArea={true}  />
                <button className={"post__comment_button"} onClick={isSubmitting}>
                    {loading? "Posting...": "Post"}
                </button>
            </div>
        </section>
    )
}
export default FormComment
