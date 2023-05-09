import React from "react";
import "./index.css"

const Card =()=>{
return(
    <div className="card_container">
        <div className="sale_container">

            <span className="sale"> 15 %</span>

        </div>
        <img
         src="https://avatars.mds.yandex.net/get-mpic/5226473/img_id2270370001046578512.jpeg/orig"
         alt="Добавить в избранное"
         className="card_image" 
         />
         <div className="name_container">
            <span className="name"> Клюшка Bauer RibCore</span>
         </div>
         <div> рейтинг </div>
         <div className="prise_container">
            <span className="prise"> 16000 Р.</span>
            <span className="prise_sale"> 13750 Р.</span>

         </div>
         <button> в корзину</button>
         <span>
            <svg></svg>
         </span>
    </div>
)
}
export default Card;