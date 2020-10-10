import React, {Component} from "react";
import axios from "axios";

const Context = React.createContext();

//DIA 65!!!!!!!!!!!!!!!!!!!!

const reducer = (state, action) => {

    switch (action.type) {
        case "DELETE_ATHLETE":
            return {
                //Filter out the deleted athlete. Payload contains id only.
                athletes: state.athletes.filter(
                    (athlete) => athlete.id !== action.payload
                ),
            };
        case "ADD_ATHLETE":
            return {
                //Set action.payload.data into ...state.athletes. Payload contains all data.
                athletes: [...state.athletes, action.payload.data],
            };
        case "UPDATE_ATHLETE":

            const array = state.athletes.map((athlete) => (
                athlete.id === action.payload.data.id
                ? athlete = action.payload.data
                : athlete
            ));

            return {
                athletes: array,
            }
        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
        athletes: [],
        dispatch: (action) => {
            this.setState((state) => reducer(state, action))
        }
    }


    async componentDidMount() {
        await axios.get("http://localhost:3000/athletes")
        .then((res) => {
            this.setState({athletes: res.data})
            console.log(res.data);
        });
    }

    render () {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;