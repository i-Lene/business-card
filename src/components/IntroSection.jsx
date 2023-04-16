function IntroSection(props) {
    return (
        <div className="about-me">
            <h1 className="name">{props.name}</h1>
            <h3 className="role">{props.role}</h3>
            <a href={props.website} className="website">{props.websiteText}</a>
        </div>
    )
}

export { IntroSection };