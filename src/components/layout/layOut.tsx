import React, {FunctionComponent} from 'react'
import {Header, Footer} from "../common"
import {Outlet} from "react-router-dom"
import "./layout.css"

type props  ={
    children:any
}

const LayOut : FunctionComponent = () =>{
    return(
        <>
            <Header />

                <Outlet />


            <Footer />
        </>
    )
}
export default LayOut
