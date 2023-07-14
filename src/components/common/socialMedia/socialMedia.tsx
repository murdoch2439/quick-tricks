import React, {FunctionComponent} from 'react'
import "./socialMedia.css"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import WhatsappOutlinedIcon from '@mui/icons-material/WhatsappOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';

const SocialMedia : FunctionComponent = () =>{
    return(
        <div className={"social__media"}>
            <FacebookOutlinedIcon className={"social__media_item"} />
            {/*<div style={{width:20}} />*/}
            <WhatsAppIcon className={"social__media_item"} />
            {/*<div style={{width:20}}  />*/}
            <NotificationsActiveOutlinedIcon className={"social__media_item"} />

        </div>
    )
}


export default SocialMedia
