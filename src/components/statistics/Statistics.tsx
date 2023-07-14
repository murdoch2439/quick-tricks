import React, {FunctionComponent} from "react"
import "./statistics.css"

type Props={
    description:string,
    stat:string,
}

const Statistics : FunctionComponent<Props> = ({description, stat}) =>{
    return(
        <div className={"statistics__container"}>
            <p>{description}</p>
            <h1>{stat}</h1>
        </div>
    )
}

export default Statistics
