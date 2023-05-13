import React from "react";
import './Preface.css';
import { Image, Button } from 'semantic-ui-react';

const Preface = (props) =>{
    return(
        <div className="prefaceouter">
            <div className="prefacemobileheader">Preface</div>
            <div className="line"></div>
            <div className="preface">
                <div className="prefaceleft">
                    <Image className="ceo-img" src={require('../../../Assets/images/ceo.png')} />
                    <div className="shortintro">
                        <b>Abhilasha Gaonkar</b>
                        <p>CEO,HRLytics</p>
                    </div>
                </div>
                <div className="prefaceright">
                    <h2 className="prefaceheader">Preface</h2>
                    <p className="greetings"> Greetings! I had instructed my team to craft this website to be informative, engaging, and participatory. The rapid and dramatic changes witnessed in the world over the past decade have been both astonishing and alarming, but also intriguing. It has become a fascinating challenge to design a new-age system for managing human resources in the face of pervasive digital, AI, and computing advancements. The minds of today's human resources are greatly influenced and easily distracted by personalized opportunities in an exploratory world.</p>
                    <Button className="prefacemore" onClick={()=>props.changeActiveComponent("Thoughts")}>Read More</Button>
                </div>
            </div>
        </div>
    );
}
export default Preface;