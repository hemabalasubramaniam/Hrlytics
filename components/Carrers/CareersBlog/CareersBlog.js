import React from "react";
import { Image } from "semantic-ui-react";
import './CareersBlog.css'

const CareersBlog = () => {
    return (
        <div className="careerBlog">
            <p>At HRLytics, our team is made up of individuals from diverse cultural backgrounds who share a common vision: to make the world a better place through our software engines and services. We believe in walking the talk, with a strong bias towards action. We talk less and do more, knowing that actions speak louder than words.</p>
            <p>Collaboration is at the heart of our team. We believe in achieving our vision by linking with the right people at the right time in the most engaging ways. We work together, leveraging our diverse talents and expertise to create innovative solutions for our clients.</p>
            <div className="flex_career_desk">
            <div className="flex_career1">
                <div className="flex1">
                    <p>Optimism is our mindset. We are optimists who support and build each other up. We never lose our passion and love for what we do and what we believe in. Our positive outlook drives us to overcome challenges and achieve our goals.</p>
                    <p>Adventure and creativity are our fuel. We love to think outside the box and find unconventional solutions. Our sense of adventure and creativity allows us to stay ahead of the competition and constantly push the boundaries of what is possible.</p>
                    <p>Trust is the foundation of our team. We work together as a family in an environment of trust. We believe that trust leads to approachability and open communications, fostering a culture of transparency, accountability, and mutual respect.</p>
                </div>
                <div className="career_img2">
                    <Image src={require('../../../Assets/career_img2.png')} />
                </div>
            </div>

            </div>
            <div className="flex_career1_mob">
                <div className="flex_career1">
                    <div className="flex1">
                        <p>Optimism is our mindset. We are optimists who support and build each other up. We never lose our passion and love for what we do and what we believe in. Our positive outlook drives us to overcome challenges and achieve our goals.</p>
                    </div>
                    <div className="career_img2">
                        <Image src={require('../../../Assets/career_img2.png')} />
                    </div>
                </div>
                <p>Adventure and creativity are our fuel. We love to think outside the box and find unconventional solutions. Our sense of adventure and creativity allows us to stay ahead of the competition and constantly push the boundaries of what is possible.</p>
                <p>Trust is the foundation of our team. We work together as a family in an environment of trust. We believe that trust leads to approachability and open communications, fostering a culture of transparency, accountability, and mutual respect.</p>

            </div>

            <p>Professionalism is a way of life for us. We generously share our professional knowledge and are always willing to help others succeed. Our commitment to professionalism is reflected in our work ethic, integrity, and dedication to delivering high-quality results for our clients.</p>
            <p>Excellence is our standard. We strive for achieving excellence in all that we do. We believe that productivity is not an accident, but the result of a commitment to excellence, intelligent planning, and focused effort. We are constantly raising the bar and challenging ourselves to be the best we can be.</p>

            <div className="flex_career2">
                <div className="career_img3">
                    <Image src={require('../../../Assets/career_img3.png')} />
                </div>
                <div className="flex2">
                    <p>Thank you for reaching us and joining us on this exciting journey. Together, we are a team that is driven by passion, creativity, and a shared commitment to making a positive impact in the world through our HR Tech software engines and services. Welcome to Team HRlytics.</p>
                </div>
            </div>
        </div>
    )
}

export default CareersBlog