import React, {Component} from 'react';
import Movie from "./Movie";
import {MoviesList} from '../Data_movie';
import './main.css';
import {Link} from "react-router-dom";

class Main extends Component {

    state={
        pageNumber:this.props.page
    };





    render() {

        const movies = MoviesList;
        const i=this.props.page*12;
        const ii=i-12;
        const sliceMovie = movies.slice(ii,i);




        return (
            <div>
                <>
                    <p>all movie</p>
                    <div className="container">
                                {sliceMovie.length > 0 && sliceMovie.map(movie=>{
                                        return <Movie
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

export default Main;