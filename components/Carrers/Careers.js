import React from "react";
import './Career.css';
import '../../styles.css';
import data from '../../data.json';
import Header from "../../Header/Header";
import { Card, Grid, Image } from 'semantic-ui-react';
import axios from "axios";
import { withTranslation } from 'react-i18next';
import CareersBlog from "./CareersBlog/CareersBlog";
import Positions from "./Positions/Positions";
import './Career.css'

class Careers extends React.Component {
    constructor() {
        super();
        this.state = {
            cardData: [],
        }
    }
    componentDidMount = () => {
        axios
            .get(this.props.url + "jobRequirement")
            .then((response) => {
                response.data.forEach((ele, i) => {
                    ele.sNo = i + 1;
                })
                this.setState({ cardData: response.data });
            })
            .catch((err) => {
                console.log(err.message);
            });
    }
    render() {
        const { t, changeActiveComponent, activeStatus, menuHandler } = this.props;
        var { cardData } = this.state;
        const cardDetails3 = t('card_details_3', { returnObjects: true });
        return (
            <>
                <Header changeActiveComponent={changeActiveComponent} activeStatus={activeStatus} menuHandler={menuHandler} />
                {/* <div className="homeBg" style={{ paddingTop: "51%" }}>
                    <img src='/assets/background-svg/curve1-1.svg' width={window.innerWidth} height={"auto"} alt="homeCurve" />
                </div>
                <div className="homeBg" style={{ paddingTop: "51%" }}>
                    <img src='/assets/background-svg/curve1-1.svg' width={window.innerWidth} height={"auto"} alt="homeCurve" />
                </div>
                <div className="careerScreen">
                    <div className="careerTop">
                        <center>
                            <div className="headingStyle"><strong>{window.innerWidth >= 768 ? t('desktop_career_header') : t('mobile_career_header')}</strong></div><br /><br /><br /><br />
                            <div className="subheadingStyle"><strong>{t('being_to_becoming…')}</strong></div><br /><br /><br />
                            <p className="careerPara">{t('career_content_abstract1')}<br />
                                {t('career_content_abstract2')}<br />
                                {t('career_content_abstract3')}<br />
                                {t('career_content_abstract4')}<br />
                                {t('career_content_abstract5')}<br />
                            </p>
                        </center>
                    </div>
                    <div className="careerMiddle">
                        <div className={window.innerWidth >= 768 ? "headingStyle5" : "headingStyle2"}><strong>{t('career_content_question1')}<br />{t('career_content_question2')}</strong> </div><br /><br />
                        <div className="middlesubHeading"><strong>{t('join_hrlytics_content')}</strong></div><br /><br />
                        <div className="cardsCareer"> */}
                {/* <Card.Group className="cardMove1" itemsPerRow={3}>
                                {cardDetails1.map((ele) => (
                                    <Card className="careersCard">
                                        <center>
                                            <h2>{ele.name}</h2>
                                            <p className="topPara">{ele.exp}</p>
                                        </center>
                                    </Card>
                                ))}
                            </Card.Group>
                            {window.innerWidth >= 768 ?
                                <Card.Group className="cardMove2">
                                    {cardDetails2.map((ele) => (
                                        <Card className="careersCard">
                                            <h2>{ele.name}</h2>
                                            <p className="topPara">{ele.exp}</p>
                                        </Card>
                                    ))}
                                </Card.Group>
                                :
                                <Card.Group className="cardMove1">
                                    {cardDetails2.map((ele) => (
                                        <Card className="careersCard">
                                            <center>
                                                <h2>{ele.name}</h2>
                                                <p className="topPara">{ele.exp}</p>
                                            </center>
                                        </Card>
                                    ))}
                                </Card.Group>} */}
                {/* <Card.Group className="cardMove1" itemsPerRow={3}>
                                    {cardData.map((ele)=>(
                                        <Card className="careersCard">
                                            <center>
                                                <h2>{ele.job_title}</h2>
                                                <p className="topPara">{ele.required_experience_from} - {ele.required_experience_to} {ele.duration_type}</p>
                                                <p className="topPara">{ele.job_description}</p>
                                            </center>
                                        </Card>
                                    ))}
                                </Card.Group>
                        </div>
                        <br /><br /><br />
                        <div className="allignLeft">
                            <h2 className="topsubHeading" >{t('career_contact_content1')}<a href="mailto:hrops@hrlytics.in">hrops@hrlytics.in</a> <br />{t('career_contact_content2')}<a href="tel:7338270262">+91-7338270262</a></h2>
                        </div>
                    </div>
                    <div className="careerBottom">
                        <center><div className="subheadingStyle3"><strong>{t('career_card_subheading')}</strong></div></center>
                        <div className="bottomCards">
                            <Grid divided='vertically' centered>
                                <Grid.Row>
                                    {cardDetails3.map((ele) => (
                                        <Grid.Column width={window.innerWidth >= 768 ? 8 : 16} className="careerLine">
                                            <Card fluid className="careersCard2">
                                                <div className="careercardContent">
                                                    <center><div className="subheadingStyle2"><strong>{ele.name}</strong></div></center><br />
                                                    <div className="cardPara"><strong>{ele.content}</strong></div>
                                                </div>
                                            </Card>
                                            <br /><br />
                                        </Grid.Column>
                                    ))}
                                </Grid.Row>
                            .div1 > div</Grid>
                            <div className="lastCard">
                                <Grid.Column className="careerLine" width={window.innerWidth >= 768 ? 8 : 16}>
                                    <Card fluid className={window.innerWidth >= 768 ?"careersCard3" : "careersCard2" }>
                                        <div className="careercardContent">
                                            <center><div className="subheadingStyle2"><strong>{t('learning')}</strong></div></center>
                                            <div className="cardPara"><strong>{t('final_card_content')}</strong></div>
                                        </div>
                                    </Card>
                                </Grid.Column>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="careers_div1">
                    <div className="heading"><h1>Welcome to <br />the HRLytics Team!</h1></div>
                    <div className="career_img1">
                        <Image src={require('../../Assets/Career_img1.png')} />
                    </div>
                    <CareersBlog />
                </div>
                <Positions />
            </>
        )
    }
}

export default withTranslation('translations')(Careers);
