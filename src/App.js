import React, { Component } from 'react';
import SeasonalDisplay from './SeasonalDisplay';
import Spinner from './Spinner';

export default class App extends Component {
    
    constructor(props) {
        super()
        this.state = {
             lat: null,
             errorMessage: ''
        }
    }

    componentDidMount = () => {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat: position.coords.latitude})
            },
            (err) => {
                this.setState({errorMessage: err.message})
            }
        );
    }

    componentDidUpdate = () => {
        console.log("Called")
    }
    
    render() {
        if(this.state.lat && !this.state.errorMessage){
            return <SeasonalDisplay lat={this.state.lat}/>
        }
        if(!this.state.lat && this.state.errorMessage){
            return <div>Lat: {this.state.errorMessage}</div>
        }

        return <Spinner/>
    }
}
