function Certifications() {
    const certifications = [
        {
            icon: '🤖',
            name: 'Inteligencia Artificial y Productividad',
            issuer: 'Google',
            description: 'Uso de herramientas de IA como Gemini para mejorar productividad, automatizar tareas y resolver problemas de manera eficiente. Aplicación de IA en entornos laborales y personales.',
            pdf: '/Google Inteligencia Artificial y productividad.pdf'
        },
        {
            icon: '🧠',
            name: 'IA Generativa',
            issuer: 'MIT',
            description: 'Curso introductorio sobre implementación de soluciones de IA generativa, análisis de sentimientos y aplicaciones prácticas de IA en el trabajo y la vida personal.',
            pdf: '/IA Generativa.pdf'
        },
        {
            icon: '📡',
            name: 'Internet of Things (IoT)',
            issuer: 'MIT',
            description: 'Exploración del Internet de las Cosas y su impacto en sectores como hogares conectados y soluciones agrícolas inteligentes. Innovación profesional mediante IoT.',
            pdf: '/IoT.pdf'
        },
        {
            icon: '🔄',
            name: 'Transformación Digital',
            issuer: 'MIT',
            description: 'Análisis de desafíos en implementación de tecnología, uso estratégico y efectos en negocios y vida cotidiana. Visión integral sobre fundamentos de transformación digital.',
            pdf: '/Transformacion Digital.pdf'
        }
    ]

    return (
        <section className="certifications section" id="certificaciones">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Certificaciones</span>
                    <h2 className="section-title">
                        Certificaciones <span className="gradient-text">Profesionales</span>
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
                                📄 Ver certificado
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Certifications
