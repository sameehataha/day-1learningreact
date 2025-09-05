import React from "react"
import catLogo from "./cat-with-wry-smile-svgrepo-com.svg";
import "./style.css";


export default function Navbar() {
    return (
       
        <nav>
             <img src={catLogo} alt="cat logo" />
            <h3 className="nav">CatsFacts</h3>
        </nav>
      

    )
}
