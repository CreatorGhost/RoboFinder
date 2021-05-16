import React from 'react';
import './search.css';

export const SearchBar=({ placeholder ,changeHandler})=>{
    return(
            <input
            className='search'
            type="search"
            placeholder={placeholder}
            onChange={changeHandler}
            />
          );
}