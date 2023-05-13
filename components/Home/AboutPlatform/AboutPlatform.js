import React from "react";
import './AboutPlatform.css';
import { Image, Icon } from "semantic-ui-react";

const AboutPlatform = (props) =>{
    return(
        <div className="platformOuter">
            <h1 className="platformheader">HRLytics - <span style={{color : "#E0DAAA"}}>The Platform</span></h1>
            <div className="line-1"></div>
            <div className="platformcontent">
            <div className="platformmobiletop">
                    <h2>HR Tech for Enhanced<br/> Productivity</h2>
                    <Image className="platform-img" src={require('../../../Assets/images/platform.png')} />
                    <Image className="right-arrow" src={require('../../../Assets/images/platform-arrow.png')} onClick={() =>props.changeActiveComponent('Platform')} />
                </div>
                <div className="platformleft">
                    <h2>HR Tech for Enhanced<br/> Productivity</h2>
                    <p>HRLytics presents an all-encompassing integrated platform that is indispensable for organizations seeking to leverage advanced HR technology to significantly boost their productivity and align their HR processes and activities with their business objectives.</p>
                    <p>HRLytics combines cutting-edge sourcing and recruitment technology with AI-powered interactive assessment engines for skill and talent profiling, competency mapping, and skill alignment with the organization's vision and business roadmap. Notably, it incorporates sophisticated AI-enabled background verification (BGV) checks that correlate with productivity and decision-making in recruitment.</p>
                    <p>Additionally, it offers pursuit features for optimal skill and business fitment, as well as predictive features for aligning human resources with their career path and organizational needs. The platform operates on a data-driven approach, scientifically exploring and modeling the potential of human resources to drive maximum productivity. Furthermore, it generates compelling reports and analytics that provide personalized and in-depth insights for adaptive customization of the HR ecosystem.</p>
                </div>
                <div className="platformright">
                    <Image className="platform-img" src={require('../../../Assets/images/platform.png')} />
                    <Image className="right-arrow" src={require('../../../Assets/images/platform-arrow.png')} onClick={() =>props.changeActiveComponent('Platform')} />
                </div>
            </div>
        </div>
    );
}

export default AboutPlatform;