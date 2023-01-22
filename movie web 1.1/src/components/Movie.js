import React, {Component} from 'react';

import "./Movie.css";
import {Link} from "react-router-dom";


class Movie extends Component {
    state={
        rat:" ",
        years:" ",
        img:"/img/def.png"
};


    render() {
        // const imdbApi =()=>{
        //     fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/" + this.props.exMovie.imdb, {
        //         "method": "GET",
        //         "headers": {
        //             "x-rapidapi-key": "fc1ee60fdfmsh6fdd4275ed2ef95p1cd056jsn2795d6ac23ba",
        //             "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
        //         }
        //     })
        //         .then(response => response.json())
        //         .then(response => {
        //             console.log(response)
        //             this.setState({
        //                 years:response
        //             })
        //         })
        //         .catch(err => {
        //             console.log(err);
        //         });
        // };

        const imdb =()=> {
            fetch(" http://www.omdbapi.com/?apikey=db0d0912&i="+ this.props.exMovie.imdb)
                .then(response => response.json())
                .then(response => {
                    console.log(response);
                    this.setState({
                        rat:response
                    })

                })
                .catch(err => {
                    console.error(err);
                });
        };



            if (this.state.rat === " ") {
                imdb();
                this.setState()
            }


        return (

            <div className="box-movie">
                <Link to={"/tt/"+this.props.exMovie.imdb} className="img-a">
                    <img className="img-def" src="/img/def.png" alt={this.state.rat.Title+"("+this.state.rat.Year+")"}/>
                    <img className="img-main" alt={this.state.rat.Title+"("+this.state.rat.Year+")"} src={this.props.exMovie.img}/>
                </Link>
                <h4 className="box-title">{this.state.rat.Title} ({this.state.rat.Year})</h4>
                <div className="rating">{this.state.rat.imdbRating}</div>
                <div className="genre">{this.state.rat.Genre}</div>
                <div className="overview">
                    <h5>
                        Overview:
                    </h5>
                    <p>
                        {this.state.rat.Plot}
                    </p>
                </div>

            </div>
        );
    }
}

export default Movie;