import React from 'react';
import { useEffect, useState } from 'react';
import './BackToTop.css';
import { Button,Popup } from 'semantic-ui-react';

function BackToTop(params) {
    const [backTOTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true);
            }
            else {
                setBackToTopButton(false);
            }
        })
    }, [])
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return <div>
        {backTOTopButton && ( <Popup
    trigger={<Button  className='moveToButton' size='big' onClick={() => scrollToTop()} circular icon='angle double up'  />}
    content="Move to Top"
    basic
    inverted
    position='left center'
  />)}
        
    </div>
    
}
export default BackToTop;