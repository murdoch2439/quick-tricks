import React, {FunctionComponent} from 'react';
import {useParams, useLocation, useNavigate} from "react-router-dom"
import { AiOutlineLeft } from "react-icons/ai";

import "./about.css"
import heroBanner from "../../assets/hero-banner.png";
import about from "../../assets/about.jpg";
import TeamMember from "../../components/teamMember/TeamMember";
import Statistics from "../../components/statistics/Statistics";



const About : FunctionComponent =()=>{
    const navigate= useNavigate()
    return(
        <div className={"about__container"}>
            <div className={"detail__header"}>
                <img alt={"hero-banner"} src={heroBanner} className={"detail__img"} />
                {/*<div className={"detail__overlay"} />*/}
                <div className={"detail__back_button"} onClick={()=>navigate(-1)}>
                    <AiOutlineLeft color={"white"} size={23}  />
                    <p >Go back</p>
                </div>
            </div>
            <div className={"container__padding"}>
                <div className={"about__section-one"}>
                    <div className={"about__header-title"}>
                        <h1>Use education and communication for millions of programmers cope with daily basis code bug and skill up.</h1>
                    </div>
                    <div className={"about__header-title-content"}>
                        <p>Communication is the way we chose to make the industry grow up faster, in fact from entry level to expert there's journey and room for everybody here to be part of the story. </p>
                    </div>


                </div>
                <div className={"about__section-two"}>
                    <div className={"about__picture-container"}>
                        <img alt={"hero-banner"} src={about} className={"about__img"} />
                    </div>

                    <div className={"about__statistics"}>

                        <h1>About us</h1>
                        <p>Gather communinty around great subjects and experience sharing, education is the way we chose to make the industry grow up faster, in fact from entry level to expert there's journey and room for everybody here to be part of the story. </p>
                        <div className={"about__statistics-items"}>
                            <Statistics description={"Gather communinty around great subjects and experience sharing"} stat={"439+"} />
                            <Statistics description={"Gather communinty around great subjects and experience sharing"} stat={"39+"} />
                            <Statistics description={"Gather communinty around great subjects and experience sharing"} stat={"19k"} />
                        </div>
                    </div>

                </div>
                <div className={"about__team"}>
                    <h1>Team</h1>
                    <div className={"about__team-member"}>
                        <TeamMember identity={"James Borris"} title={"TEAM LEAD"} />
                        <TeamMember identity={"James Borris"} title={"TEAM LEAD"} />
                        <TeamMember identity={"James Borris"} title={"TEAM LEAD"} />
                        {/*<TeamMember identity={"James Borris"} title={"TEAM LEAD"} />*/}
                    </div>
                    <div style={{height:4, backgroundColor:"rgb(125, 180, 249)", marginTop:20, borderRadius:"100%"}} />
                </div>

                <div>
                    <h1>Join our team</h1>
                </div>
            </div>

        </div>
    )

}


export default About
