import React from "react";
import { CardImage } from "./CardImage";
import { IntroSection } from "./IntroSection";
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Card() {

    function handleButtonGitClick() {
        window.open('https://github.com/i-Lene', '_blank');
    }
    function handleButtonLinkedinCLick() {
        window.open('https://www.linkedin.com/in/msebastiaoveiga/', '_blank');
    }

    return (
        <div className="main-card">
            <CardImage />
            <IntroSection name="Marlene Sebastião Veiga" role="Web developer" website="https://github.com/i-Lene" websiteText="github.com/i-Lene" />
            <Button
                title="Github"
                onClick={handleButtonGitClick}
                className="button-socials git"
            >
                <i class="fa-brands fa-github"></i>
                Github
            </Button>
            <Button
                title="Github"
                onClick={handleButtonLinkedinCLick}
                className="button-socials linkedin"

            >
                <i class="fa-brands fa-linkedin"></i>
                Linkedin
            </Button>
        </div>
    )
}

export { Card };