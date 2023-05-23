import "./index.css";
import React from "react";


export function Paginator(params){
    return(
        <header className="header">
        <div className="container">
            <a href="#">
                <img className="image" src="https://e7.pngegg.com/pngimages/615/494/png-clipart-logo-design-text-symbol.png" alt="" />
            </a>
            <div className="header_container">
                <input className="input" type="text" placeholder="       поиск" />
<button className="button" > Поиск</button>        
            </div>
        </div>

        </header>
    );
}