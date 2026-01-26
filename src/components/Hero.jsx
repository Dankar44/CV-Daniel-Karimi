import MatrixBackground from './MatrixBackground'

function Hero() {
    const keywords = [
        'Telecomunicaciones',
        'Inteligencia Artificial',
        'Computer Vision',
        'YOLO',
        'Desarrollo Web',
        'Python'
    ]

    return (
        <section className="hero section" id="inicio" style={{ position: 'relative', overflow: 'hidden' }}>
            <MatrixBackground />
            <div className="container hero-content" style={{ position: 'relative', zIndex: 10 }}>
                <div className="hero-text">
                    <div className="hero-subtitle">
                        <span className="dot"></span>
                        <span>Disponible para nuevas oportunidades</span>
                    </div>

                    <h1 className="hero-title">
                        Hola, soy <span className="gradient-text">Daniel</span>
                        <br />
                        <span style={{ marginTop: '0.3em', display: 'inline-block' }}>Karimi Álvarez</span>
                    </h1>

                    <p className="hero-description">
                        Ingeniero Técnico en Sistemas de Telecomunicaciones especializado en el desarrollo
                        de soluciones tecnológicas innovadoras con Inteligencia Artificial.
                    </p>

                    <div className="hero-keywords">
                        {keywords.map((keyword, index) => (
                            <span key={index} className={`tag ${index % 2 === 0 ? 'tag-accent' : 'tag-cyan'}`}>
                                {keyword}
                            </span>
                        ))}
                    </div>

                    <div className="hero-cta">
                        <a href="#contacto" className="btn btn-primary">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            Contactar
                        </a>
                        <a href="#proyectos" className="btn btn-secondary">
                            Ver Proyectos
                        </a>
                    </div>
                </div>

                <div className="hero-image-wrapper">
                    <div className="hero-image-container">
                        <div className="hero-image-glow"></div>
                        <div className="hero-image-ring"></div>
                        <img
                            src="/profile.jpg"
                            alt="Daniel Karimi - Ingeniero de Ciberseguridad"
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
