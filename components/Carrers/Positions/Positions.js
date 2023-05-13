import React, { useState } from "react";
import './Positions.css'
import { Image } from "semantic-ui-react";
import { position } from "./PositionJson";
import PositionModal from "../PositionModal/PositionModal";
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const Positions = () => {
    const [open, setOpen] = React.useState(false)
    const [img, setimg] = useState('')
    const [text, settext] = useState('')
    return (
        <div className="position">
            <h1>Positions Open<span>!</span></h1>
            <div className="position_hr"></div>
            <div className="grid">
                {position.map((obj) => {
                    return <Modal
                    className="careerModal"
                        closeIcon
                        open={open}
                        trigger={
                        <div>
                            <Image src={obj.image} onClick={() => {setimg(obj.image);settext(obj.text)}} />
                            <div className="position_txt"><p>{obj.text}</p></div>
                        </div>
                    }
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                    >
                        <Modal.Content>
                            <PositionModal img={img} text={text} setOpen={setOpen}/>
                        </Modal.Content>
                    </Modal>
                })}
            </div>
        </div>
    )
}

export default Positions