import React from "react";
import { Button, Form, Input, Image, Modal } from 'semantic-ui-react'
import './PositionModal.css'

const PositionModal = (props) => {
    const [open, setOpen] = React.useState(false)
    return (
        <div className="modal">
            <div className="modal_div">
            <div className="closeIcon_mob" onClick={()=>props.setOpen(false)}><p>X</p></div>
                <div className="modal_image"><Image src={props.img} /></div>
                <div className="modal_text"><p>{props.text}</p></div>
            </div>

            <Form className="form">
                <Form.Group widths='equal'>
                    <Form.Field>
                        <label>First Name</label>
                        <Input />
                    </Form.Field>

                    <Form.Field>
                        <label>Last Name</label>
                        <Input />
                    </Form.Field>
                </Form.Group>

                <Form.Field>
                    <label>E-mail Address</label>
                    <Input />
                </Form.Field>

                <Form.Field>
                    <label>Linkedin Profile URL</label>
                    <Input />
                </Form.Field>

                <Input type="checkbox" /> <span>I agree <b><u>Terms of Service</u></b> and <b><u>Privacy Policy</u></b></span>
                <Form.Field><Button>Apply</Button></Form.Field>

            </Form>
        </div>
    )
}

export default PositionModal;