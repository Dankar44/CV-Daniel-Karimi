function Certifications() {
    const certifications = [
        {
            icon: '🎓',
            name: 'C1 Advanced (CAE)',
            issuer: 'Cambridge University'
        },
        {
            icon: '🔒',
            name: 'OWASP Top 10',
            issuer: 'LinkedIn Learning'
        },
        {
            icon: '🐛',
            name: 'Burp Suite Training',
            issuer: 'PortSwigger Academy'
        },
        {
            icon: '☁️',
            name: 'Cloud Security',
            issuer: 'LinkedIn Learning'
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

                <div className="certifications-list">
                    {certifications.map((cert, index) => (
                        <div key={index} className="certification-badge glass-card">
                            <span className="certification-icon">{cert.icon}</span>
                            <div className="certification-info">
                                <span className="certification-name">{cert.name}</span>
                                <span className="certification-issuer">{cert.issuer}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Certifications
