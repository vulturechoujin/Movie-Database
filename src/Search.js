import React from 'react';
function Search({handleInput,handleKeyPress,handleClick}){
    return(
        <section className = "searchbox-wrap">
            <input 
            type = "text" 
            placeholder = "Search for a movie..." 
            className = "searchbox" 
            onChange={handleInput}
            onKeyDown = {handleKeyPress}/>
            <button className = "searchbutton" onClick={handleClick}>Search</button>
        </section>
    )
}

export default Search;