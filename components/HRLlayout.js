import React from "react";
import Home from "./Home/Home";
import Services from "./Services/Services";
import PlatformScreen from './PlatformScreen/PlatformScreen';
import ThoughtScreen from './Thoughts/ThoughtScreen';
import ContactUs from './ContactUs';
import Footer from '../Footer/Footer';
import Careers from "./Carrers/Careers";
import { Icon } from "semantic-ui-react";
import '../styles.css';
import BackToTop from "./BackToTop";
// import {  Route, Link } from "react-router-dom";
// import history from 'history';

class HRLlayout extends React.Component {
    constructor() {
        super();
        this.state = {
            activeComponent: 'Home',
            activeStatus: '',
            isMenuOpen: false
        }
    }

    changeActiveComponent = (comp) => {
        this.setState({
            activeComponent: comp,
            activeStatus: comp,
            isMenuOpen: false
        });
        window.scroll({ top: 0, behavior: 'smooth' });
    }

    menuHandler = (e) => {
        console.log('open');
        this.setState({ isMenuOpen: e });
    }

    // function = () => (
    //     axios.post(`${ROOT_URL}/cart`, props, config)
    //         .then(response => {
    //             dispatch({ type: types.AUTH_USER });
    //             localStorage.setItem('token', response.data.token);
    //             browserHistory.push('/cart');
    //         });
    // );

    render() {
        const { activeComponent, activeStatus, isMenuOpen } = this.state;
        const {url} = this.props;
        var renderElement;
        switch (activeComponent) {
            case 'Home':
                renderElement = (
                    <Home changeActiveComponent={this.changeActiveComponent} activeStatus={activeStatus} menuHandler={this.menuHandler} />
                );
                break;
            case 'Services':
                renderElement = (
                    <Services changeActiveComponent={this.changeActiveComponent} activeStatus={activeStatus} menuHandler={this.menuHandler} />
                );
                break;
            case 'Platform':
                renderElement = (
                    <PlatformScreen changeActiveComponent={this.changeActiveComponent} activeStatus={activeStatus} menuHandler={this.menuHandler} />
                );
                break;
            case 'Thoughts':
                renderElement = (
                    <ThoughtScreen changeActiveComponent={this.changeActiveComponent} activeStatus={activeStatus} menuHandler={this.menuHandler} />
                );
                break;
            case 'ContactUs':
                renderElement = (
                    <ContactUs changeActiveComponent={this.changeActiveComponent} activeStatus={activeStatus} menuHandler={this.menuHandler} url={url}/>
                );
                break;
            case 'Careers':
                renderElement = (
                    <Careers changeActiveComponent={this.changeActiveComponent} activeStatus={activeStatus} menuHandler={this.menuHandler} url={url}/>
                );
                break;
            default:
                renderElement = (
                    <Home changeActiveComponent={this.changeActiveComponent} activeStatus={activeStatus} menuHandler={this.menuHandler} />
                );
                break;
        }

        window.onpopstate = () => {
            console.log("v", window.location.hash);
            if (window.location.hash === '#home') this.changeActiveComponent('Home');
            if (window.location.hash === '#services') this.changeActiveComponent('Services');
            if (window.location.hash === '#platform') this.changeActiveComponent('Platform');
            if (window.location.hash === '#contact') this.changeActiveComponent('ContactUs');
            if (window.location.hash === '#careers') this.changeActiveComponent('Careers');
            if (window.location.hash === '#thoughts') this.changeActiveComponent('Thoughts');
        }

        window.onload = () => {
            console.log("reloaded");
            window.scroll({ top: 0, behavior: 'smooth' });
            window.location.hash = "#home";
        };
        return (
            <div className="hrlLayout">
                {renderElement}
                {activeComponent !== 'ContactUs' && <Footer changeActiveComponent={this.changeActiveComponent} />}
                {isMenuOpen &&
                    <div className="menudiv">
                        <div>
                            <img src='/assets/Vector.svg' alt="logo" className="logo" onClick={() => this.changeActiveComponent('Home')} />
                            <Icon name='window close outline' style={{ float: 'right', padding: '45px' }} onClick={() => { this.menuHandler(false) }} />
                        </div>
                        <p onClick={() => { this.changeActiveComponent('Home') }} className="headerLink">Home</p>
                        <p onClick={() => { this.changeActiveComponent('Services') }} className="headerLink">Services</p>
                        <p onClick={() => { this.changeActiveComponent('Platform') }} className="headerLink">Platform</p>
                        <p onClick={() => { this.changeActiveComponent('ContactUs') }} className="headerLink">Contact</p>
                        <p onClick={() => { this.changeActiveComponent('Careers') }} className="headerLink">Careers</p>
                        <p onClick={() => { this.changeActiveComponent('Thoughts') }} className="headerLink">Thoughts</p>
                    </div>
                }
                {/* <BackToTop /> */}
            </div>
        )
    }
}

export default HRLlayout;
