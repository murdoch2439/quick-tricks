import React, {FunctionComponent} from "react"
import "./sectionTitle.css"


type props ={
    title:string
}


const SectionTitle : FunctionComponent<props> =({title})=>{
    return(
        <div className={"section__title"}>
            <h4>{title}</h4>
            <div className={"section__title_separator"} />
        </div>
    )
}

export default SectionTitle
