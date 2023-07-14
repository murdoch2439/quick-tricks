import React, {FunctionComponent} from "react"
import {Link} from "react-router-dom"
import "./articleCard.css"

import TagComponent from "../common/tag";
import {Article} from "../../model/models";
import {dateFormater} from "../../utils/dateFormater";
// import ArticleCategory from "../category/ArticleCategory";

type props ={
    article:Article
}

const ArticleCard : FunctionComponent<props> = ({article})=>{
    const { title, tags,  shortDescription,metadata:{created}, id} = article
    return(
        <Link to={`/articles/article/${id}`}>
            <div className={"article"}>
                {/*<div className={"cover"}>*/}
                {/*    <img alt={"cover"} src={image} className={"article-image"} />*/}
                {/*</div>*/}
                <div className={"content"}>
                    {/*<ArticleCategory title={article!.category} />*/}
                    {/*<p style={{ textAlign:'left', color:"#F56C6C"}}>{tag}</p>*/}
                    {/*<TagComponent title={tag} />*/}

                    <h3 className={"content__title"}>{title}</h3>

                    <p className={"content__description"}>{shortDescription}</p>
                    <div className={"content__tags"}>
                        <TagComponent tags={tags} />
                        {/*<TagComponent title={tag} />*/}
                        {/*<TagComponent title={tag} />*/}
                    </div>
                    <div className={"card__footer"}>

                        <p className={"duration__date"}>Last update {dateFormater(created)}</p>
                        <p className={"duration__date"}>2 min read</p>

                    </div>
                    {/*<p><Link to={`/article/${id}`} >View Details</Link></p>*/}
                </div>
            </div>
        </Link>
    )
}
export default ArticleCard
