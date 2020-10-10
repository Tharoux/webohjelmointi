import React, { Component } from 'react'
import {Consumer} from "../context";
import axios from "axios";

export default class UpdateAthlete extends Component {
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

    async componentDidMount() {
        const {id} = this.props.match.params;

        const res = await axios.get(`http://localhost:3000/athletes/${id}`);
        const athlete = res.data;
        this.setState({
            id: athlete.id,
            firstName: athlete.firstName,
            lastName: athlete.lastName,
            callName: athlete.callName,
            yearOfBirth: athlete.yearOfBirth,
            weight: athlete.weight,
            imageLink: athlete.imageLink,
            sport: athlete.sport,
            accomplishments: athlete.accomplishments,
        });
    }

    onSubmit = async (dispatch, e) => {
        e.preventDefault();
        
        const {id, firstName, lastName, callName, yearOfBirth, weight, imageLink, sport, accomplishments} = this.state;
        const updatedAthlete = {
            id: id,
            firstName: firstName,
            lastName: lastName,
            callName: callName,
            yearOfBirth: yearOfBirth,
            weight: weight,
            imageLink: imageLink,
            sport: sport,
            accomplishments: accomplishments,
        }

        await axios
            .put(`http://localhost:3000/updateathlete/`, updatedAthlete)
            .then((res) => {
                dispatch({type: "UPDATE_ATHLETE", payload: res.data});
            });

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
                            <div className="card-header">Update athlete</div>
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
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="callName">Callname</label>
                                        <input
                                            type="text"
                                            name="callName"
                                            className="form-control form-control-lg"
                                            placeholder="Input callname..."
                                            value={callName}
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
                                            value={yearOfBirth}
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
                                            value={weight}
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
                                            value={imageLink}
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
                                            value={sport}
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
                                            value={accomplishments}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <input
                                        type="submit"
                                        value="Update athlete"
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
