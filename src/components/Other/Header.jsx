import React from "react";
import { setLocalStorage } from "../../utils/localStorage";

const Header =(props) =>{

    const logOutUser = () =>{
        localStorage.setItem('loggedInUser', '')
        props.changeUser('')
    }

    return(
        <div className="flex items-center justify-between text-white">
           <h1 className="text-2xl font-medium">Hello <span className="text-3xl font-semibold">username</span></h1>
              
           <button
           onClick={logOutUser} 
           
           
           className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm">Log out</button>
        </div>
    )
}

export default Header