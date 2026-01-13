function About() {
    const stats = [
        { value: '1+', label: 'Año Experiencia' },
        { value: '6+', label: 'Proyectos' },
        { value: '5', label: 'Años Formación' },
        { value: 'C1', label: 'Nivel Inglés' }
    ]

    return (
        <section className="about section" id="sobre-mi">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Sobre Mí</span>
                    <h2 className="section-title">
                        Apasionado por la <span className="gradient-text">Seguridad</span> y la Innovación
                    </h2>
                </div>

                <div className="about-content">
                    <div className="about-text">
                        <p>
                            Soy Ingeniero de Ciberseguridad graduado por la <strong>Universidad Rey Juan Carlos</strong>,
                            con una sólida formación en seguridad ofensiva, análisis de vulnerabilidades y desarrollo
                            de software seguro. Mi enfoque combina habilidades técnicas en <strong>pentesting</strong>,
                            <strong>hacking ético</strong> y <strong>DevSecOps</strong> con una mentalidad orientada
                            a la resolución creativa de problemas.
                        </p>
                        <p>
                            Durante mi experiencia profesional en el <strong>Centro de Servicios Avanzados (CSA)</strong>,
                            he trabajado con herramientas del ecosistema de ciberseguridad nacional, participando en
                            la gestión de incidentes y la implementación de controles de seguridad bajo el
                            <strong> Esquema Nacional de Seguridad (ENS)</strong> e <strong>ISO 27001</strong>.
                        </p>
                        <p>
                            Además de la seguridad, me apasiona desarrollar soluciones innovadoras que integran
                            <strong> Inteligencia Artificial</strong>, desde chatbots con RAG hasta herramientas
                            de análisis automatizado. Busco oportunidades donde pueda combinar mi conocimiento
                            en ciberseguridad con el desarrollo de software de alto impacto.
                        </p>
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
