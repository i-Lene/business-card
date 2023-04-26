import React from "react";
import { CardImage } from "./CardImage";
import { IntroSection } from "./IntroSection";
import { Button } from 'react-bootstrap';
import { Paragraph } from "./Paragraphs";
import { Footer } from "./Footer";

function Card() {
    const handleButtonGitClick = () => {
        window.open('https://github.com/i-Lene', '_blank');
    };

    const handleButtonLinkedinCLick = () => {
        window.open('https://www.linkedin.com/in/msebastiaoveiga/', '_blank');
    };

    return (
        <div className="main-card">
            <CardImage />
            <IntroSection
                name="Marlene Sebastião Veiga"
                role="Web developer"
                website="https://github.com/i-Lene"
                websiteText="github.com/i-Lene"
            />
            <Button
                title="Github"
                onClick={handleButtonGitClick}
                className="button-socials git"
            >
                <i className="fa-brands fa-github"></i>
                Github
            </Button>
            <Button
                title="LinkedIn"
                onClick={handleButtonLinkedinCLick}
                className="button-socials linkedin"
            >
                <i className="fa-brands fa-linkedin"></i>
                Linkedin
            </Button>
            <Paragraph />
            <Footer />
        </div>
    );
}

export { Card };

