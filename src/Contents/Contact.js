import React, { Component } from "react";

import Social from "../Components/Social";

class Contact extends Component {
    render() {
        return(
            <div className="condiv">
                <h1 className="subtopic">Contact Me</h1>
                <h3>Email : mmatsernai@gmail.com</h3>
                <Social />
            </div>
        );
    }
}

export default Contact;