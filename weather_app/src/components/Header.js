import React, { Component } from 'react'
import axios from 'axios'
require('dotenv').config()

let APIKEY = process.env.REACT_APP_APIKEY

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            zip: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            zip: event.target.value
        });
        console.log(this.state)
    }

    async handleSubmit(event) {
        event.preventDefault();
        const response = await axios(`http://api.openweathermap.org/data/2.5/weather?zip=${this.state.zip},us&appid=${APIKEY}`)
        console.log("response: ", response.data)

    }

    render() {
        return (
            <div>
                <h1>Weather App</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="search" placeholder="zip code" onChange={this.handleChange} value={this.state.search} />
                    <input type="submit" />
                </form>
            </div>

        )
    }
}

export default Header;