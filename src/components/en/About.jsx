function About() {
    const stats = [
        { value: '1', label: 'Year Experience' },
        { value: '6+', label: 'Projects' },
        { value: '5', label: 'Years Education' },
        { value: 'B2', label: 'English Level' }
    ]

    return (
        <section className="about section" id="about">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">About Me</span>
                    <h2 className="section-title">
                        Passionate about <span className="gradient-text">Technology</span> and Innovation
                    </h2>
                </div>

                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I am a Technical Telecommunications Engineer graduated from the <strong>Polytechnic University of Madrid</strong>,
                            with solid training in communication systems, networks, and technological solution development.
                            My focus combines technical skills in <strong>telecommunications</strong>,
                            <strong>programming</strong>, and <strong>embedded systems</strong> with a mindset oriented
                            towards creative problem-solving.
                        </p>
                        <p>
                            I am passionate about <strong>low-level Artificial Intelligence</strong>: from training and developing
                            my own LLM models to implementing solutions that solve both technical and everyday
                            problems. I firmly believe in understanding how things work from their foundations.
                        </p>
                        <p>
                            I am looking for opportunities where I can combine my knowledge in <strong>telecommunications</strong>
                            with the development of <strong>innovative AI solutions</strong>, creating technology
                            that has a real impact on the world.
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
                                Daniel has demonstrated an exceptional level of professionalism, dedication, and competence.
                                His proactive approach, analytical mindset, and ability to independently solve complex
                                technical challenges make him an outstanding candidate.
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
                                    }}>Recommendation Letter</span>
                                </div>
                                <a
                                    href="/recommendation-letter-en.pdf"
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
                                    View Letter
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
