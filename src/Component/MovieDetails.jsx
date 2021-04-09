import React, { useState, useEffect  } from 'react';
import axious from 'axios';

const MovieDetails = (props) => {
    const [Movie, setMovie] = useState();

    useEffect(() => {
        loadMovie();
    });
    
    const loadMovie = () => {
        axious.get('http://api.tvmaze.com/shows')
        .then(Response => {
            setMovie(Response.data.filter (el => (el.id === props.match.params.id)));
        })
    }

    return (
        
        <div className="Movie">
            {
                Movie &&
                <div>
                    <img src={Movie[0].image.medium} alt=""></img>
                    <p>Name: {Movie[0].name}</p>
                    
                </div>
            }
        </div>
    );
}
export default MovieDetails;