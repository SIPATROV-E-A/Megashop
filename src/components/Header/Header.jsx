import "./index.css";
import React from "react";


export function Header(params){
    return(
        <header className="header">
        <div className="container">
            <a href="#">
                <img src="https://e7.pngegg.com/pngimages/615/494/png-clipart-logo-design-text-symbol.png" alt="" />
            </a>
            <div className="header_container">
                <input type="text" placeholder="поиск" />
<button > Поиск</button>        
            </div>
        </div>

        </header>
    );
}