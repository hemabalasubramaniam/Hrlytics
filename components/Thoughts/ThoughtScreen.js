import React from "react";
import { Grid, Image } from "semantic-ui-react";
import './Thoughts.css';
import Header from "../../Header/Header";
import Greetings from "./Greetings/Greetings";
import Blogs from "./Blogs/Blogs";
import RecentBlog from "./RecentBlogs/RecentBlog";
import { withTranslation } from 'react-i18next';

class ThoughtScreen extends React.Component {
    render() {
        const { t, changeActiveComponent, activeStatus, menuHandler } = this.props;
        return (
            <>
                {/* <div className="homeBg" style={{ paddingTop: "18%" }}>
                    <img src='/assets/background-svg/curve1-1.svg' width={window.innerWidth} height={"auto"} alt="homeCurve" />
                </div>
                <div className="homeBg" style={{ paddingTop: "21%" }}>
                    <img src='/assets/background-svg/curve1-1.svg' width={window.innerWidth} height={"auto"} alt="homeCurve" />
                </div> */}
                <Header changeActiveComponent={changeActiveComponent} activeStatus={activeStatus} menuHandler={menuHandler} />
                {/* <div className="about_us_container">
                    <div className="aboutUsContent">
                        <div className="aboutUs_headingStyle"><strong>{t('why_us')}</strong></div><br /><br /><br />
                        <div className="subheadingStyle"><strong>{t('about_us_subheading1')}</strong></div><br />
                        <Grid columns={window.innerWidth >= 768 ? 2 : 1}>
                            <Grid.Column>
                                <p className='about_us_grid_content'>{t('about_us_content1')}</p><br />
                                <p className='about_us_grid_content'>{t('about_us_content2')}</p>
                            </Grid.Column>
                            <Grid.Column>
                                <p className='about_us_grid_content'>{t('about_us_content3')}</p><br />
                                <p className='about_us_grid_content'>{t('about_us_content4')}</p><br />
                                <p className='about_us_grid_content'>{t('about_us_content5')}</p><br />
                            </Grid.Column>
                        </Grid>
                        <h1 className="about_us_subheading">{t('about_us')}</h1><br />
                        <p className="aboutUsContent2">{t('about_us_content')}</p>
                        {window.innerWidth >= 768 ? <Image src='/assets/about-us-grid.png' alt="about" className="aboutUsImg" /> :
                            <Grid columns={3}>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Image src='/assets/aboutus-images/image1.png' />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Image src='/assets/aboutus-images/image2.png' />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Image src='/assets/aboutus-images/image3.png' />
                                    </Grid.Column>
                                </Grid.Row>

                                <Grid.Row>
                                    <Grid.Column>
                                        <Image src='/assets/aboutus-images/image4.png' />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Image src='/assets/aboutus-images/image5.png' />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Image src='/assets/aboutus-images/image6.png' />
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>}
                    </div>
                </div> */}

            <div>
            <Greetings />
            <Blogs />
            <RecentBlog />
        </div>
            </>
        )
    }
}

export default withTranslation('translations')(ThoughtScreen);