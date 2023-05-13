import React from "react";
import './Platformengage.css';
import { Image } from "semantic-ui-react";

const Platformengage = () =>{
    return(
        <div className="platformengageouter">
            <h1 className="engage_header">How we engage</h1>
            <div className="line-5"></div>
            <div className="platformengage_content">
                <div className="left_engage">
                    <Image src={require('../../../Assets/images/platformengage.png')} />
                </div>
                <div className="right_engage">
                    <h1>Empowering Business Success:</h1>
                    <h2 className="engagesubhead">HRLytics' Comprehensive Support and Innovative Solutions</h2>
                    <p>HRLytics offers comprehensive assistance for various aspects of platform operations, including content support, new content development tailored to the specific needs of the business, meeting requirements outlined by business units, recruitment, resource management, HR business partner (BP) and learning and development (L&D) teams. We establish dedicated teams for operations, support, and development, specifically assigned to each organization, providing them with a committed and extended arm of support. Our operations team collaborates closely with the delivery teams to ensure smooth rollouts, robust audit trails, thorough genuineness checks, efficient cloud management, scalable support, and live assistance for learners, assessors, proctors, and others.</p>
                    <p>Our innovative solutions team works in tandem with the organization's requirements, providing platform-enabled ideas and roadmaps to ensure foolproofing of initiatives related to recruitment, HR BP, enablement, engagement, resource optimization, and resource utilization, ultimately enhancing productivity. We have devised a robust engagement framework that is highly process-oriented, meticulously documented, and digitally captured, serving as a valuable resource for organizations to achieve their return on investment (ROI).</p>
                </div>
            </div>
        </div>
    );
}

export default Platformengage;

