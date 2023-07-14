import React, {FunctionComponent, useState} from 'react'
import "./searchInput.css"
import { CgSearch } from 'react-icons/cg'
import { AiOutlineClose } from "react-icons/ai";

const SearchInput : FunctionComponent=()=>{

    const [isVisible, setIsVisible] = useState<boolean>(false)
    const visibilityHandler=()=>{
        setIsVisible(!isVisible)
    }

    return(
        <section className={"section__container"}>
            {/*<form>*/}
            {
                isVisible
                    ?
                    <input className={"search__input"} type={"text"} placeholder={"Type something..."}/>
                    :
                    null
            }
            {
                isVisible
                    ?
                    <div className={"search__button"} onClick={visibilityHandler} >
                        <AiOutlineClose size={20} />
                    </div>
                    :
                    <div className={"search__button1"} onClick={visibilityHandler} >
                        <CgSearch size={30} />
                    </div>
            }
            {/*</form>*/}
        </section>
    )
}
export default SearchInput
