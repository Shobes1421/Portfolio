import React from "react";
import { SocialIcon } from 'react-social-icons';
import "./styles.css"

const Contact = () => (
<div className='centerText'>
    <h1 className='contact'>CONTACT</h1>
    <p>
        Check me out on Linkedin, Github, or send me an email with the buttons below
    </p>
    <div className="row">
        < div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 socialIcon">
            <SocialIcon url="https://www.linkedin.com/feed/" target="_blank" />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 socialIcon">
            <SocialIcon url="https://github.com/Shobes1421" target="_blank" />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 socialIcon">
            <SocialIcon url="mailto:shobes1421@hotmail.com" target="_blank" />
        </div>
    </div>
</div>
);

export default Contact;
