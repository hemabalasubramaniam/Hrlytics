// import React from "react";
// import '../../styles.css';
// import './Header.css';
// import { Icon } from 'semantic-ui-react';
// import { withTranslation } from 'react-i18next';

// class HomeHeader extends React.Component {
//     render() {
//         const { changeActiveComponent, activeStatus, menuHandler, t } = this.props;
//         return (
//             <div className="header">
//                 <a href="#home"><img src='/assets/Vector.svg' alt="logo" className="logo" onClick={() => changeActiveComponent('Home')} /></a>
//                 <div className="headerLinksList">
//                     <div>
//                         <a onClick={() => { changeActiveComponent('Services') }} className="headerLink" href="#services">{t('services')}</a>
//                         <div className={activeStatus === 'Services' ? "underSquare" : null}></div>
//                     </div>
//                     <div>
//                         <a onClick={() => { changeActiveComponent('Products') }} className="headerLink" href="#products">{t('partner_products')}</a>
//                         <div className={activeStatus === 'Products' ? "underSquare" : null}></div>
//                     </div>
//                     <div>
//                         <a onClick={() => { changeActiveComponent('ContactUs') }} className="headerLink" href="#contact">{t('contact')}</a>
//                         <div className={activeStatus === 'ContactUs' ? "underSquare" : null}></div>
//                     </div>
//                     <div>
//                         <a onClick={() => { changeActiveComponent('Careers') }} className="headerLink" href="#careers">{t('careers')}</a>
//                         <div className={activeStatus === 'Careers' ? "underSquare" : null}></div>
//                     </div>
//                     <div>
//                         <a onClick={() => { changeActiveComponent('AboutUs') }} className="headerLink" href="#aboutus">{t('about_us')}</a>
//                         <div className={activeStatus === 'AboutUs' ? "underSquare" : null}></div>
//                     </div>
//                 </div>
//                 <div className="menuButton">
//                     <Icon name='sidebar' className="menuIcon" size="large" onClick={() => menuHandler(true)} />
//                 </div>
//             </div>
//         )
//     }
// }

// export default withTranslation('translations')(HomeHeader);
