import React, {Component} from 'react';
import {MoviesList} from "../Data_movie";
import './Data.css'



class Data extends Component {
    state={
        imdbData:" "
    };



    render() {
        const imdb =()=> {
            fetch(" http://www.omdbapi.com/?apikey=db0d0912&i="+ this.props.imdb)
                .then(response => response.json())
                .then(response => {
                    console.log(response);
                    this.setState({
                        imdbData:response
                    })

                })
                .catch(err => {
                    console.error(err);
                });
        };

        if (this.state.imdbData === " ") {
            imdb();
        }
        console.log(this.state.imdbData);



        const movie=MoviesList;
        const detail=movie.filter(x=>x.imdb===this.props.imdb);
        console.log(detail);

        var back={
            background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url(${detail[0].img})` ,
            backgroundColor: "#cccccc",

            backgroundPosition: "center" ,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        };
        return (
            <div className="box-detail" style={back}>


                <div className="content">

                    <img className="data-img" alt={this.state.imdbData.Title} src={detail[0].img}/>
                </div>
                <p className="title">{this.state.imdbData.Title}</p>
                <div className="box-imdb">
                    <p>IMDB :</p>
                    <p className="box-imdb-rat">{this.state.imdbData.imdbRating}</p>
                    <p>({this.state.imdbData.imdbVotes})</p>
                </div>
                <div className="box-meta">
                    <p>Metascore :</p>
                    <p className="box-meta-rat" >{this.state.imdbData.Metascore}</p>
                </div>
                <div className="box-text">
                    <p>Country : {this.state.imdbData.Country}</p>
                    <p>Runtime : {this.state.imdbData.Runtime}</p>
                    <p>imdbVotes : {this.state.imdbData.imdbVotes}</p>
                    <p>Rated : {this.state.imdbData.Rated}</p>
                    <p>Year : {this.state.imdbData.Year}</p>
                    <p>Seasons : {this.state.imdbData.totalSeasons}</p>
                    <p>Language : {this.state.imdbData.Language}</p>

                </div>


                <div>
                    <h4>Overvioe :</h4>
                    <p>{this.state.imdbData.Plot}</p>
                </div>
            </div>
        );
    }
}

export default Data;