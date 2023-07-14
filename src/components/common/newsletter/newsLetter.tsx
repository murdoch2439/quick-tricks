import React, {FunctionComponent} from 'react'
import "./newsLetter.css"
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';


const Newsletter : FunctionComponent = () =>{
    return(
        <div className={"newsletter"}>
            <div className={"newsletter__first-section"}>
                <DraftsOutlinedIcon style={{fontSize:50, color:"white"}} />
                <p className={"newsletter__text"}>Subscribe to newsletter</p>
            </div>
            <div className={"newsletter__second-section"}>
                    <input placeholder={"Email"} className={"newsletter__input"} />
                <button className={"newsletter__button"} >Submit</button>
            </div>
        </div>
    )
}
export default Newsletter
