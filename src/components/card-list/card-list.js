import React from 'react';
import "./card-list.css"
import { Cards } from '../cards/cards'
export const Cardlist= props =>{

    return (
        <div className="card-list">

             {props.monster.map(monster=> <Cards monster={monster} ></Cards>)}
        </div>
    );
};
