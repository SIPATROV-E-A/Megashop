import React from "react";
import "./index.css"

const Card =(props)=>{
return(
    <div className="card_container">
        <div className="sale_container">

            <span className="sale"> {props.discount} %</span>

        </div>
        <img
         src={props.pictures}
         alt=""
         className="card_image" 
         />
         <div className="name_container">
            <span className="name"> {props.name}</span>
         </div>
         <div> рейтинг </div>
         <div className="prise_container">
            <span className="prise"> {props.price} Р.</span>
            <span className="prise_sale"> 13750 Р.</span>

         </div>
         <button> в корзину</button>
         <button>
            <img src="" alt="добавить в избранное" />
         </button>
    </div>
)
}
export default Card;