import React from "react";
import { withTranslation } from 'react-i18next';
import '../styles.css';
import './Footer.css';
import { Button, Grid, Icon, Image } from 'semantic-ui-react';

class Footer extends React.Component {
    render() {
        const { changeActiveComponent, t } = this.props;
        const addresses = t('footer_address', { returnObjects: true });
        return (
            <>
                <div className="footerBG">
                    <div className="rightContent">
                        <Grid >
                            <Grid.Column width={window.innerWidth >= 576 ? 8 : 16} >
                                <h3 className="fontSize24">{t('contact_us')}</h3>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><Icon name='call'></Icon></td>
                                            <td><a href="tel:+91 9620300616" className="contactColor">+91 9620300616</a></td>
                                        </tr>
                                        <tr>
                                            <td><Icon name='mail'></Icon></td>
                                            <td><a href="mailto:info@hrlytics.in" className="contactColor"> info@hrlytics.in </a></td>
                                        </tr>
                                        <tr>
                                            <td><Icon name='mail'></Icon></td>
                                            <td><a href="mailto:abhilasha.gaonkar@hrlytics.in" className="contactColor">abhilasha.gaonkar@hrlytics.in</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Grid.Column>
                            <Grid.Column width={window.innerWidth >= 576 ? 8 : 16}>
                                <h3 className="fontSize24">{t('visit_us')}</h3>
                                {addresses.map((ele) => <p className="contactColor">{ele}</p>)}
                            </Grid.Column>
                        </Grid>
                    </div>

                    <div className="footerBottom">
                        <div className="bottomDiv">
                            {window.innerWidth >= 576 ?
                                <div className="bottomContent">
                                    <a href="#services"><h4 onClick={() => changeActiveComponent('Services')} className="footerPointer">{t('services')}</h4></a>
                                    <a href="#platform"><h4 onClick={() => changeActiveComponent('Platform')} className="footerPointer">{t('partner_products')}</h4></a>
                                    <a href="#contact"><h4 onClick={() => changeActiveComponent('ContactUs')} className="footerPointer">{t('contact')}</h4></a>
                                    <a href="#careers"><h4 onClick={() => changeActiveComponent('Careers')} className="footerPointer">{t('careers')}</h4></a>
                                    <a href="#thoughts"><h4 onClick={() => changeActiveComponent('Thoughts')} className="footerPointer">{t('about_us')}</h4></a>
                                </div>
                                :
                                <></>
                            }
                            <div className="bottonIcons">
                                <Button circular size='big' inverted icon='facebook f' name='facebook' href='https://www.facebook.com/hrlytics.in/' target='_blank' />
                                <Button circular size='big' inverted icon='linkedin' name='linkedin' href='https://www.linkedin.com/company/hrlyticsin' target='_blank' />
                            </div>
                        </div>
                        <Image src='/assets/Vector.svg' id="imgLogo" className='logo' alt='logo' onClick={() => changeActiveComponent('Home')} />
                    </div>
                </div>
            </>
        )
    }
}

export default withTranslation('translations')(Footer);