import React, { Component } from 'react';
import * as firebase from 'firebase';

import './style.css';

class SensorReader extends Component {

    constructor(props){
        super(props);
        // this.state = {
        //     temperatura: 0
        // }
    }

    componentDidMount(){
    // var connectedRef = firebase.database().ref("sensor");
    // connectedRef.on("value", (snap) => {
    //     this.setState({temperatura: snap.val()})
    // });
    }

    render(){
        return (<h1>{this.props.temperatura}</h1> )
    }


}

export default SensorReader;