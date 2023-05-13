import React from "react";
import './AboutWork.css';
import { Image } from "semantic-ui-react";

const AboutWork = () =>{
    return(
        <div className="workouter">
             <Image className="arrow" src={require('../../../Assets/images/arrow.png')} />
            <h1 className="workheader">How we work?</h1>
            <div className="line-work"></div>
            <div className="workcontent">
                <h1 style={{color : "#B3BB92"}}>Unleashing the Power of Expertise: </h1>
                <h2 className="worksubhead">&nbsp;HRLytics' Exceptional Team and Support Mechanism"</h2>
                <Image className="workplace-img" src={require('../../../Assets/images/workplace.png')} />
                <p>HRLytics is powered by a team of seasoned professionals who bring extensive experience and expertise from working with top-tier clients and a diverse clientele. The team comprises solution architects specializing in HR, Learning, Recruitment, and Resource Management, platform and product architects, micro product designers, platform development experts, Operations and delivery experts with wide-ranging experiences, customer relationship engagers, as well as Project Management and Delivery Management Professionals.</p>
                <p>The escalation mechanism is meticulously designed with transparent and multi-channel communication, facilitating direct leader-to-leader interactions at any time, from anywhere. The leadership and management exhibit a superfast reaction time to any escalation. Well-defined Standard Operating Procedures (SOPs) and Turnaround Time (TAT) ensure high-quality delivery and seamless rollouts. We follow an agile and huddle process, ensuring that every support and delivery request is promptly addressed in the most effective manner. The interaction mechanism among the teams is cordial, goal-oriented, and culture-driven, with a relentless focus on addressing problems and issues, thereby ensuring superior and enhanced support.</p>
            </div>
        </div>
    );
}

export default AboutWork;