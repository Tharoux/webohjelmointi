import React, { Component } from 'react'
import {Consumer} from "../context";
import axios from "axios";

export default class AddAthlete extends Component {
    state = {
            firstName: "",
            lastName: "",
            callName: "",
            yearOfBirth: "",
            weight: "",
            imageLink: "",
            sport: "",
            accomplishments: "",
    }

    onSubmit = async (dispatch, e) => {
        e.preventDefault();
        
        const {firstName, lastName, callName, yearOfBirth, weight, imageLink, sport, accomplishments} = this.state;
        const newAthlete = {
            firstName: firstName,
            lastName: lastName,
            callName: callName,
            yearOfBirth: yearOfBirth,
            weight: weight,
            imageLink: imageLink,
            sport: sport,
            accomplishments: accomplishments,
        }

        const res = await axios.post(`http://localhost:3000/addathlete/`, newAthlete);

        dispatch({type: "ADD_ATHLETE", payload: res.data});

        this.props.history.push("/");
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    render() {
        const {firstName, lastName, callName, yearOfBirth, weight, imageLink, sport, accomplishments} = this.state;

        return (

            <Consumer>
                {(value) => {
                    const {dispatch} = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header">Add athlete</div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <div className="form-group">
                                        <label htmlFor="firstName">Firstname</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            className="form-control form-control-lg"
                                            placeholder="Input firstname..."
                                            value={firstName}
                                            onChange={this.onChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastName">Lastname</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            className="form-control form-control-lg"
                                            placeholder="Input lastname..."
                                            value={lastName}
                                            onChange={this.onChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="callName">Callname</label>
                                        <input
                                            type="text"
                                            name="callName"
                                            className="form-control form-control-lg"
                                            placeholder="Input callname..."
                                            value={(callName != null) ? callName : " "}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="yearOfBirth">Year of birth</label>
                                        <input
                                            type="text"
                                            name="yearOfBirth"
                                            className="form-control form-control-lg"
                                            placeholder="YYYY-MM-DD..."
                                            value={(yearOfBirth != null) ? yearOfBirth : " "}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="weight">Weight</label>
                                        <input
                                            type="text"
                                            name="weight"
                                            className="form-control form-control-lg"
                                            placeholder="Input weight..."
                                            value={(weight != null) ? weight : ""}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="imageLink">Image link</label>
                                        <input
                                            type="text"
                                            name="imageLink"
                                            className="form-control form-control-lg"
                                            placeholder="Input image link..."
                                            value={(imageLink != null) ? imageLink : "http://localhost:3001/"}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="sport">Sport</label>
                                        <input
                                            type="text"
                                            name="sport"
                                            className="form-control form-control-lg"
                                            placeholder="Input sport..."
                                            value={(sport != null) ? sport : " "}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="accomplishments">Accomplishments</label>
                                        <input
                                            type="text"
                                            name="accomplishments"
                                            className="form-control form-control-lg"
                                            placeholder="Input accomplishments..."
                                            value={(accomplishments != null) ? accomplishments : " "}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <input
                                        type="submit"
                                        value="Add athlete"
                                        className="btn btn-light btn-block"
                                    />
                                </form>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}
