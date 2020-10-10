import React, { Component } from "react";
import PropTypes from 'prop-types'
import "./athleteStyle.css";
import {Consumer} from "../context";
import axios from "axios";
import {Link} from "react-router-dom";

export default class Athlete extends Component {
    state = {
        showAthlete: false,
    }

    onDeleteClick = async (id, dispatch) => {

        dispatch({type: "DELETE_ATHLETE", payload: id});
        await axios.delete(`http://localhost:3000/deleteathlete/${id}`);

        
    }

    onShowClick = (e) => {
        this.setState({showAthlete: !this.state.showAthlete});
        console.log(this.state);
    }

    render() {
        const {id, firstName, lastName, callName, yearOfBirth, weight, imageLink, sport, accomplishments} = this.props.athleteInfo;
        const {showAthlete} = this.state;

        return (
            <Consumer>
                {(value) => {
                    const {dispatch} = value;
                    return (
                        <div className="card card-body mb-3">
                            <h4>
                                {firstName}{" "}
                                <button className="button" onClick={this.onShowClick.bind(this)}>
                                    +
                                </button>
                                <button className="button_right" onClick={this.onDeleteClick.bind(this, id, dispatch)}>
                                    Delete
                                </button>
                                <Link id ="updateid" to={`athlete/update/${id}`}>
                                    <button className="button_right">Update</button>
                                </Link>
                            </h4>
                            
                            {showAthlete ? (
                                <ul className="list-group">
                                    <li className="list-group-item" key={id + lastName}>Lastname: {lastName}</li>
                                    <li className="list-group-item" key ={id + callName + "2"}>Callname: {callName}</li> {/*+ "2" for unique key if callName === lastName or firstName*/}
                                    <li className="list-group-item" key={id + yearOfBirth}>Year of birth: {yearOfBirth}</li>
                                    <li className="list-group-item" key={id + weight}>Weight: {weight}</li>
                                    <li className="list-group-item" key={id + imageLink}>Image link: 
                                        {" "}<a href={imageLink} className="imageLinkToTab" target="_blank" rel="noopener noreferrer">Link to image</a>
                                    </li>
                                    <li className="list-group-item" key={id + sport}>Sport: {sport}</li>
                                    <li className="list-group-item" key={id + accomplishments}>Accomplishments: {accomplishments}</li>
                                </ul>
                            ) : null}
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

Athlete.propTypes = {

    athleteInfo: PropTypes.object.isRequired,

    //key: PropTypes.number.isRequired,
    //firstName: PropTypes.string.isRequired,
    //lastName: PropTypes.string.isRequired,
}