import React, {FunctionComponent} from 'react'
import "./teamember.css"
import person from "../../assets/team.jpg"

type Props={
    identity:string;
    title:string;
}

const TeamMember : FunctionComponent<Props> = ({identity, title}) =>{
    return(
        <div className={"teamember__container"}>
           <img src={person} alt={"team-member"}/>
           <div className={"teamember__content"}>
               <h4>{identity}</h4>
               <p className={"teamember__title"}>{title}</p>
           </div>

        </div>
    )
}

export default TeamMember
