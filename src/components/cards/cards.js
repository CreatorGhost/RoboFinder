import './card.styles.css';
import React from 'react';

export const Cards= (props)=>{
    let url="https://robohash.org/"+props.monster.id+"?set=set2&size=180x180";
    return( 
        <div className="card-container">
            

        <img src={url} alt="description of image" ></img>
        <h2>{props.monster.name}</h2>
        </div>
    );
   
}