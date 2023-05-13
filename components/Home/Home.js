import React from "react";
import Header from "../../Header/Header";
import '../../styles.css';
import './Home.css';
import AboutPlatform from "./AboutPlatform/AboutPlatform";
import HomeServices from "./HomeServices/HomeServices";
// import data from '../data.json';
import Preface from "./Preface/Preface";
import Team from "./Team/Team";
import { withTranslation } from 'react-i18next';
import { Grid, Button, Icon, Card, Image } from "semantic-ui-react";

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            slideIndex: 3,
            dotsClass: ["dot", "dot", "dot active", "dot", "dot"]
        }
    }

    currentSlide(n) {
        this.setState({ slideIndex: n });
        this.showSlides(n);
        let dots = ["dot", "dot", "dot", "dot", "dot"]
        dots[n - 1] = "dot active";
        this.setState({ slideIndex: n, dotsClass: dots });
    }

    showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = ["dot", "dot", "dot", "dot", "dot"]
        if (n > slides.length) { this.setState({ slideIndex: 1 }) }
        if (n < 1) { this.setState({ slideIndex: slides.length }) }
        for (i = 0; i < slides.length; i++) {
            slides[i].classList.remove("choice1");
            slides[i].classList.remove("choice2");
            slides[i].classList.remove("choice3");
            slides[i].classList.remove("choice4");
            slides[i].classList.remove("choice5");
            slides[i].classList.add("mySlides");
            slides[i].classList.add("fade");
        }
        if (n === 1) {
            slides[0].classList.add("choice1");
            slides[1].classList.add("choice2");
            slides[2].classList.add("choice3");
            slides[3].classList.add("choice4");
            slides[4].classList.add("choice5");
        }
        else if (n === 2) {
            slides[0].classList.add("choice2");
            slides[1].classList.add("choice1");
            slides[2].classList.add("choice2");
            slides[3].classList.add("choice3");
            slides[4].classList.add("choice4");
        }
        else if (n === 3) {
            slides[0].classList.add("choice3");
            slides[1].classList.add("choice2");
            slides[2].classList.add("choice1");
            slides[3].classList.add("choice2");
            slides[4].classList.add("choice3");
        }
        else if (n === 4) {
            slides[0].classList.add("choice4");
            slides[1].classList.add("choice3");
            slides[2].classList.add("choice2");
            slides[3].classList.add("choice1");
            slides[4].classList.add("choice2");
        }
        else {
            slides[0].classList.add("choice5");
            slides[1].classList.add("choice4");
            slides[2].classList.add("choice3");
            slides[3].classList.add("choice2");
            slides[4].classList.add("choice1");
        }

        slides[this.state.slideIndex - 1].style.display = "block";
        dots[this.state.slideIndex - 1] = "dot active";
        this.setState({ dotsClass: dots });
    }

    render() {
        const { t, changeActiveComponent, activeStatus, menuHandler } = this.props;
        const microProductsDetails = t('microProductsDetails', { returnObjects: true });
        const productsAndServices = t('productsAndServices', { returnObjects: true });
        const hr_analytics_in_buttons = t('hr_analytics_in_buttons', { returnObjects: true });

        // const teamMembers = [
        //     {
        //         name: "ABHI",
        //         position: "CEO",
        //         src: "pic1"
        //     },
        //     {
        //         name: "KARTHIK",
        //         position: "CTO",
        //         src: "pic2"
        //     },
        //     {
        //         name: "KAYAL",
        //         position: "COO",
        //         src: "pic3"
        //     },
        // ];
        return (
            <>
                <Header changeActiveComponent={changeActiveComponent} activeStatus={activeStatus} menuHandler={menuHandler} />
                <div>
                    <div className="homeouter">
                        <div className="homeimage">
                            <div className="homeleft">
                                <p>Maxmizing <span style={{ color: "#4F7C5B" }}>Human Resource Potential.</span></p>
                                <Image src={require('../../Assets/images/home-pic.png')} />
                            </div>
                            <div className="homeright">
                                <Image className="homepic" src={require('../../Assets/images/home-pic1.png')} />
                            </div>
                        </div>
                    </div>
                    <Preface changeActiveComponent={changeActiveComponent} />
                    <AboutPlatform changeActiveComponent={changeActiveComponent}/>
                    <HomeServices changeActiveComponent={changeActiveComponent} />
                    <Team />
                </div>
                {/* <div className="homeScreen">
                    <div className="homeContent">
                        <div>
                            <h1 className="homePageHeading">HRlytics</h1>
                            <h1 className="homePageHeading2">
                                {t('max')}
                                <div style={{ background: "#E4DEAE", height: `${window.innerWidth >= 576 ? '7px' : '5px'}`, width: `${window.innerWidth >= 576 ? '100px' : '75px'}`, display: "inline-block", marginBottom: `${window.innerWidth >= 576 ? '15px' : '8px'}` }}></div>
                                {t('mizing_human')}<br />
                                {t('resource_potential')}
                            </h1><br />
                        </div>
                        {window.innerWidth >= 768 ? <img src="/assets/homeImage.svg" className="homeImg" alt="img" /> : <></>}
                    </div>
                </div>
                <section className="container" id="homeContainer">
                    <div className="homeDiv2">
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={window.innerWidth >= 576 ? 6 : 16}>
                                    <h1 className="heading1">{t('our_products_and_services')}</h1>
                                    <p className="homeContent1">
                                        {t('our_products_and_services_content')}
                                    </p>
                                </Grid.Column>
                                <Grid.Column width={window.innerWidth >= 576 ? 10 : 16}>
                                    <div className="homeColumn2">
                                        <h1 className="heading1">{t('hr_analytics_in')}</h1>
                                        {hr_analytics_in_buttons.map(
                                            (ele)=>(<Button className='homeButton'><Icon name='circle' />{ele}</Button>)
                                        )}
                                    </div>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <div className="blackButtonDiv"><a href="#services"><button className="blackButton" onClick={() => changeActiveComponent('Services')}>{t('learn_more')}</button></a></div>
                    </div>
                    <div className="homeDiv">
                        <h1 className="heading1">{t('micro_products')}</h1><br />
                        <Card.Group itemsPerRow={window.innerWidth >= 576 ? 4 : 1}>
                            {microProductsDetails.map((ele) => (
                                <Card className="microProductsCard">
                                    <Image className="microProductsIcon" src={`/assets/icons/microProducts/${ele.name}.png`} alt={ele.name} />
                                    <h2>{ele.name}</h2>
                                    <p>{ele.desc}</p>
                                </Card>
                            ))}
                        </Card.Group>
                    </div>
                    <div className="homeDivCards">
                        <center><h1 className="heading1">{t('hrlytics_the_necessity')}</h1></center><br /><br />
                        <div className="slideshow-container">
                            <div className="mySlides choice3 fade" onClick={() => this.currentSlide(1)}>
                                <center >
                                    <br />
                                    <img className="necessity_img" src="./assets/cards/person1.jpg" alt="Avatar" />
                                    <br /><br />
                                    <p className="cardContent">{t('home_card_1')}</p>
                                    <p className="cardHr">{t('person_1')}</p>
                                </center>
                            </div>
                            <div className="mySlides choice2 fade" onClick={() => this.currentSlide(2)}>
                                <center>
                                    <br />
                                    <img className="necessity_img" src="./assets/cards/person2.jpg" alt="Avatar" />
                                    <br /><br />
                                    <p className="cardContent">{t('home_card_2')}</p>
                                    <p className="cardHr">{t('person_2')}</p>
                                </center>
                            </div>
                            <div className="mySlides choice1 fade" onClick={() => this.currentSlide(3)}>
                                <center>
                                    <br />
                                    <img className="necessity_img" src="./assets/cards/person3.jpeg" alt="Avatar" />
                                    <br /><br />
                                    <p className="cardContent">{t('home_card_3')}</p>
                                    <p className="cardHr">{t('person_3')}</p>
                                </center>
                            </div>
                            <div className="mySlides choice2 fade" onClick={() => this.currentSlide(4)}>
                                <center>
                                    <br />
                                    <img className="necessity_img" src="./assets/cards/person4.jpg" alt="Avatar" />
                                    <br /><br />
                                    <p className="cardContent">{t('home_card_4')}</p>
                                    <p className="cardHr">{t('person_4')}</p>
                                </center>
                            </div>
                            <div className="mySlides choice3 fade" onClick={() => this.currentSlide(5)}>
                                <center>
                                    <br />
                                    <img className="necessity_img" src="./assets/cards/person5.jpg" alt="Avatar" />
                                    <br /><br />
                                    <p className="cardContent">{t('home_card_5')}</p>
                                    <p className="cardHr">{t('person_5')}</p>
                                </center>
                            </div>
                        </div>
                        <br />
                        <div className="dot-container" style={{ textAlign: "center" }}>
                            <span className={this.state.dotsClass[0]} onClick={() => this.currentSlide(1)}></span>
                            <span className={this.state.dotsClass[1]} onClick={() => this.currentSlide(2)}></span>
                            <span className={this.state.dotsClass[2]} onClick={() => this.currentSlide(3)}></span>
                            <span className={this.state.dotsClass[3]} onClick={() => this.currentSlide(4)}></span>
                            <span className={this.state.dotsClass[4]} onClick={() => this.currentSlide(5)}></span>
                        </div>
                    </div>
                    <div className="homeDiv">
                        <h1 className="heading1">{t('products_and_services')}</h1><br />
                        <Grid className="productsAndServices" columns={window.innerWidth >= 576 ? 3 : 2}>
                            {productsAndServices.map((ele) => (
                                <Grid.Column className="productsAndServicesCard">
                                    <Image src={`assets/icons/productsAndServices/${ele.src}.svg`} alt={ele.src} className='productsAndServicesIcon' />
                                    {window.innerWidth >= 576 ? <h2>{ele.name}</h2> : <h3>{ele.name}</h3>}
                                </Grid.Column>
                            ))}
                        </Grid>
                        <div className="blackButtonDiv"><a href="#products"><button className="blackButton" onClick={() => changeActiveComponent('Products')}>{t('learn_more')}</button></a></div>
                    </div>
                </section> */}
                {/* <div class="homeTeam">
                    <center><h1 className="heading1">The Team</h1><br /></center>
                    <div className="frontEnd">
                        <h2 className="heading2">Frontend</h2>
                        <Grid columns={window.innerWidth >= 576 ? 3 : 1}>
                            {teamMembers.map((ele) => (
                                <Grid.Column>
                                    <center>
                                        <Card className="teamCards" >
                                            <Image src={`./assets/cards/${ele.src}.png`} alt={ele.src} className="teamImages" />
                                        </Card>
                                        <h3>{ele.name}</h3>
                                        <h4>{ele.position}</h4>
                                    </center>
                                </Grid.Column>
                            ))}
                        </Grid>
                    </div>
                    <div className="backEnd">
                        <h2 className="heading2">Backend</h2>
                        <p className="homeContent1">Backed by senior HR experts comprising CHROs, Global TA Heads, Global L&D Heads, CXOs, AI and ML researchers, Data Engineering Scientists and Data Science Specialists</p>
                    </div>
                </div> */}
            </>
        )
    }
}

export default withTranslation('translations')(Home);
