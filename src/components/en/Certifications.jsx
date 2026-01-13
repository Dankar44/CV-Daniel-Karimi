
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
        <section className="certifications section" id="certifications">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Certifications</span>
                    <h2 className="section-title">
                        Professional <span className="gradient-text">Certifications</span>
                    </h2>
                </div>

                <div className="certifications-list">
                    {certifications.map((cert, index) => (
                        <div key={index} className="certification-badge glass-card" style={{
                            flexDirection: 'column',
                            textAlign: 'center',
                            padding: 'var(--space-6)'
                        }}>
                            <span className="certification-icon" style={{
                                display: 'block',
                                marginBottom: 'var(--space-3)'
                            }}>{cert.icon}</span>
                            <div className="certification-info" style={{ textAlign: 'center' }}>
                                <span className="certification-name" style={{ display: 'block' }}>{cert.name}</span>
                                <span className="certification-issuer" style={{ display: 'block', marginTop: '6px' }}>{cert.issuer}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Certifications
