import React from 'react';
import Search from './Search.js';
function App(){
    return(
        <div className = "App">
            <header>
                <h1>Movie Database</h1>
            </header>
            <main>
                <Search />
            </main>
        </div>
    );
}

export default App;