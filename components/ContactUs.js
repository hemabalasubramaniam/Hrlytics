import React from "react";
import './ContactUs.css';
import Header from "../Header/Header";
import { Formik, Field, Form } from "formik";
import { Icon, Grid, Button } from 'semantic-ui-react';
import axios from 'axios';
import * as Yup from 'yup';
import { withTranslation } from 'react-i18next';

class ContactUs extends React.Component {
    render() {
        const { t, changeActiveComponent, activeStatus, menuHandler,url } = this.props;
        const SignupSchema = Yup.object().shape({
            name: Yup.string()
                .min(2, t('too_short'))
                .max(100, t('too_long'))
                .required(t('required')),
            email: Yup.string().email(t('invalid_email')).required(t('required')),
            message: Yup.string()
                .max(500, t('too_long'))
                .required(t('required')),
        });

        return (
            <>
                <div className="contactScreen">
                    <Header changeActiveComponent={changeActiveComponent} activeStatus={activeStatus} menuHandler={menuHandler} />
                    <div className="contactUsContent">
                        <div>
                            <br />
                            <center>
                                <h1 className="headingStyle">{t('contact_us')}</h1>
                            </center><br />
                            <Formik
                                initialValues={{ name: "", email: "", message: "" }}
                                validationSchema={SignupSchema}
                                onSubmit={async (values, actions) => {
                                    await new Promise((resolve) => setTimeout(resolve, 500));
                                    console.log("values =")
                                    console.log(values)
                                    axios
                                        .post(url+"enquiry/", values)
                                        .then((response) => {
                                            console.log("enquiry creation\n");
                                            console.log(response);
                                        })
                                        .catch((err) => {
                                            console.log(err.message);
                                        });
                                    alert('Thankyou for Reaching out to us. We will connect to you soon...!');
                                    actions.resetForm();
                                }}
                            >
                                {({ errors, touched }) => (
                                    <Grid columns={window.innerWidth >= 768 ? 2 : 1}>
                                        <Grid.Row className="contact_us_grid">
                                            <Grid.Column className="column1">
                                                <Form className="formLeft">
                                                    <strong>{t('leave_us_a_message')}</strong><br /><br />
                                                    <Field className="inputField" name="name" type="text" placeholder={t('name')} fluid />
                                                    <div className="errorFont">
                                                        {errors.name && touched.name ? (
                                                            <>{errors.name}</>
                                                        ) : null}
                                                    </div>
                                                    <Field className="inputField" name="email" type="email" placeholder={t('email_address')} fluid />
                                                    <div className="errorFont">
                                                        {errors.email && touched.email ? (
                                                            <>{errors.email}</>
                                                        ) : null}
                                                    </div>
                                                    <Field className="inputTextArea" component="textarea" name="message" type="text" rows={window.innerWidth >= 768 ? 4 : 10} placeholder={t('your_message')} fluid />
                                                    <div className="errorFont">
                                                        {errors.message && touched.message ? (
                                                            <>{errors.message}</>
                                                        ) : null}
                                                    </div>
                                                    <button className="submitButton" type="submit">{t('send_btn')}</button>
                                                </Form>
                                            </Grid.Column>
                                            <Grid.Column className="column2">
                                                {window.innerWidth >= 768 ? null : <iframe src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=HRLytics Private Ltd&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" height="250" style={{ border: 0, width: '85%' }} allowFullScreen="" loading="lazy" title="HRLytics" />}
                                                <div className={window.innerWidth >= 768 ? null : "mapContent"}><Icon name="map marker"></Icon>
                                                    <div className="address_contant">{t('contact_us_address')}</div>
                                                    <Icon name='call' ></Icon><a href="tel:+91 9620300616">+91 9620300616</a> <br /><br />
                                                    <Icon name="mail icon"></Icon><a href="mailto:info@hrlytics.in"> info@hrlytics.in </a><br /><br />
                                                    <Icon name="mail icon"></Icon><a href="mailto:abhilasha.gaonkar@hrlytics.in">abhilasha.gaonkar@hrlytics.in</a><br /><br />
                                                    {window.innerWidth >= 768 ? null :
                                                        <div className="contactIcons">
                                                            {/* <Grid>
                                                                <Grid.Row columns={2}>
                                                                    <Grid.Column width={2}> */}
                                                                        <Button circular icon='facebook f' href='https://www.facebook.com/hrlytics.in/' target='_blank' />
                                                                    {/* </Grid.Column> */}
                                                                    {/* <Grid.Column width={2}> */}
                                                                        <Button circular icon='linkedin' href='https://www.linkedin.com/company/hrlyticsin' target='_blank' />
                                                                    {/* </Grid.Column>
                                                                </Grid.Row>
                                                            </Grid> */}
                                                        </div>}
                                                </div>
                                                {window.innerWidth >= 768 ? < iframe src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=HRLytics Private Ltd&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" height="250" style={{ border: 0, width: '90%' }} allowFullScreen="" loading="lazy" title="HRLytics" /> : null}
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                )}
                            </Formik>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}

export default withTranslation('translations')(ContactUs);
