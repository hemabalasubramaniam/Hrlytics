import React from "react";
import './HomeServices.css';
import { Image,Button } from "semantic-ui-react";

const HomeServices = (props) =>{
    return(
        <div className="serviceOuter">
            <h1 className="serviceheader">Our Services</h1>
            <div className="line-2"></div>
            <div className="servicecontent">
                <div className="oddservices">
                    <Image className="service-img" src={require('../../../Assets/images/service1.png')} />
                    <p style={{width: "90%"}}>New Gen Sourcing and Recruitment</p>
                </div>
                <div className="evenservices">
                    <Image style={{width: "18%", margin: "auto"}} className="service-img2" src={require('../../../Assets/images/service2.png')} />
                    <p style={{paddingTop: "13px"}}>Skill Profiling</p>
                </div>
                <div className="oddservices">
                    <Image className="service-img" src={require('../../../Assets/images/service3.png')} />
                    <p style={{paddingTop: "13px"}}>Talent Profiling</p>
                </div>
                <div className="evenservices">
                    <Image className="service-img" src={require('../../../Assets/images/service4.png')} />
                    <p>Human Analytics and Checks</p>
                </div>
                <div className="oddservices">
                    <Image style={{width: "22%", margin: "auto"}} className="service-img5" src={require('../../../Assets/images/service5.png')} />
                    <p>Enablement and Engagement</p>
                </div>
                <div className="evenservices">
                    <Image className="service-img" src={require('../../../Assets/images/service6.png')} />
                    <p>Human Potential Analytics and Roadmap</p>
                </div>
                <div className="oddservices">
                    <Image className="service-img" src={require('../../../Assets/images/service7.png')} />
                    <p>Maximization of Human Potential</p>
                </div>
                <div className="evenservices">
                    <Image className="service-img" src={require('../../../Assets/images/service8.png')} />
                    <p>Maximizing Workforce Utilization</p>
                </div>
                <div className="oddservices">
                    <Image className="service-img" style={{height: "50px"}} src={require('../../../Assets/images/service9.png')} />
                    <p style={{paddingTop: "13px"}}>Productivity Gap Analytics</p>
                </div>
                <div className="evenservices">
                    <Image className="service-img" src={require('../../../Assets/images/service10.png')} />
                    <p>Productivity Enhancement</p>
                </div>
            </div>
            <div className="btn-section">
                <Button className="knowmore-btn" onClick={()=>props.changeActiveComponent('Services')}>Know More</Button>
            </div>
        </div>    
    );
}

export default HomeServices;