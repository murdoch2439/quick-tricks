import React, {FunctionComponent, useState} from 'react'
// import {Link} from ""
import {useParams, useLocation, useNavigate} from "react-router-dom"
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';

import "./signup.css"
// import TextInput from "../../../components/common/textInput";
import banner from "../../../assets/banner.svg";
// import banner from "../../../assets/daughter.jpg";
import AuthCta from "../../../components/auth-butons/AuthCta";
import logo from "../../../assets/logo-qt.svg";
import AuthInput from "../../../components/auth-inputs/AuthInput";
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import {Signup} from "../../../model/models";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



const SignUp : FunctionComponent = () =>{
    const navigate= useNavigate()
    // const [signupProcess, setSignupProcess] = useState("signup")
    // const [loginProcess, setLoginProcess] = useState("login")
    const [isSignupActive, setIsSignupActive] = useState(true)
    const [isLoginActive, setIsLoginActive] = useState(false)
    const [formSignup, setFormSignup] = useState<Signup>({email:"", username:"", password:""})

    const inputs=[
        {
            id:"001",
            name:"username",
            type:"text",
            placeholder:"Username",
            errorMessage:"Username should be 3-16 chars and shouldn't include any special char",
            label:"Username",
            // pattern:"^[A-Za-z0-9]{3,16}$",
            // pattern:formSignup[0],
            required:true,


        },
        {
            id:"002",
            name:"email",
            type:"email",
            placeholder:"Email",
            errorMessage:"Something is wrong",
            label:"Email",
            required:true
        },
        {
            id:"003",
            name:"password",
            type:"password",
            placeholder:"Password",
            errorMessage:"Something is wrong",
            label:"Password",
            required:true

        },
    ]

    const inputsLogin=[

        {
            id:"001",
            name:"email",
            type:"email",
            placeholder:"Email",
            errorMessage:"Something is wrong",
            label:"Email",
            required:true
        },
        {
            id:"001",
            name:"password",
            type:"password",
            placeholder:"Password",
            errorMessage:"Something is wrong",
            label:"Password",
            required:true
        },
    ]




    const activeProcessHandler=(operation:string)=>{
          if(isSignupActive && operation === "login"){
              setIsSignupActive(false)
              setIsLoginActive(true)
              console.log(`going from sign up to ===> ${operation}`)
          }if(isLoginActive && operation === "signup"){
            setIsSignupActive(true)
            setIsLoginActive(false)
            console.log(`going from login up to ===> ${operation}`)
          }

    }

    const onChangeHandler=(e:any)=>{
        setFormSignup((prev)=> ({...prev, [e.target.name]:e.target.value}) )

    }

    const onSubmit =(e:any)=>{
        e.preventDefault()

            console.log("Info to send ===>",formSignup)


    }

    return(
        <section className={"signup"}>
            <div className={"signup__container"}>
                <div className={"signup__left"}>
                    <div className={"left-child"}>
                        <div>
                            <div className={"goback__button"} style={{marginBottom:"2rem", fontSize:12, display:"flex", alignItems:"center"  }}>
                                <ArrowBackIcon />
                                <span style={{backgroundColor:"rgba(225,225,225,0.3)" }} onClick={()=>navigate("/")}>


                                Go back
                            </span>
                            </div>
                            <h1 className={"title"}>Welcome onboard</h1>
                            <p className={"title sign__paragraph"}>Go ahead and join the community today and enjoy coding!</p>
                        </div>


                        {/*<img className={"img"} alt={"logo"} src={logo} style={{width:60, height:30}} />*/}

                        <div className={"signup__image"}>
                            <img alt={"banner"} src={banner} className={"banner-image"} />
                        </div>

                        <div className={"Auth-switcher"}>
                            <AuthCta isActive={isSignupActive} title={"Sign Up"} icon={<MarkunreadOutlinedIcon />} activeProcessHandler={()=>activeProcessHandler("signup")} />
                            <AuthCta isActive={isLoginActive} title={"Login"} icon={<LockOpenOutlinedIcon />} activeProcessHandler={()=>activeProcessHandler("login")} />
                        </div>
                    </div>

                </div>
                <div className={"signup__right"}>
                    <div className={"signup__form"}>
                        <div>
                            <h1>{isSignupActive ? "Create an Account": "Log into Your account"}</h1>

                                <p className={"sign__paragraph goo"}>QuickTricks Where we learn</p>

                            <form className={"forms"} onSubmit={onSubmit}  >
                                {
                                    isSignupActive ?
                                        <>
                                            {/*{inputs.map((elements, index)=>(<AuthInput key={index}  elements={elements}   />))}*/}
                                            <AuthInput name={"username"} onChangeHandler={onChangeHandler}  label={"Username"} placeholder={"Your username"} />
                                            <AuthInput name={"email"} onChangeHandler={onChangeHandler} label={"Email"} placeholder={"Your email"} />
                                            <AuthInput label={"Password"} name={"password"} onChangeHandler={onChangeHandler} placeholder={"Your password"} type={"password"} />
                                        </>:
                                        <div >
                                            {/*{inputsLogin.map((elements, index)=>(<AuthInput key={index}  elements={elements} />))}*/}
                                            <AuthInput name={"email"} onChangeHandler={onChangeHandler} label={"Email"} placeholder={"Your email"} />

                                            <AuthInput name={"password"} type={"password"} onChangeHandler={onChangeHandler} label={"Password"} placeholder={"Your password"} />
                                            <div style={{textAlign:"right"}}>
                                                <small>Password forgot?</small>
                                            </div>

                                        </div>
                                }
















                                <button  className={"btn"}>{isSignupActive ? "Sign up": "Login"}</button>

                            </form>

                            <p className={"sign__paragraph"} style={{textAlign:"center", fontSize:14, marginTop:"1rem"}}>Or connect with</p>
                            <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"2rem", color:"white"}}>
                                <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"2rem", }}>
                                    <GoogleIcon />
                                    <GitHubIcon />
                                    <FacebookIcon />
                                </div>

                                 {/*<small>Google</small>*/}
                                 {/*<small>Facebook</small>*/}
                                 {/*<small>Github</small>*/}
                            </div>
                        </div>


                    </div>
                </div>
            </div>



        </section>
    )
}
export default SignUp
