

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__content">
                <h4 className="role">Software Developer</h4>
                <h1 className="hero_title">
                    Talk is Cheap. Show me the code.
                </h1>
                <p className="hero_description">
                    I am a software developer with a passion for building business solutions.
                    I love to learn new technologies and I am always looking for new ways to improve my skills.
                </p>

                <div className="hero_buttons">
                    <a href="#contact" className="button">Let's Chat</a>
                </div>
            </div>
            <div className="hero__image">
                {/* images here */}
            </div>
            <div className="hero_experience">
                <h2>12 years Expericence</h2>
                <h2>123 Projects Completed</h2>
            </div>
        </section>
    )
}

export default Hero
