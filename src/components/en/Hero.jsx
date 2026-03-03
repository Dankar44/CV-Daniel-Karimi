import MatrixBackground from '../MatrixBackground'

function Hero() {
    const keywords = [
        'Telecommunications',
        'Artificial Intelligence',
        'Computer Vision',
        'YOLO',
        'Web Development',
        'Python'
    ]

    return (
        <section className="hero section" id="home" style={{ position: 'relative', overflow: 'hidden' }}>
            <MatrixBackground />
            <div className="container hero-content" style={{ position: 'relative', zIndex: 10 }}>
                <div className="hero-text">
                    <div className="hero-subtitle">
                        <span className="dot"></span>
                        <span>Available for new opportunities</span>
                    </div>

                    <h1 className="hero-title">
                        Hi, I'm <span className="gradient-text">Daniel</span>
                        <br />
                        <span style={{ marginTop: '0.3em', display: 'inline-block' }}>Karimi Álvarez</span>
                    </h1>

                    <p className="hero-description">
                        Technical Telecommunications Engineer specializing in the development
                        of innovative technological solutions with Artificial Intelligence.
                    </p>

                    <div className="hero-keywords">
                        {keywords.map((keyword, index) => (
                            <span key={index} className={`tag ${index % 2 === 0 ? 'tag-accent' : 'tag-cyan'}`}>
                                {keyword}
                            </span>
                        ))}
                    </div>

                    <div className="hero-cta">
                        <a href="#contact" className="btn btn-primary">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            Contact Me
                        </a>
                        <a href="#projects" className="btn btn-secondary">
                            View Projects
                        </a>
                    </div>
                </div>

                <div className="hero-image-wrapper">
                    <div className="hero-image-container">
                        <div className="hero-image-glow"></div>
                        <div className="hero-image-ring"></div>
                        <img
                            src="/profile.jpg"
                            alt="Daniel Karimi - AI Engineer"
                            className="hero-image"
                        />
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="scroll-indicator-icon"></div>
                <span>Scroll</span>
            </div>
        </section>
    )
}

export default Hero
