import React from "react";
import { withTranslation } from 'react-i18next';
import Header from "../../Header/Header";
import './Services.css';
import { Grid, Image } from 'semantic-ui-react';
import DrivingProductivity from "./Driving/DrivingProductivity";
import OurServices from "./OurServices/OurServices";
import ServiceBlogs from "./ServiceBlog/ServiceBlogs";

class Services extends React.Component {
    render() {
        const { changeActiveComponent, activeStatus, menuHandler, t } = this.props;
        const serviceDetails = t('serviceDetails', { returnObjects: true });
        return (
            <>
                <Header changeActiveComponent={changeActiveComponent} activeStatus={activeStatus} menuHandler={menuHandler} />
                {/* <div className="headerContent">
                    <p className="headingStyle"><strong>{t('products_and_services_offerings')}</strong></p>
                    <p className="subheadingStyle">{t('analytics_hr')}</p>
                </div>
                <div className="serviceContent">
                    {window.innerWidth >= 768 ?
                        <Grid doubling>
                            {serviceDetails.map((ele, i) => (
                                ele.side === "right" ?
                                    <Grid.Row className="sectionView">
                                        <Grid.Column width={10} >
                                            <div className="staffContent">
                                                <h1 className="sectionheadingStyle">{ele.name}</h1>
                                                <p className="sectionPara">{ele.content}</p>
                                            </div>
                                        </Grid.Column>
                                        <Grid.Column width={6} >
                                            <Image src={ele.src} />
                                        </Grid.Column>
                                    </Grid.Row>
                                    :
                                    <Grid.Row className="sectionView">
                                        <Grid.Column width={6} >
                                            <Image src={ele.src} />
                                        </Grid.Column>
                                        <Grid.Column width={10} >
                                            <div className="staffContent">
                                                <h1 className="sectionheadingStyle">{ele.name}</h1>
                                                <p className="sectionPara">{ele.content}</p>
                                            </div>
                                        </Grid.Column>
                                    </Grid.Row>
                            )
                            )}
                        </Grid>
                        : <Grid>
                            {serviceDetails.map((ele, i) => (
                                <>
                                    <Grid.Row className="sectionView">
                                        <h1 className="sectionHeading">{ele.name}</h1>
                                        <Image className="serviceImage" src={ele.src} />
                                        <p className="sectionPara">{ele.content}</p>
                                    </Grid.Row>
                                </>
                            )
                            )}
                        </Grid>}

                </div> */}
                <div className="services">
                <DrivingProductivity />
                <OurServices />
                <ServiceBlogs />

                </div>
            </>
        )
    }
}

export default withTranslation('translations')(Services);
