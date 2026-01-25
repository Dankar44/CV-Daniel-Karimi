function About() {
    const stats = [
        { value: '6', label: 'Months Experience' },
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

                        {/* Recommendation Quote - Hidden structure preserved */}
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
