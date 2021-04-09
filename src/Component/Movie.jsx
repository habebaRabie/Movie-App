import React from 'react';
import {Link} from 'react-router-dom'

const Movie = (props) =>{
    return(
        <div className="movie">
            <Link to={`Home/${props.data.id}`}>
                <div className="photo"><img src={props.data.image.medium} alt=""></img></div>
                <p>Film Name: {props.data.name}</p>
                <p>Language: {props.data.language}</p>
                <p>Rate: {props.data.rating.average}</p>
            </Link>
        </div> 
    )
}

export default Movie;