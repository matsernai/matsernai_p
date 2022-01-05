import React, { Component } from "react";
import Widecard from "../Components/Widecard";


class Education extends Component {
    render() {
        return(
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="Softwre Enginering" where="University" from="2019" to="present" />
                <Widecard title="matsernai" where="High School" from="2012" to="2019" />
            </div>
        );
    }
}

export default Education;