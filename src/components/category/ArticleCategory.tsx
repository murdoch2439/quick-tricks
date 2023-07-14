import React, {FunctionComponent} from "react"
import "./category.css"

type Props={
    title:string
}
const ArticleCategory : FunctionComponent<Props> = ({title}) =>{
    return(
        <div className={"category__container"}>
            {/*<i className={"category__title"}>Category: </i>*/}
            <p className={"category__title-item"}>{title}</p>
        </div>
    )
}

export default ArticleCategory
