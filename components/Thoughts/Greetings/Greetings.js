import React from "react";
import './Greetings.css';
import { Image } from "semantic-ui-react";

const Greetings = () =>{
    return(
        <div className="greetingsouter">
            <div className="greetingscontent">
                <div className="greetingsleft">
                    <h1 className="greetingsheader">Greetings!</h1>
                    <p>I had instructed my team to craft this website to be informative, engaging, and participatory. The rapid and dramatic changes witnessed in the world over the past decade have been both astonishing and alarming, but also intriguing. It has become a fascinating challenge to design a new-age system for managing human resources in the face of pervasive digital, AI, and computing advancements. The minds of today's human resources are greatly influenced and easily distracted by personalized opportunities in an exploratory world.</p>
                    <p>In this era of unprecedented change, discerning what policies are right and what are wrong presents significant challenges. Hence, the inception of HRLytics, an initiative aimed at building an adaptable HR management system that places emphasis on maximizing human potential through personalized attention and enhancing organizational productivity. This will be achieved through seamless integration with various systems that add value to an organization's human resource ecosystem.</p>
                    <p>As we have assembled a team of proficient advisors and researchers specializing in human resource analytics, I extend a warm invitation to all of you to contribute your thoughts on this visionary HR ecosystem, and help shape this beautifully envisioned platform into a mature and robust solution. Your thoughts would be highly valued and published in our microblogs.</p>
                    <p><b>Abhilasha Gaonkar</b><br/>
                    CEO, HRLytics</p>
                </div>
                <div className="greetingsright">
                    <Image src={require('../../../Assets/images/abhilasha-ceo.png')} />
                </div>
            </div>

            <div className="greetingscontentmobile">
                <div className="greetingsmobile">
                    <div className="paradiv">
                        <h1>Greetings!</h1>
                        <p>I had instructed my team to craft this website to be informative, engaging, and participatory. The rapid and dramatic changes witnessed in the world over the past decade have been both astonishing and alarming, but also intriguing. It has become a fascinating challenge to design a new-age system for managing human resources in the face of pervasive digital, AI, and computing advancements. The minds of today's human resources are greatly influenced and easily distracted by personalized opportunities in an exploratory world.</p>
                    </div>
                    <div className="imagediv">
                        <Image src={require('../../../Assets/images/abhilasha-ceo.png')} />
                    </div>
                </div>
                <p>In this era of unprecedented change, discerning what policies are right and what are wrong presents significant challenges. Hence, the inception of HRLytics, an initiative aimed at building an adaptable HR management system that places emphasis on maximizing human potential through personalized attention and enhancing organizational productivity. This will be achieved through seamless integration with various systems that add value to an organization's human resource ecosystem.</p>
                    <p>As we have assembled a team of proficient advisors and researchers specializing in human resource analytics, I extend a warm invitation to all of you to contribute your thoughts on this visionary HR ecosystem, and help shape this beautifully envisioned platform into a mature and robust solution. Your thoughts would be highly valued and published in our microblogs.</p>
                    <p><b>Abhilasha Gaonkar</b><br/>
                    CEO, HRLytics</p>
            </div>
        </div>
    );
}

export default Greetings;