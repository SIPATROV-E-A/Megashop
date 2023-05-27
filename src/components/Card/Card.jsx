import React from "react";
import "./index.css"
import {ReactComponent as Heart} from '../assets/heart.svg'

const Card =({name, discount, price, pictures,stock, isFavorite })=>{

    const sale = Math.round(price - (price/100)*discount);
    
    // ?? - оператор нулевого слияния. Если price = null/andefjund , то выполняется правая часть
    // !! - привести правую часть к булевому значению
    // {...&& ...} - условный рендеринг - если левая часть true, то правая часть рендерится, иначе не рендерится
    // &nbsp; - неразрывный прбел, не дает перенести сиволы на другую строчку от зависимого элемента
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
            <span className="price" > {price ?? 'no price'}&nbsp; Р.</span> 
            <span className="price_sale"> {sale}&nbsp; Р.</span>

         </div>
         <div>
            {stock ?? 'no stock'}
         </div>
         <button> в корзину</button>
         <button className="favorite_ikon">
            <Heart className={isFavorite ? 'favorite_ikon' : 'heart'}/>
         </button>
    </div>
)
}
export default Card;