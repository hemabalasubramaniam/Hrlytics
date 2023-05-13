import React from "react";
import './Features.css';
import { Image } from "semantic-ui-react";

const Features = () =>{
    return(
        <div className="featuresOuter">
            <h1 className="featureshead">Features</h1>
            <div className="line-4"></div>
            <div className="featurescontent">
                <div>
                    <div className="featureimage">
                        <Image src={require('../../../Assets/images/feature1.png')} />
                    </div>
                    <p>Recruitment Framework</p>
                </div>
                <div>
                    <div className="featureimage">
                        <Image style={{width: "25%"}} src={require('../../../Assets/images/feature2.png')} />
                    </div>
                <p>Auto Sourcing</p>
                </div>
                <div>
                    <div className="featureimage">
                        <Image style={{width: "28%"}} src={require('../../../Assets/images/feature3.png')} />
                    </div>
                <p>Assessment Framework</p>
                </div>
                <div>
                    <div className="featureimage">
                        <Image style={{width: "28%"}} src={require('../../../Assets/images/feature4.png')} />
                    </div>
                <p style={{marginTop: "9px"}}>AI Enabled<br/> Interview Framework</p>
                </div>
                <div>
                    <div className="featureimage">
                        <Image src={require('../../../Assets/images/feature5.png')} />
                    </div>
                    <p>Auto Evaluations</p>
                </div>
                <div>
                    <div className="featureimage">
                        <Image style={{width: "23%"}} src={require('../../../Assets/images/feature6.png')} />
                    </div>
                <p>AI Enabled Proctoring</p>
                </div>
                <div>
                    <div className="featureimage">
                        <Image src={require('../../../Assets/images/feature7.png')} />
                    </div>
                <p>Learning Management</p>
                </div>
                <div>
                    <div className="featureimage">
                        <Image style={{width: "20%"}} src={require('../../../Assets/images/feature8.png')} />
                    </div>
                <p>Learning Automation</p>
                </div>
                <div>
                    <div className="featureimage">
                        <Image style={{width: "28%"}} src={require('../../../Assets/images/feature9.png')} />
                    </div>
                    <p>Skill Enablement</p>
                </div>
                <div>
                    <div className="featureimage">
                        <Image style={{width: "20%"}} src={require('../../../Assets/images/feature10.png')} />
                    </div>
                <p>Skill Management</p>
                </div>
                <div>
                    <div className="featureimage">
                        <Image style={{width: "25%"}} src={require('../../../Assets/images/feature11.png')} />
                    </div>
                <p>Resource Management</p>
                </div>
                <div>
                    <div className="featureimage">
                        <Image style={{width: "25%"}} src={require('../../../Assets/images/feature12.png')} />
                    </div>
                <p style={{marginTop: "9px"}}>Resource Utilization<br/> Framework</p>
                </div>
                <div>
                    <div className="featureimage">
                        <Image style={{width: "25%"}} src={require('../../../Assets/images/feature13.png')} />
                    </div>
                    <p>Productivity Management</p>
                </div>
                <div>
                    <div className="featureimage">
                        <Image style={{width: "25%"}} src={require('../../../Assets/images/feature14.png')} />
                    </div>
                <p>Productivity Maximisation</p>
                </div>
                <div>
                    <div className="featureimage">
                        <Image style={{width: "30%"}} src={require('../../../Assets/images/feature15.png')} />
                    </div>
                <p>Assessment Analytics</p>
                </div>
                <div>
                    <div className="featureimage">
                        <Image style={{width: "35%"}} src={require('../../../Assets/images/feature16.png')} />
                    </div>
                <p>Learning Analytics</p>
                </div>
                <div>
                    <div className="featureimage">
                        <Image style={{width: "25%"}} src={require('../../../Assets/images/feature17.png')} />
                    </div>
                    <p style={{marginTop: "9px"}}>Skill Development<br/> Reports and Insights</p>
                </div>
                <div>
                    <div className="featureimage">
                        <Image style={{width: "25%"}} src={require('../../../Assets/images/feature18.png')} />
                    </div>
                <p>Correlation Analytics</p>
                </div>
                <div>
                    <div className="featureimage">
                        <Image style={{width: "20%"}} src={require('../../../Assets/images/feature19.png')} />
                    </div>
                <p style={{marginTop: "9px"}}>Resource Utilization and Effectiveness Reports</p>
                </div>
                <div>
                    <div className="featureimage">
                        <Image style={{width: "25%"}} src={require('../../../Assets/images/feature20.png')} />
                    </div>
                <p>Productivity Analytics</p>
                </div>
            </div>
        </div>
    );
}

export default Features;