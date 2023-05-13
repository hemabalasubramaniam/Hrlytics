import React from "react";
import { withTranslation } from 'react-i18next';
import { Grid, Image, Card } from 'semantic-ui-react';
import './PlatformScreen.css';
import Features from "./Features/Features";
import Platformengage from "./PlatformEngage/Platformengage";
import AboutWork from "./AboutWork/AboutWork";
import Header from "../../Header/Header";


class Product extends React.Component {

    render() {
        const { changeActiveComponent, activeStatus, menuHandler, t } = this.props;
        const cardNames = t('cardNames', { returnObjects: true });
        return (
            <>
                {/* <div className="homeBg" style={{ paddingTop: "22%", opacity: 0.5 }}>
                    <img src='/assets/background-svg/curve1.svg' width={window.innerWidth} height={"auto"} alt="homeCurve" />
                </div>
                <div className="homeBg" style={{ paddingTop: "25%", opacity: 0.5 }}>
                    <img src='/assets/background-svg/curve1.svg' width={window.innerWidth} height={"auto"} alt="homeCurve" />
                </div>
                <div className="homeBg" style={{ paddingTop: "281%" }}>
                    <img src='/assets/background-svg/curve5.svg' width={window.innerWidth} height={"auto"} alt="homeCurve" />
                </div>
                <div className="homeBg" style={{ paddingTop: "284%" }}>
                    <img src='/assets/background-svg/curve4.svg' width={window.innerWidth} height={"auto"} alt="homeCurve" />
                </div>
                <div className="productPage">
                <p className="headingStyle"><strong>{t('products_and_services')}</strong></p>
                {window.innerWidth >= 576 ?
                    <div className="productCards">
                    <Grid>
                    <Grid.Row>
                    <Grid.Column width={2} />
                                    {cardNames.map((ele) => (
                                        <Grid.Column width={2}>
                                        <a href={`#${ele.name}`}>
                                        <Card className="cardProperty">
                                                    <center>
                                                    <Image src={`assets/icons/productsAndServices/${ele.src}.svg`} className="productLogo" />
                                                        <strong><p className="productName">{ele.name}</p></strong>
                                                    </center>
                                                    </Card>
                                            </a>
                                            </Grid.Column>
                                    ))}
                                    <Grid.Column width={2} />
                                    </Grid.Row>
                                    </Grid>
                        </div> : <></>}

                    {cardNames.map((ele) => (
                        <div id={ele.name}>
                            <div className="eachContent">
                            <h1 className="eachHeading1">{ele.name}</h1>
                            <Image src={`assets/icons/productsAndServices/${ele.src}.svg`} className="eachImage" />
                                <h2 className="eachHeading2">{ele.heading}</h2>
                                <p className="eachPara">{ele.content}</p>
                                </div>
                                </div>
                                ))}
                            </div> */}

                            <Header changeActiveComponent={changeActiveComponent} activeStatus={activeStatus} menuHandler={menuHandler} />
                <div className="platformscreen">
                    <div className="platformouter">
                        <div className="platformimage">
                            <div className="leftdiv">
                                <h1>Revolutionizing HR Tech for Enhanced Productivity:</h1>
                                <h2>The Power of HRLytics' Integrated Platform</h2>

                            </div>
                            <div className="rightdiv">
                                <Image src={require('../../Assets/images/platform-image.png')} />
                            </div>
                        </div>
                    </div>
                    <Features />
                    <Platformengage />
                    <AboutWork />
                </div>
            </>
        )
    }
}

export default withTranslation('translations')(Product);
