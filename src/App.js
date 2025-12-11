import React,{useState} from 'react';
import axios from 'axios';
import Search from './Search.js';
import ResultList from './ResultList.js';
import Popup from './Popup.js'
function App(){
    const apiURL = "http://www.omdbapi.com/?apikey=87c9ba8a";
    const [state,setState] = useState({
        movieName:"",
        resultList:[],
        selectedMovie:[]
    });
    const search = ()=>{
        axios.get(apiURL + "&s=" + state.movieName).then(
            ({data})=>{
                let results = data.Search;
                if(typeof(results) === "undefined"){
                    setState(prevState => {return {...prevState,resultList:[]}});
                    return;
                }
                let filtered_results = [];
                const seenIds = new Set();
                for(const movie of results){
                    if(seenIds.has(movie.imdbID)) continue;
                    seenIds.add(movie.imdbID);
                    filtered_results.push(movie);
                }
                setState(prevState=>{
                    return {...prevState,resultList: filtered_results};
                }
                );
            }
        );
    };
    const  handleKeyPress= (e)=>{
        if(e.key==="Enter"){
            search();
        }
    };

    const handleClick=()=>{
        search();
    }

    const handleInput = (input)=>{
        const currentName = input.target.value;
        setState(prevState => {
            return{...prevState,
            movieName:currentName}
        });
        // console.log(state.movieName);
    };

    const openPopup = (id) =>{
            // console.log(id);
            axios.get(apiURL + "&i=" + id).then(({data})=>{
            let results = data;
            // console.log(results);
            setState(prevState =>{
                return {...prevState,selectedMovie:results};
            });
        })
        ;
    };

    const closePopup = ()=>{
        setState(prevState =>{
            return {...prevState,selectedMovie:[]};
        });
    };
    return(
        <div className = "App">
            <header>
                <h1>Movie Database</h1>
            </header>
            <main>
                <Search handleInput = {handleInput} handleKeyPress = {handleKeyPress}
                handleClick = {handleClick}/>
                <ResultList resultList={state.resultList} openPopup = {openPopup}/>
                {(typeof(state.selectedMovie.Title) !== "undefined")?
                <Popup selectedMovie = {state.selectedMovie} closePopup={closePopup}/>:false}
            </main>
        </div>

    )
}

export default App;