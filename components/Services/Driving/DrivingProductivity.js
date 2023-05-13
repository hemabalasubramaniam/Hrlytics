import React from "react";
import { Image } from "semantic-ui-react";
import './Driving.css'

const DrivingProductivity = () => {
    return (
        <div className="driving">
            <div className="drivingLeft">
                <div>
                <h1>Driving Productivity through<br /> HR Tech Innovation:</h1>
                <h2 className="drivingPara">
                    HRLytics' New Gen Sourcing, Talent<br /> Profiling, and Human Analytics Services<br /> for Maximizing Human Potential
                </h2>

                </div>
            </div>

            <div className="img"><Image src={require('../../../Assets/service.png')} className="service" /></div>
        </div>
    )
}

export default DrivingProductivity