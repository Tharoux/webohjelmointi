import React from 'react'
import "./info.css";

export default function Info() {
    return (
        <div>
            <h1 className="display-4">Information about athlete database</h1>
            <p className="lead">
                You can search, add, update, and delete athletes on this athlete database application.
            </p>
            <p>
                When adding an athlete the only required information are the first and last names of the athlete.
                The images of athletes will open in a new tab, if a link to the image exist. Otherwise it will open the home page.
            </p>
            <p className="alert alert-info">
                Note: All the data one can input in this application are handled as strings.
            </p>
            <p className="text-secondary">Version 1.1.0</p>
        </div>
    );
}
