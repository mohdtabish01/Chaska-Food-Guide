import { useState } from "react";
import { LOGO_URL } from "../utils/constants";


function Header(){

    const [btn, setBtn]=useState("Login...");

    let login_btn_logic=(()=>(
       btn=="Login..." ? setBtn("Log out") : setBtn("Login...")
    ));

    return(
           <div className="header">
                  <div className="img-container">
                         <img className="logo" src = {LOGO_URL}
                         alt="app-logo">
                         </img>
                  </div>
                  <div className="name"> <h1> Chaska! </h1> </div>
                  <div className="nav-items">
                         <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                                <li>Cart</li>
                                <button onClick={login_btn_logic} className="loginbtn">
                                   {btn}
                                   </button>
                         </ul>
                  </div>
           </div>
    );
}


export default Header;