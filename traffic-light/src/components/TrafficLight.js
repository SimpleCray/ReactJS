import React, { Component } from 'react';
import './TrafficLight.css';

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class TrafficLight extends Component{
    constructor(){
        super();
        this.currentColor = RED;
    }
    getNextColor(color){
        switch(color){
            case RED:
                return ORANGE;
            case ORANGE:
                return GREEN;    
            default:
                return RED;
        }
    }
    render(){
        return <div className="TrafficLight">
            <div className="bulb red"/>
            <div className="bulb orange"/>
            <div className="bulb green"/>
        </div>
    }
}
export default TrafficLight;