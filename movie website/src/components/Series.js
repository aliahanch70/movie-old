import React, {Component} from 'react';
import Movie from "./Movie";
import {withRouter} from "react-router-dom"
import {MoviesList} from "../Data_movie";
import './Series.css'

class Series extends Component {

    state={
        pageNumber:this.props.page
    };

    // componentDidMount() {
    //     const ss=this.props.location.pathname;
    //     var sln = ss.length;
    //     var res = ss.slice(8, sln);
    //     var a = parseInt(res);
    //     console.log(a);
    //     this.setState({pageNumber: a});
    // }



    render() {
        const movies = MoviesList.filter(x=>x.Type==="series");
        const i=this.props.page*12;
        const ii=i-12;
        const sMovie = movies.slice(ii,i);
        console.log(this.props.page);

        console.log(sMovie);
        return (
            <div>
                <div className="top-name">Series</div>
                <br/>
                <div className="container">
                { sMovie.map((movie)=>{
                     {  if(movie.Type==="series")
                        return <Movie
                            key={movie.id}
                            exMovie={movie}
                        />
                    }})}
                </div>
            </div>

        );
    }
}

export default withRouter(Series);