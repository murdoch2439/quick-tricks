import React, {FunctionComponent} from 'react'
import "./footer.css"
import Newsletter from "../newsletter";
import SocialMedia from "../socialMedia";
import logo from "../../../assets/logo-qt.svg"
import BottomNavbar from "../bottomNavbar";

const Footer : FunctionComponent = () =>{

    const currentYear =  new Date().getFullYear();

    return(
      <section className={"footer"}>

          <div className={"footer__third__section"}>
              <div className={"footer__third__section__container container__padding"}>
                  <div className={"footer__third__section__left"}>
                      <BottomNavbar />
                  </div>
                  <div className={"footer__third__section__center"}>
                      <img alt={"logo"} src={logo} />
                  </div>
                  <div className={"footer__third__section__right "}>
                      <SocialMedia />
                  </div>
              </div>
          </div>
          <div className={"copyright"}>
              <p>All rights reserved ©{currentYear}</p>
          </div>
      </section>
    )
}

export default Footer
