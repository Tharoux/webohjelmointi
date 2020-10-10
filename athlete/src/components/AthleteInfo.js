import React, { Component } from 'react'
import Athlete from "./Athlete";
import {Consumer} from "../context";
import "./athleteInfoStyle.css";

export default class AthleteInfo extends Component {
    constructor () {
        super();
        this.state = {
            athletes: [],
        }
    }
    
    render() {
        return (
            <Consumer>
                {(value) => {
                    const {athletes} = value;
                    return (
                        <div>
                            <h1 className="display-4 mb-2">
                                <span className="ownStyle">Athlete information</span>
                            </h1>
                            <React.Fragment>
                                {athletes.map((athlete) => (
                                    <Athlete 
                                        key={athlete.id}
                                        athleteInfo={athlete}
                                    />
                                ))}
                            </React.Fragment>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}
