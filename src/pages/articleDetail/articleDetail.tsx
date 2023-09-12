import React, {FunctionComponent, useEffect, useMemo, useState} from "react"
import {useParams, useLocation, useNavigate} from "react-router-dom"
import heroBanner from "../../assets/hero-banner.png"
import { AiOutlineLeft } from "react-icons/ai";
import "./articleDetail.css"
import TagComponent from "../../components/common/tag";
import Category from "../../components/common/category";
import RecentPost from "../../components/common/recentPost";
import SectionTitle from "../../components/common/sectionTitle";
import Comment from "../../components/common/comment";
import FormComment from "../../components/common/formComments";
import {Article} from "../../model/models";
import {ArticlesService} from "../../api/TricksServices";
import {dateFormater} from "../../utils/dateFormater";
import {uppercasingFirstLetterOfEachWord} from "../../utils/uppercasingFirstLetter";
import ArticleCategory from "../../components/category/ArticleCategory";

import photo1 from "../../assets/new.png"
import photo2 from "../../assets/marc2.png"
import photo3 from "../../assets/cover.png"

const SampleArticle = {
    id:"7yu2782vss930",
    title:"Bye-bye useState & useEffect: Revolutionizing React Development!",
    shortDescription:"Many developers continue to use the useState and useEffect hooks to update states, but I have not been fond of this approach. The issue is that it causes the component to mount, remount, and unmount simultaneously, leading to unexpected behavior. As a result, when logging something into the console, you may see the result repeated three times.",
    longDescription:"Introducing the useLoaderData Hook:\n" +
        "The useLoaderData hook is a custom hook in React that helps you load data into your component. It simplifies the process of fetching data from an API or performing any asynchronous operation.\n" +
        "\n" +
        "When you use the useLoaderData hook, you provide it with a function that returns a Promise. This Promise represents an asynchronous operation that will fetch the data you need. Once the Promise resolves, the data becomes available to your component.\n" +
        "\n" +
        "The useLoaderData hook handles the loading state for you, so you don't need to manually track whether the data is still loading or if it has finished loading. It provides you with a convenient way to access the data and also handles any potential errors that might occur during the data loading process.\n" +
        "\n" +
        "By using the useLoaderData hook, you can keep your component code clean and organized, separating the data-loading logic from the rest of your component's responsibilities. It allows you to easily fetch and manage data in a more beginner-friendly way."
     ,
    example:"<h1>hello World welcome home</h1>",
    tags:["Web", "Javascript", "React",],
    category:"Web Programming",
    publisherName:"Emmanuel Odii",
    primaryComments:null,
    metadata:{
        created:"2023-07-04T05:15:20",
        modified:"2023-10-04T10:55:58",
        views:129
    },
    status:"Posted"
}

const ArticleDetail : FunctionComponent =()=>{
    const [article, setArticle]= useState<Article>()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const {id} = useParams()
    console.log("Id =>", id)
    const {pathname} = useLocation()
    const navigate= useNavigate()

    const getAnArticle =async ()=>{
        // const singleArticle = await ArticlesService.getSingleArticle() ||  {} as any
        setArticle(SampleArticle)
        console.log("ARTTTT===>", SampleArticle)
        setIsLoading(false)
    }

    useEffect(()=>{getAnArticle().then()},[])
    // const { title, tags,  shortDescription,metadata:{created}, id} = article||undefined
    // console.log("params ==>", id)
    // console.log("pathname ==>", pathname)

    // const link = useMemo( () => "/blog/" + post.title?.replaceAll(":", "")?.replaceAll("-", "")?.replaceAll("  ", " ")?.replaceAll(" ", "-")?.toLowerCase() || "", [post.title])

    return(
        <div className={"detail"}>
            <div className={"detail__header"}>
                <img alt={"hero-banner"} src={heroBanner} className={"detail__img"} />
                {/*<div className={"detail__overlay"} />*/}
                <div className={"detail__back_button"} onClick={()=>navigate("/")}>
                    <AiOutlineLeft color={"white"} size={23}  />
                    <p className={"goback"}>Go back</p>
                </div>
            </div>
            {
                isLoading ?
                    <div className={"detail__loader"}><p>Loading...</p></div>:
                    <div className={"detail__main"}>
                    <div className={"detail__main_left_child"}>
                        <div className={"detail__main_left_child_image_container"}>
                            {/*<img alt={"job-interview"} src={} className={"detail__hero_picture"} />*/}
                            <div className={"detail__top"}>
                                <div className={"detail__top-date"}>
                                    {
                                        article!.metadata.modified ?
                                        <p className={"detail__date"}>Last update <i>{dateFormater(article!.metadata.modified)}</i></p>
                                            :
                                        <p className={"detail__date"}>Created on <i>{dateFormater(article!.metadata.created)}</i></p>
                                    }

                                </div>
                                <div>
                                </div>
                                <ArticleCategory title={article!.category} />
                            </div>
                            {/*<div style={{height:0.5, backgroundColor:'#A9A9A9', width:"60%"}} />*/}

                        </div>
                        <div className={"section__vertical-margin text__left"}>
                            <h3>{article!.title}</h3>
                            <p className={"para"}>{article!.longDescription}</p>
                            <p className={"para"}>{article!.longDescription}</p>

                        </div>

                        <div className={"section__vertical-margin detail__example-container"}>
                            <h3>Example</h3>
                            <div className={"detail__example"}>
                                <p>{article!.example}</p>
                            </div>
                        </div>

                        <div className={"section__vertical-margin detail__author-container"}>
                            <p className={"detail__date"}>Created on <i>{dateFormater(article!.metadata.created)}</i></p>
                            <p><i>By</i></p>
                            <p className={"detail__author"}> {uppercasingFirstLetterOfEachWord(article!.publisherName)}</p>


                        </div>
                        <div className={"section__vertical-margin detail__article__section"}>

                            <TagComponent tags={article!.tags} />
                        </div>
                        {/*<div className={"section__vertical-margin"} style={{height:1, backgroundColor:"#A9A9A9", width:"100%"}} />*/}

                        {/*<FormComment  />*/}
                        {/*<div style={{display:'flex', justifyContent:'space-between', alignItems:"center", width:"80%"}}>*/}
                        {/*    <div style={{width:"150px"}}>*/}
                        {/*        <h5>*/}
                        {/*            {*/}
                        {/*                article!.primaryComments === null ? 0 :article!.primaryComments*/}
                        {/*            } Comments*/}
                        {/*        </h5>*/}
                        {/*    </div>*/}

                        {/*    <div style={{height:1, backgroundColor:"#A9A9A9", width:"100%"}} />*/}
                        {/*</div>*/}

                        {/*{*/}
                        {/*    article!.primaryComments === null ?*/}
                        {/*        <div className={"section__vertical-margin detail__no-comment"}>*/}
                        {/*            <img className={"detail__nocomment-image"} src={noComment} alt={"nocomment"} />*/}
                        {/*        </div>:*/}
                        {/*    <>*/}
                        {/*        <Comment />*/}
                        {/*        <Comment />*/}
                        {/*    </>*/}
                        {/*}*/}


                    </div>
                    <div className={"detail__main_right_child"}>
                        <div >
                            <SectionTitle title={"Categories"} />
                            <Category title={"Business"} total={"5"} separator={true} />
                            <Category title={"Web"} total={"1"} separator={true} />
                            <Category title={"Marketing"} total={"27"} separator={true} />
                            <Category title={"Technologies"} total={"185"} separator={false} />
                        </div>
                        <div >
                            <SectionTitle title={"Related Posts"} />
                            <RecentPost cover={photo1} category={"Business"} date={"2021/06/04"} title={"Fix .htaccess issue"} />
                            <RecentPost cover={photo2} category={"Web Design"} date={"2021/03/14"} title={"Figma the best?"} />
                            <RecentPost cover={photo3} category={"Dev Ops"} date={"2021/20/11"} title={"My hosting plan"} />

                        </div>
                        <div  className={"detail__tagsection"}>
                            <SectionTitle title={"Tags"} />
                            <div className={"detail__alltags"} >

                                <TagComponent tags={article!.tags} />
                                {/*<TagComponent tags={article!.tags} />*/}
                                {/*<TagComponent tags={article!.tags} />*/}
                                {/*<TagComponent tags={article!.tags} />*/}
                                {/*<TagComponent tags={article!.tags} />*/}
                                {/*<TagComponent tags={article!.tags} />*/}
                                {/*<TagComponent title={"Marketing"} />*/}
                                {/*<TagComponent title={"CSS"} />*/}
                                {/*<TagComponent title={"Design"} />*/}
                                {/*<TagComponent title={"Business"} />*/}
                                {/*<TagComponent title={"Web"} />*/}
                                {/*<TagComponent title={"Javascript"} />*/}
                                {/*<TagComponent title={"ReactJs"} />*/}
                                {/*<TagComponent title={"Front-end"} />*/}
                                {/*<TagComponent title={"JSX"} />*/}
                                {/*<TagComponent title={"Algorithms"} />*/}
                                {/*<TagComponent title={"Data-structure"} />*/}
                            </div>
                        </div>
                    </div>
                </div>
            }

            {/*<p>{pathname}</p>*/}
        </div>
    )
}

export default ArticleDetail


