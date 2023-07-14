import {createContext, useContext} from "react";
// import {defaultUser, User} from "../model/models";


export interface GlobalContextType{
    isLoggedIn:boolean
    isLoading:boolean
    // user:User | null
    setIsLoggedin:(state:boolean)=>void
    // setUser:(user:User)=>void
    setIsLoading:(state:boolean)=>void

}

export const GlobalContext = createContext<GlobalContextType>(
    {
        isLoggedIn:false,
        isLoading:false,
        setIsLoggedin:(state)=>(state),
        // user: defaultUser() ,
        // setUser: ()=>{},
        setIsLoading:(state)=>(state)

    }
)

export const useGlobalContext =()=>useContext(GlobalContext)
