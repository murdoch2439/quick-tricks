import React, {FunctionComponent, useEffect, useState} from 'react'
import "./home.css"
import banner from "../../assets/banner.svg"
import InfoComponent from "../../components/infoComponent/infoComponent";
import RocketOutlinedIcon from '@mui/icons-material/RocketOutlined';
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';
import AssistantOutlinedIcon from '@mui/icons-material/AssistantOutlined';
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import rightBanner from '../../assets/me-min.png'
import ArticleCard from "../../components/articleCard";
// import cover from "../../assets/cover.png"
import {ARTICLES} from "../../utils/data";
import SearchInput from "../../components/searchInput";
import {ArticlesService} from "../../api/TricksServices";
import {Article} from "../../model/models";
import {Outlet} from "react-router-dom"
import {Footer, Header} from "../../components/common";
import {useParams, useLocation, useNavigate} from "react-router-dom"
// BsJournalCode
// FaMicroblog
// RiRocket2Line


const Home : FunctionComponent = () =>{
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

        <div className={"home"}>
            <div className={"home__banner-header container__padding"}>
                <section className={"home__banner-container"}>
                    <div className={"home__banner-image"}>
                        <img alt={"banner"} src={banner} className={"banner-image"} />
                    </div>

                    <div className={"title-description-cta"}>
                        <div>
                            <h1 className={"banner__title"}><span className={"span__one"} >Quick</span><span className={"span__two"}>Tricks</span>, where to write, read and connect.</h1>
                            <p className={"paragraph"}>It's easy and free to post your thinking on any topic and connect with millions of readers, but can't stop speaking without making mention of <span style={{fontWeight:'bold'}}>"lorem ipsum"</span> which is one of our favorite words in the world.</p>
                            <div className={"call-to-action"}>
                                {/*<div>*/}
                                    <button onClick={()=>navigate("authentication")} className={"call-to-action-button"}>Get started</button>
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>

                </section>

                <div className={"info-section"}>
                    <InfoComponent icon={<RocketOutlinedIcon fontSize={"large"} />} description={"The more you learn the more you grow and gain."} />
                    <InfoComponent icon={<AssistantOutlinedIcon fontSize={"large"} />} description={"Get specific answers and solutions on different programming topics."} />
                    <InfoComponent icon={<IntegrationInstructionsOutlinedIcon fontSize={"large"} />} description={"Words doesn't work without code, find code snippets."} />

                </div>
            </div>

            <div className={"third-section mainSection__padding"}>
                <div className={"third-section-child-right"}>
                    <div>
                    </div>
                    <div className={"aside_image_container"}>
                        <img alt={"students"} src={rightBanner} style={{width:"100%"}} />
                        <div className={"cta"}>
                            <p>The academy is coming soon...</p>
                            {/*<button className={"home__loadmore__button"}>*/}
                            {/*    <p>Join</p>*/}
                            {/*</button>*/}
                        </div>

                    </div>
                </div>
                <div className={"third-section-child-left"}>
                    <div className={"child-left-header"}>
                            <h1 className={"second__title"}>Recent Posts</h1>
                            <select id="cars" name="posts" className={"select__container"}>
                                <option value="all" className={"select__option"}>All post {color}</option>
                                <option value="web design" className={"select__option"}>Web design</option>
                                <option value="javascript" className={"select__option"}>Javascript</option>
                                <option value="kotlin" className={"select__option"}>Kotlin</option>
                            </select>
                        <div className={"container__input_home"}>

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
                    {/*<div className={"home__loadmore__button_container"} >*/}
                    {/*    <button className={"home__loadmore__button"}>*/}
                    {/*        See more*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                </div>

            </div>
        </div>

    )
}
export default Home
