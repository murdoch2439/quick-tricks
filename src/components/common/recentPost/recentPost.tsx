import React, {FunctionComponent} from 'react'
import "./recentPost.css"
import photo from "../../../assets/img-findjob.png"

type props={
    cover:any,
    title:string,
    category:string,
    date:string
}


const RecentPost : FunctionComponent<props> = ({cover, title, category, date}) =>{
    return(
        <div className={"recent__post"}>
            <div className={"recent__post_picture"}>
                <img alt={"photo-of-recent"}  src={cover} className={"recent__post_photo"} />
            </div>
            <div className={"recent__post_text"}>
                <h6 className={"recent__post_text__title"}>{title}</h6>
                <div className={"recent__post__par__container"} >
                    <p className={"recent__post__par"}>{category}</p>
                    <p className={"recent__post__par"}>{date}</p>
                </div>
            </div>
        </div>
    )
}
export default RecentPost
