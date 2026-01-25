function Certifications() {
    const certifications = [
        {
            icon: '🤖',
            name: 'Artificial Intelligence and Productivity',
            issuer: 'Google',
            description: 'Use of AI tools like Gemini to improve productivity, automate tasks, and solve problems efficiently. Application of AI in work and personal environments.',
            pdf: '/Google Inteligencia Artificial y productividad.pdf'
        },
        {
            icon: '🧠',
            name: 'Generative AI',
            issuer: 'MIT',
            description: 'Introductory course on implementing generative AI solutions, sentiment analysis, and practical applications of AI in work and personal life.',
            pdf: '/IA Generativa.pdf'
        },
        {
            icon: '📡',
            name: 'Internet of Things (IoT)',
            issuer: 'MIT',
            description: 'Exploration of the Internet of Things and its impact on sectors like connected homes and smart agricultural solutions. Professional innovation through IoT.',
            pdf: '/IoT.pdf'
        },
        {
            icon: '🔄',
            name: 'Digital Transformation',
            issuer: 'MIT',
            description: 'Analysis of challenges in technology implementation, strategic use, and effects on business and daily life. Comprehensive vision of digital transformation fundamentals.',
            pdf: '/Transformacion Digital.pdf'
        }
    ]

    return (
        <section className="certifications section" id="certifications">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Certifications</span>
                    <h2 className="section-title">
                        Professional <span className="gradient-text">Certifications</span>
                    </h2>
                </div>

                <div className="certifications-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: 'var(--space-6)'
                }}>
                    {certifications.map((cert, index) => (
                        <div key={index} className="certification-card glass-card" style={{
                            padding: 'var(--space-6)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 'var(--space-4)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
                                <span style={{ fontSize: '2.5rem' }}>{cert.icon}</span>
                                <div>
                                    <h3 style={{
                                        fontSize: '1.1rem',
                                        fontWeight: '600',
                                        color: 'var(--text-primary)',
                                        marginBottom: '4px'
                                    }}>{cert.name}</h3>
                                    <span style={{
                                        color: 'var(--accent-primary)',
                                        fontWeight: '500',
                                        fontSize: '0.9rem'
                                    }}>{cert.issuer}</span>
                                </div>
                            </div>
                            <p style={{
                                color: 'var(--text-secondary)',
                                fontSize: '0.9rem',
                                lineHeight: '1.6',
                                flex: '1'
                            }}>{cert.description}</p>
                            <a
                                href={cert.pdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    color: 'var(--accent-primary)',
                                    textDecoration: 'none',
                                    fontSize: '0.9rem',
                                    fontWeight: '500',
                                    marginTop: 'auto'
                                }}
                            >
                                📄 View Certificate
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Certifications
