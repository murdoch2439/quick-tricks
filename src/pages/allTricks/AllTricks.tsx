import React, {FunctionComponent, useEffect, useState} from 'react'
import SearchInput from "../../components/searchInput";
import {ARTICLES} from "../../utils/data";
import ArticleCard from "../../components/articleCard";
import './alltricks.css'
import heroBanner from "../../assets/hero-banner.png";
import {useParams, useLocation, useNavigate} from "react-router-dom"
// import hero from "../../assets/hero.png"
// import heroBanner from "../../assets/hero-banner.png"
import { AiOutlineLeft } from "react-icons/ai";
import rightBanner from "../../assets/me-min.png";
import {Article} from "../../model/models";
import {ArticlesService} from "../../api/TricksServices";





const AllTricks : FunctionComponent =()=>{
    const color = 200
    const [allArticles, setAllArticles]= useState<any[]>([])
    const getArticles=async()=>{
        // const articles = (await ArticlesService.getAllArticles()) || {} as any
        // console.log(articles)
        setAllArticles(ARTICLES)
    }

    useEffect(()=>{
        getArticles().then()
    },[])
    const navigate= useNavigate()
    return(
        <div className={"alltricks__container "}>
            <div className={"detail__header"}>
                <img alt={"hero-banner"} src={heroBanner} className={"detail__img"} />
                {/*<div className={"detail__overlay"} />*/}
                <div className={"detail__back_button"} onClick={()=>navigate(-1)}>
                    <AiOutlineLeft color={"white"} size={23}  />
                    <p >Go back</p>
                </div>
            </div>
            <div className={"third-section container__padding"}>
                <div className={"third-section-child-left"}>
                    <div className={"child-left-header"}>
                        <h1 className={"second__title"}>Popular Post</h1>
                        <select id="cars" name="posts" className={"select__container"}>
                            <option value="all" className={"select__option"}>All post {color}</option>
                            <option value="web design" className={"select__option"}>Web design</option>
                            <option value="javascript" className={"select__option"}>Javascript</option>
                            <option value="kotlin" className={"select__option"}>Kotlin</option>
                        </select>
                        <div>
                            {/*<div className={"container__input_home"}>*/}
                            <SearchInput />
                            {/*</div>*/}
                        </div>
                    </div>
                    <div>
                        {
                            allArticles.map((article, index)=> <ArticleCard article={article} key={index} /> )
                        }
                    </div>
                    <div className={"home__loadmore__button_container"} >
                        <button className={"home__loadmore__button"}>
                            See more
                        </button>
                    </div>
                </div>
                <div className={"third-section-child-right"}>
                    <div>
                    </div>
                    <div className={"aside_image_container"}>
                        <img alt={"students"} src={rightBanner} style={{width:"100%"}} />
                        <div className={"cta"}>
                            <p>Join us today to start the journey</p>
                            <button className={"home__loadmore__button"}>
                                <p>Join</p>
                            </button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AllTricks
