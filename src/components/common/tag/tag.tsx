import React , {FunctionComponent} from "react"
import "./tag.css"
import {toUpperCase} from "../../../utils/toUppercase";

type props ={
    tags:string[]
}

const TagComponent: FunctionComponent<props> = ({tags}) =>{
    return(
        <div className={"tags__container"}>
        {
            tags.map((tag, index)=>{
                return(
                    <span key={index} className={"tag__container"}>
                        <p className={"tag__title"}>{toUpperCase(tag)}</p>
                    </span>

                )
            })
        }
        </div>

    )
}

export default TagComponent
