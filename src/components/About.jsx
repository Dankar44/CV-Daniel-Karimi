function About() {
    const stats = [
        { value: '1', label: 'Año Experiencia' },
        { value: '6+', label: 'Proyectos' },
        { value: '5', label: 'Años Formación' },
        { value: 'B2', label: 'Nivel Inglés' }
    ]

    return (
        <section className="about section" id="sobre-mi">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Sobre Mí</span>
                    <h2 className="section-title">
                        Apasionado por la <span className="gradient-text">Tecnología</span> y la Innovación
                    </h2>
                </div>

                <div className="about-content">
                    <div className="about-text">
                        <p>
                            Soy Ingeniero Técnico en Sistemas de Telecomunicaciones graduado por la <strong>Universidad Politécnica de Madrid</strong>,
                            con una sólida formación en sistemas de comunicaciones, redes y desarrollo de soluciones tecnológicas.
                            Mi enfoque combina habilidades técnicas en <strong>telecomunicaciones</strong>,
                            <strong>programación</strong> y <strong>sistemas embebidos</strong> con una mentalidad orientada
                            a la resolución creativa de problemas.
                        </p>
                        <p>
                            Me apasiona la <strong>Inteligencia Artificial a bajo nivel</strong>: desde el entrenamiento y desarrollo
                            de mis propios modelos LLM hasta la implementación de soluciones que resuelven tanto problemas
                            técnicos como cotidianos. Creo firmemente en entender cómo funcionan las cosas desde sus fundamentos.
                        </p>
                        <p>
                            Busco oportunidades donde pueda combinar mi conocimiento en <strong>telecomunicaciones</strong>
                            con el desarrollo de <strong>soluciones innovadoras con IA</strong>, creando tecnología
                            que tenga un impacto real en el mundo.
                        </p>

                        {/* Recommendation Quote */}
                        <div className="recommendation-quote glass-card" style={{
                            marginTop: 'var(--space-8)',
                            padding: 'var(--space-6)',
                            borderLeft: '3px solid var(--accent-1)',
                            position: 'relative'
                        }}>
                            <div style={{
                                fontSize: 'var(--font-size-3xl)',
                                color: 'var(--accent-1)',
                                position: 'absolute',
                                top: 'var(--space-2)',
                                left: 'var(--space-4)',
                                opacity: 0.5
                            }}>"</div>
                            <p style={{
                                fontStyle: 'italic',
                                color: 'var(--text-secondary)',
                                marginBottom: 'var(--space-4)',
                                paddingLeft: 'var(--space-4)'
                            }}>
                                Daniel ha demostrado una excelente capacidad de aprendizaje y adaptación,
                                destacando por su proactividad, responsabilidad y habilidades técnicas
                                en el ámbito tecnológico.
                            </p>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                flexWrap: 'wrap',
                                gap: 'var(--space-4)'
                            }}>
                                <div>
                                    <strong style={{ color: 'var(--text-primary)' }}>Centro de Servicios Avanzados (CSA)</strong>
                                    <span style={{
                                        display: 'block',
                                        fontSize: 'var(--font-size-sm)',
                                        color: 'var(--text-tertiary)'
                                    }}>Carta de Recomendación</span>
                                </div>
                                <a
                                    href="/carta-recomendacion.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-secondary"
                                    style={{ fontSize: 'var(--font-size-xs)' }}
                                >
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                    Ver Carta
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="about-stats">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-card glass-card">
                                <div className="stat-value">{stat.value}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About

