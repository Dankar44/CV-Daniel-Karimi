function Contact() {
    return (
        <section className="contact section" id="contacto">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Contacto</span>
                    <h2 className="section-title">
                        ¿Hablamos?
                    </h2>
                </div>

                <div className="contact-content">
                    <p className="contact-description">
                        Estoy buscando nuevas oportunidades en el ámbito de la ciberseguridad,
                        DevOps y desarrollo. Si tienes un proyecto interesante o una posición
                        que crees que encaja conmigo, ¡me encantaría saber de ti!
                    </p>

                    <div className="contact-links">
                        <a
                            href="mailto:daniel.karimi.alvarez@gmail.com"
                            className="contact-link glass-card"
                        >
                            <span className="contact-link-icon">📧</span>
                            <span className="contact-link-label">Email</span>
                            <span className="contact-link-value">daniel.karimi.alvarez<br />@gmail.com</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/daniel-karimi-alvarez/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-link glass-card"
                        >
                            <span className="contact-link-icon">💼</span>
                            <span className="contact-link-label">LinkedIn</span>
                            <span className="contact-link-value">Daniel Karimi</span>
                        </a>

                        <a
                            href="https://github.com/Dankar44"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-link glass-card"
                        >
                            <span className="contact-link-icon">🐙</span>
                            <span className="contact-link-label">GitHub</span>
                            <span className="contact-link-value">Dankar44</span>
                        </a>

                        <a
                            href="tel:+34654310492"
                            className="contact-link glass-card"
                        >
                            <span className="contact-link-icon">📱</span>
                            <span className="contact-link-label">Teléfono</span>
                            <span className="contact-link-value">+34 654 310 492</span>
                        </a>
                    </div>

                    <div className="download-buttons">
                        <a href="/CV-Daniel-Karimi.pdf" download className="btn btn-primary">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                            Descargar CV
                        </a>
                        {/* HIDDEN FOR NOW
                        <a href="/carta-recomendacion.pdf" download className="btn btn-secondary">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <polyline points="10 9 9 9 8 9"></polyline>
                            </svg>
                            Carta de Recomendación
                        </a>
                        */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
