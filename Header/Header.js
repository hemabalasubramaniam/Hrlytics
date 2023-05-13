import React from "react";
// import '../styles.css';
import './Header.css';
import {
    Checkbox,
    Grid,
    Header,
    Icon,
    Image,
    Menu,
    Segment,
    Sidebar,
  } from 'semantic-ui-react'
import { withTranslation } from 'react-i18next';

class Headers extends React.Component {
    constructor(){
        super();
        this.state={
            visible:false
        }
    }

    handleChange=()=>{
        this.setState({visible:!this.state.visible})
    }
    render() {
        const { changeActiveComponent, activeStatus, menuHandler, t } = this.props;
        const {visible} =this.state
        console.log(visible, 'dff');
        
        return (
            <>
                <div className="header">
                    <Header floated='left' className="header_left">

                        <div className="homeLogo"><a href="#home"><img src={require('../Assets/Logo.png')} alt="logo" className="logo" onClick={() => changeActiveComponent('Home')} /></a></div>
                    </Header>
                    <Header floated='right' className="header_right">
                        <div className="headerLinksList">
                            <div>
                                <a className={activeStatus === 'Thoughts' ? "underSquare" : "headerLink"} href="#thoughts">Thoughts</a>
                            </div>
                            <div>
                                <a className={activeStatus === 'Platform' ? "underSquare" : "headerLink"} href="#platform">Platform</a>
                            </div>
                            <div>
                                <a className={activeStatus === 'Services' ? "underSquare" : "headerLink"} href="#services">Services</a>
                            </div>
                            <div>
                                <a className={activeStatus === 'Careers' ? "underSquare" : "headerLink"} href="#careers">{t('careers')}</a>
                            </div>

                        </div>
                        <hr className="hr" />
                        <div className="menuBar">
                            <Image className="mob_bar" src={visible ? require('../Assets/closeIcon.png') : require('../Assets/headerBar.png')} onClick={()=>this.handleChange()} />
                            <Sidebar
                                as={Menu}
                                animation='overlay'
                                icon='labeled'
                                direction='right'
                                vertical
                                visible={visible}
                                width='thin'
                            >
                                <div>
                                    <a className={activeStatus === 'Thoughts' ? "underSquare" : "headerLink"} href="#thoughts">Thoughts</a>
                                </div>
                                <div>
                                    <a className={activeStatus === 'Platform' ? "underSquare" : "headerLink"} href="#platform">Platform</a>
                                </div>
                                <div>
                                    <a className={activeStatus === 'Services' ? "underSquare" : "headerLink"} href="#services">Services</a>
                                </div>
                                <div>
                                    <a className={activeStatus === 'Careers' ? "underSquare" : "headerLink"} href="#careers">{t('careers')}</a>
                                </div>

                            </Sidebar>

                        </div>

                    </Header>
                    {/* <div className="menuButton">
                    <Icon name='sidebar' className="menuIcon" size="large" onClick={() => menuHandler(true)} />
                </div> */}

                </div>
            </>
        )
    }
}

export default withTranslation('translations')(Headers);