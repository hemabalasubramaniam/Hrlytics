import React from "react";
import './Blogs.css';
import { Button, Card, Image, Modal, Form, Input, TextArea } from "semantic-ui-react";
import { blogs } from './BlogsJson.js';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Blogs = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: 'linear',
        arrows: true,
    };

    const [open, setOpen] = React.useState(false)
    return (
        <div className="blogsOuter">
            <div className="blogsdiv">
                <h1 className="blogshead">Blogs<span style={{ color: "#B3BB92" }}>.</span></h1>
                <div className="line-blogs"></div>
                <div className="copyrights">
                    <div className="copyrights-text">All Copyrights Reserved </div>
                    <div className="copyrights-line" ></div>
                </div>

                <div className="blogscontent">
                    <div className="blogslider">
                        <Slider {...settings}>
                        {
                            blogs.map((x) => {
                                return <div className="blogsinnerdiv">
                                    <Card className="blogscard">
                                        <Image src={x.image} />
                                            <Card.Content>
                                                <Card.Header style={{color : "#4F7C5B"}}>{x.coursename}</Card.Header>
                                                <Card.Meta>
                                                    <p style={{color : "#B3BB92", marginTop: "10px", fontSize: "1.2vw"}}>{x.duration}</p>
                                                </Card.Meta>
                                            </Card.Content>
                                        </Card>
                                    </div>
                            })
                        }
                        </Slider>
                    </div>
                    <Modal className="blogmodalopen"
                        closeIcon
                        open={open}
                        trigger={<Button className="addblogs-btn">Add Blog</Button>}
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                    >
                        <Modal.Content>
                            <Form className="blogform">
                                <div className="blog-modal">
                                    <div>
                                        <Form.Group widths={1} className="nameFeilds">
                                            <Form.Field
                                                id='form-input-control-first-name'
                                                control={Input}
                                                label='First name'
                                                className="nameInput"
                                            />
                                            <Form.Field
                                                id='form-input-control-last-name'
                                                control={Input}
                                                label='Last name'
                                                className="nameInput"
                                            />
                                        </Form.Group>
                                        <Form.Field
                                            id='form-input-control-first-name'
                                            control={Input}
                                            label='E-mail Address'
                                            className="emailFeild"
                                        />
                                        <Form.Field
                                            id='form-input-control-first-name'
                                            control={Input}
                                            label='Linkedin Profile URL'
                                            className="linkedinFeild"
                                        />
                                    </div>
                                    <div>
                                        <label className="thoughtsHrlytics">Place Your Thoughts with HRlytics</label>
                                        <TextArea
                                            id='form-input-control-first-name'
                                            control={Input}
                                            className="thoughtsTextarea"
                                        />
                                        <Button className="blogform-submit">Submit</Button>
                                    </div>
                                </div>
                            </Form>
                        </Modal.Content>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default Blogs;