import React from "react";
import {Link} from "react-router-dom";
import "./headerStyle.css";
import basketball from "../basketball.svg";

const Header = (props) => {
    return (
        <div className="container">
            <div className="row justify-content-start">
                <div className="col-12">
                    <nav className="navbar navbar-dark">
                        <div className="col- align-self-center">
                            <img className="navbar-logo" src={basketball}></img>
                        </div>
                        <div className="col">
                            <a href="/" className="navbar-brand">Athletes</a>
                        </div>
                        <div className="col-align-self-end">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsedContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="row">
                <div className="collapse" id="collapsedContent">
                    <div className="p-4">
                        <ul className="navbar-nav mr-auto flex-row">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/athlete/add" className="nav-link">
                                    Add athletes
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/info" className="nav-link">
                                    Information
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Header.defaultProps = {
//     turvataso: "pieni",
// }

// Header.propTypes = {
//     turvataso: PropTypes.string.isRequired,
// };

export default Header;