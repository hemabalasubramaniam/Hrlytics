import React from "react";
import './Team.css';
import { Image, Button } from "semantic-ui-react";

const Team = () =>{
    return(
        <div className="teamOuter">
            <Image className="arrow" src={require('../../../Assets/images/arrow.png')} />
            <h1 className="teamheader">Our Team</h1>
            <div className="line-3"></div>
            <div className="teamContent">
                <h2>Be at Your Best with the Besties</h2>
                <Image className="team-img" src={require('../../../Assets/images/team.png')} />
                <p>We are in a place where our voice is heard and our ideas are recognized. We are a part of a dynamic and innovative environment that nurtures talent and encourages growth. Together, we enjoy to strive for excellence and create a positive impact in the HR world. Make your career with us and be part of a HR Tech revolution.</p>
                <Button className="knowmore-btn">Know More</Button>
            </div>
        </div>
    );
}

export default Team;