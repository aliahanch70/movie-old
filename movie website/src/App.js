import React, {Component} from "react";
import './App.css';
import {
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Main from "./components/Main";
import Admin from "./components/Admin";
import Series from "./components/Series";
import Defult from "./components/Defult";
import {MoviesList} from './Data_movie';
import Data from "./components/Data";


class App extends Component {
    state={
        pageNumber: 1,
        i:1,
        pp:MoviesList.length,
        series: "",
        imdb:"",
        tt:""
    };

    pageN(x){
        this.setState({pageNumber:x})
    }

    hiddenHandel(){

    }

    componentDidMount() {
        const ss=this.props.location.pathname;
        var sln = ss.length;
        var res = ss.slice(1, sln);
        var res2 = ss.slice(1, 8);
        var restt = ss.slice(1, 3);
        var restt2 = ss.slice(4, sln);
        var res3 = ss.slice(8, sln);
        var b = parseInt(res3);
        var a = parseInt(res);
        console.log(res2+" sal "+res3);
        this.setState({tt:restt});
        this.setState({imdb:restt2});
        console.log(restt2);

        if(ss!=="/" && res2!=="series/" && restt!=="tt") {
            this.setState({i: a});
            this.setState({pageNumber: a});
            console.log("asdasdasdasdasdasd");
        }
        if(res2==="series/" ) {
            this.setState({series: res2});
            if (res3 !== "") {
                this.setState({i: b});
                this.setState({pageNumber: b});
            }
        }
    }

    render() {
        this.hiddenHandel();
        const ss=this.props.location.pathname;
        var sln = ss.length;

        var restt = ss.slice(1, 3);
        var restt2 = ss.slice(4, sln);


        let cuntMovie=(MoviesList.length/12)+1;
        console.log(ss + "sdfsd");

    let i2=this.state.i;
    if(this.state.pageNumber>=3){
        i2=this.state.pageNumber-2;
    }
    let pageOne;
    let page1;
    let page2;
    let page3;
    let page4;
    console.log("i2"+i2);
    console.log(this.state.series);

    if(this.state.series==="series/"){
        cuntMovie =(MoviesList.filter(x=>x.Type==="series").length/12)+1;
        console.log(cuntMovie + "sdfsd");
    }
        console.log(cuntMovie + "sdfsd");

    if(i2 !== 1 && this.state.series!=="series/" && restt!=="tt"){
        pageOne=<Link to={"/" + 1} onClick={()=>{this.pageN(1)}} ><p>1</p></Link>;
        console.log(cuntMovie + "sdfsd");
        console.log("1 ooo");
    }
    if(i2<=cuntMovie && restt!=="tt"){
        page1=<Link to={"/" +this.state.series + (i2)} onClick={()=>{this.pageN(i2)}} ><p>{i2}</p></Link>;
        console.log("2 ooo");
    }
    if(i2+1<=cuntMovie && restt!=="tt"){
        page2=<Link to={"/" +this.state.series + (i2+1)} onClick={()=>{this.pageN(i2+1)}} ><p>{i2+1}</p></Link>;
        console.log("3 ooo");
    }
    if(i2+2<=cuntMovie && restt!=="tt"){
        page3=<Link to={"/" +this.state.series + (i2+2)} onClick={()=>{this.pageN(i2+2)}} ><p>{i2+2}</p></Link>;
        console.log("4 ooo");
    }
    if(i2+3<=cuntMovie && restt!=="tt"){
        page4=<Link to={"/" +this.state.series + (i2+3)} onClick={()=>{this.pageN(i2+3)}} ><p>{i2+3}</p></Link>;
        console.log("5 ooo");
    }

    console.log(i2+"ss"+this.state.i+"  p"+this.state.pageNumber+" pp "+ this.state.pp);

    return (
        <>
            <Switch>
                <Route path="/"  exact component={Defult}/>
                <Route path="/admin" component={Admin}/>
                <Route path={"/" + this.state.pageNumber} >
                    <Main page={this.state.pageNumber}/>
                </Route>
                <Route path={"/series/" + this.state.pageNumber} >
                    <Series page={this.state.pageNumber}/>
                </Route>
                <Route path={"/tt/" + restt2} >
                    <Data imdb={restt2}/>
                </Route>

            </Switch>

            <div className="page-number">

                {pageOne}

                {/*<Link to={"/" + i2} onClick={()=>{this.pageN(i2)}}  ><p>{i2}</p></Link>*/}
                {/*<Link to={"/" + (i2 + 1)} onClick={()=>{this.pageN(i2+1)}} hidden={this.state.hide1}><p>{i2 + 1}</p></Link>*/}
                {/*<Link to={"/" + (i2 + 2)} onClick={()=>{this.pageN(i2+2)}} hidden={this.state.hide2}><p>{i2 + 2}</p></Link>*/}
                {/*<Link to={"/" + (i2 + 3)} onClick={()=>{this.pageN(i2+3)}} hidden={this.state.hide3}><p>{i2 + 3}</p></Link>*/}
                {/*<Link to={"/" + (i2 + 4)}  onClick={()=>{this.pageN(i2+4)}}><p hidden={this.state.hide4}>{i2 + 4}</p></Link>*/}
                {page1}
                {page2}
                {page3}
                {page4}
            </div>
        </>
    );
};
}

export default withRouter(App);
