import React from 'react';
import movieLogo from './download.jpeg'

class MovieCard extends React.Component {
render() {
    return (
        <div className="movie-card">
            <img src={movieLogo} alt="Mad Max: Fury Road" width="400px" height="200px" />
            <h2>Mad Max: Fury Road</h2>
            <small>Genres: Action, Adventure, Science Fiction, Thriller</small>
        </div>
    )
}  
}

export default MovieCard