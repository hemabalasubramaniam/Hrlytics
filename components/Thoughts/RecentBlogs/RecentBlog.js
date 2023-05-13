import React from "react";
import './RecentBlog.css';
import { Image } from "semantic-ui-react";

const RecentBlog = () =>{
    return(
        <div className="recentOuter">
            <h1 className="recentblogsheader">Recent Blog</h1>
            <div className="line-recentblogs"></div>
            <div className="recentContent">
                <div className="recent-left">
                    <Image src={require('../../../Assets/images/recentblogs.png')} />
                </div>
                <div className="recent-right">
                <h1 className="recentheader">Free Python Bootcamp</h1>
                <p>We have signed an agreement with the Tamilnadu School Education Board to be the Technology Partner to train the Government School students to succeed in the NEET Examination through E-Box, our flagship product. </p>
                </div>
            </div>
        </div>
    );
}

export default RecentBlog;