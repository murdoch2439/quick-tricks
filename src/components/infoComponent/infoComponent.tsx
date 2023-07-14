import React, {FunctionComponent} from 'react'
import "./infoComponent.css"

type props ={
    icon: any,
    description:string
}

const InfoComponent : FunctionComponent<props> = ({icon, description}) =>{
    return(
        <div className={"info"}>
            <div className={"icon"}>{icon}</div>
            <div className={"description"}><p>{description}</p></div>
        </div>
    )
}

export default InfoComponent
