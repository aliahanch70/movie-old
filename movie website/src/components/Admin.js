import React, {Component} from 'react';
import {MoviesList} from '../Data_movie';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        console.log(this.state.value);
        event.preventDefault();
    }


    render() {
        const mm=MoviesList;
        console.log(mm);
        MoviesList.push({id: 1, square:2});

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Admin;