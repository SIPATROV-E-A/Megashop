import "./index.css";
import React from "react";
import Card from "../Card/Card";
import data from '../assets/data.json'


export function CardList(params){
    return(
        <div> 
            {data.map((item)=><Card name={item.name} price={item.price} discount={item.discount} pictures={item.pictures}/>)
        
            }
        </div>
    );
}