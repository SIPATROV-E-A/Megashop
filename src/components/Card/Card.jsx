import React from "react";
import "./index.css"
import heart from '../assets/heart.svg'

const Card =({name, discount, price, pictures})=>{

    const sale = price - (price/100)*discount;
    
    
return(
    <div className="card_container">
        <div className="sale_container">

            <span className="sale"> {discount} %</span>

        </div>
        <img
         src={pictures}
         alt=""
         className="card_image" 
         />
         <div className="name_container">
            <span className="name"> {name}</span>
         </div>
         <div> рейтинг </div>
         <div className="prise_container">
            <span className="prise" > {price} Р.</span>
            <span className="prise_sale"> {sale} Р.</span>

         </div>
         <button> в корзину</button>
         <button>
            <img src={heart} alt="добавить в избранное" className="heart" />
         </button>
    </div>
)
}
export default Card;