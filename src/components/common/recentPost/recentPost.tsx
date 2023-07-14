import React, {FunctionComponent} from 'react'
import "./recentPost.css"
import photo from "../../../assets/img-findjob.png"


const RecentPost : FunctionComponent = () =>{
    return(
        <div className={"recent__post"}>
            <div className={"recent__post_picture"}>
                <img alt={"photo-of-recent"}  src={photo} className={"recent__post_photo"} />
            </div>
            <div className={"recent__post_text"}>
                <h6 className={"recent__post_text__title"}>How to make great campaign with free tools out there</h6>
                <div className={"recent__post__par__container"} >
                    <p className={"recent__post__par"}>Marketing</p>
                    <p className={"recent__post__par"}>January 13, 2022</p>
                </div>
            </div>
        </div>
    )
}
export default RecentPost
