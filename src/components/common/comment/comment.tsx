import React, {FunctionComponent, useState} from 'react'
import "./comment.css"
import profile from "../../../assets/marc2.png"
import TextInput from "../textInput";

const Comment : FunctionComponent = () =>{
    const [showInputField, setShowInputField] = useState(false)
    const [content, setContent] = useState("")
    const showInputFieldHandler =()=>{
        setShowInputField(true)
    }
    return(
        <section className={"comment__container"}>
            <div className={"comment__container__left_section"} >
                <div className={"comment__container__cover__container"}>
                    <img alt={"profile"} src={profile} className={"comment__container__image"} />
                </div>
            </div>
            <div className={"comment__container__right_section"}>
                <div>
                    <h5>Admin</h5>
                    <p>Sep 23, 2021</p>
                </div>
                <div>
                    <p>These hobbies round us out as people. They allow us to stretch some creative, competitive muscles while keeping the stakes at a nice. These hobbies round us out as people. They allow us to stretch some creative, competitive muscles while keeping the stakes at a nice.
                    </p>
                    {
                        showInputField?
                            <TextInput placeholder={"Reply here"} value={content} onChangeHandler={(e:any)=>setContent(e.target.value)} isTextArea={true}  />
                            :
                            null
                    }
                </div>

                <button className={"reply__button"} onClick={showInputFieldHandler}>
                    Reply
                </button>
            </div>
        </section>
    )
}
export default Comment
