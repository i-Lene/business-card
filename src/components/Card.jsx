import { CardImage } from "./CardImage";
import { IntroSection } from "./IntroSection";

function Card() {
    return (
        <div className="main-card">
            <CardImage />
            <IntroSection name="Marlene Sebastião Veiga" role="Web developer" website="https://github.com/i-Lene" websiteText="github.com/i-Lene" />
        </div>
    )
}

export { Card };