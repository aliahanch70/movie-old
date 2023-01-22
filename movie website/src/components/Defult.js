import React, {Component} from 'react';
import Movie from "./Movie";
import {MoviesList} from '../Data_movie';
import './main.css'

class Defult extends Component {

    render() {
        const movies = MoviesList;
        let sliceMovie = movies.slice(0,12);

        return (
            <div>
                <>
                    <div className="container">
                        {sliceMovie.length > 0 && sliceMovie.map(movie=>{
                            return  <Movie
                                key={movie.id}
                                exMovie={movie}
                            />
                        })}
                    </div>
                </>
            </div>
        );
    }
}

export default Defult;