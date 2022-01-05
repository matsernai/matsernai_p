import React, { Component } from "react";
import profile1 from '../img/profile1.jpg';

class About extends Component {
    render() {
        return(
            <div className="condiv about">
                <h1 className="subtopic">About me</h1>
                <img src={profile1} alt="profile" className="profilepic" />
                <h3>Hi, I'm ter</h3>
                <p>I'm from Laos, I'm live in Bokeo. I'm 18 years old my birthday is on the 5 of march. I'm a student. My favorite sport is Badminton. There are 5 people in my family. My free time I like playing guitar and watching YouTob.</p>
            </div>
        )
    }
}

export default About;