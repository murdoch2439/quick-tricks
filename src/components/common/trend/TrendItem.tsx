import React, {FunctionComponent} from "react"
import "./trenditem.css"



type Props={
    title:string,
    rank:string
}

const TrendItem : FunctionComponent<Props> = ({title,rank}) =>{
    const bgManager=()=>{
        if(rank==="1"){
            return "primary"
        }
        if(rank==="2"){
            return "secondary"
        }
        if(rank==="3"){
            return "third"
        }
    }
    return(
        <div className={`trend__container ${bgManager()}`}>
            <p className={`${bgManager()}`}>#{rank} {title}</p>
        </div>
    )
}

export default TrendItem
