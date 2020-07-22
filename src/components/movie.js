import React from 'react';
import  {Link} from "react-router-dom";
import "./movie.css";

function Movie({id , genres, poster,  summary , title ,year}) { 
    
    return (
        <Link to ={{
            pathname: "/movie-detail",
            state: {
                year:year,
                title:title,
                summary,
                poster,
                genres
            }
        }}>
        <div className ="movie">
            <img src={poster} alt={title} title={title}/>
            <div className="movie__data">
                <h3 className="movie__title"> {title}</h3>
                <h5 className="movie__yerar"> {year}</h5>
                <ul className="movie__genres">
                 {genres.map((genre,index) => (
                     <li key={index} className="genres__genre">
                         {genre}
                     </li>
                 ))} 
                </ul>
                <p className="movie__summary"> {summary} </p>
            </div>
        </div>
        </Link> 
    )



}


export default Movie;