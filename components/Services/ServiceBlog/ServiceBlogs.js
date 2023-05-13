import React from "react";
import { Image } from "semantic-ui-react";
import './ServiceBlogs.css'

const ServiceBlogs = () => {
    return (
        <div className="serviceBlog">
            <div className="h1">
                <h1>Greetings. Welcome to the HRLytics Services! </h1>
            </div>
            <div className="blog_hr">
                <hr />
            </div>
            <div className="blog1">
                <p>HRLytics offers a comprehensive suite of services that cover the entire spectrum of HR processes, from recruitment to talent management to productivity enhancement. With its data-driven approach and innovative features, HRLytics empowers organizations to optimize their human resources, align their workforce with their business needs, and drive productivity to new heights.</p>
                <p>HRLytics is a comprehensive HR technology platform that offers an array of cutting-edge services to empower organizations in optimizing their human resources and driving productivity to new heights.</p>
            </div>
            <div className="image_blog">
                <Image src={require('../../../Assets/Kayal.png')} className="image" />
            </div>
            <div className="ellipse">
                <Image src={require('../../../Assets/serviceEllipse.png')} className="image" />
            </div>
            <div className="image_div">
                <b>KayalVizhi</b><br />
                <p>COO, HRLytics</p>
            </div>
          
            <div className="blog2">
            <p>At the heart of HRLytics is its "New Gen Sourcing and Recruitment" feature, which leverages state-of-the-art technology to identify and attract the best talent from the market. With advanced sourcing techniques and innovative recruitment strategies, organizations can tap into a wider pool of qualified candidates, ensuring a strong pipeline of potential hires.</p>
            <p>The platform's "Skill Profiling" and "Talent Profiling" features enable organizations to accurately assess the skills and talents of their candidates, ensuring the right fit for their organizational requirements. This data-driven approach allows organizations to make informed decisions about candidate suitability and align their workforce with their business needs effectively.</p>
            <p>HRLytics goes beyond just recruitment, with its "Human Analytics and Checks" feature. Organizations can conduct comprehensive background verifications and gain deeper insights into their candidates' backgrounds, ensuring a secure and reliable hiring process.</p>
            <Image src={require('../../../Assets/image_blog.png')} className="group_img"/>
            <p>Once candidates are onboarded, HRLytics' "Enablement and Engagement" features facilitate a seamless transition into the organization. Through personalized onboarding processes and engaging employee experiences, organizations can ensure their new hires are motivated and productive from day one.</p>
            <p>The platform's "Human Potential Analytics and Roadmap" feature empowers organizations to identify and map the potential of their existing workforce. By analyzing employee skills, interests, and aspirations, organizations can create personalized career development plans and align their employees' career paths with the organization's strategic goals.</p>
            <p>HRLytics also helps organizations in "Maximizing Human Potential" by optimizing workforce utilization. By matching employees' skills and talents with the right roles and responsibilities, organizations can maximize their workforce's capabilities and productivity, resulting in improved overall performance.</p>
            <p>Furthermore, HRLytics offers "Productivity Gap Analytics" to identify areas of improvement and implement strategies to enhance productivity across the organization. By analyzing data and providing actionable insights, organizations can bridge productivity gaps and achieve higher levels of efficiency.</p>

            </div>

        </div>
    )
}

export default ServiceBlogs;