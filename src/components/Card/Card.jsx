import React from "react";
import "./index.css"
import heart from '../assets/heart.svg'

const Card =({name, discount, price, pictures})=>{

    const sale = price - (price/100)*discount;
    
    // ?? - оператор нулевого слияния. Если price = null/andefjund , то выполняется правая часть
    // !! - привести правую часть к булевому значению
    // {...&& ...} - условный рендеринг - если левая часть true, то правая часть рендерится, иначе не рендерится
    
return(
    <div className="card_container">
        <div className="sale_container">
           {!!discount && <span className="sale"> - {discount} %</span>}
            

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
            <span className="price" > {price ?? 'no price'} Р.</span> 
            <span className="price_sale"> {sale} Р.</span>

         </div>
         <button> в корзину</button>
         <button>
            <img src={heart} alt="добавить в избранное" className="heart" />
         </button>
    </div>
)
}
export default Card;