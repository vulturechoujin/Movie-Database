import React from 'react';
import Result from './Result';
function ResultList({resultList,openPopup}){
    return (
        <section className = "resultList">
            {resultList.map(
                (result)=>(
                    <Result key = {result.imdbID} result = {result} openPopup = {openPopup}/>
                )
            )}
        </section>
    )
}

export default ResultList;