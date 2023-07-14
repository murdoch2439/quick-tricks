import React, {FunctionComponent} from 'react'
import "./category.css"

type props ={
    title:string;
    total:string;
    separator:boolean
}

const Category : FunctionComponent<props> =({title, total, separator})=>{
    return(
        <div className={"category"}>
            <div className={"category__content"}>
                <p>{title}</p>
                <p className={"category__badge"}>+{total}</p>
            </div>
            {
                separator
                ?<div className={"category__separator"} />
                : null
            }
        </div>
    )
}
export default Category
