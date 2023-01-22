import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Pages extends Component {


    render() {
        let pageP2;let pageP3;
        console.log(this.props.sorce);
        if(this.props.sorce/12 >= this.props.page){
            pageP2=<Link to={"/" + (this.props.page+2)}><p>{this.props.page+2}</p></Link>
        }
        if(this.props.sorce/12 >= this.props.page+1){
            pageP3=<Link to={"/" + (this.props.page+2)}><p>{this.props.page+2}</p></Link>
        }

            return (
                <div>

                    <Link to={"/" + this.props.page}><p>{this.props.page}</p></Link>
                    {pageP2}{pageP3}
                </div>
            );

    }
}
export default Pages;