function Skills() {
    const skillCategories = [
        {
            icon: '🔐',
            title: 'Ciberseguridad',
            skills: [
                'Pentesting',
                'Hacking Ético',
                'Análisis de Vulnerabilidades',
                'OWASP Top 10',
                'Burp Suite',
                'Metasploit',
                'Nmap',
                'Wireshark',
                'SOC / SIEM',
                'Respuesta a Incidentes'
            ]
        },
        {
            icon: '📋',
            title: 'Normativas & Compliance',
            skills: [
                'ISO 27001',
                'ISO 27002',
                'ENS',
                'CCN-STIC',
                'LUCIA (CCN-CERT)',
                'RGPD/GDPR',
                'Auditoría de Seguridad',
                'Gestión de Riesgos'
            ]
        },
        {
            icon: '💻',
            title: 'Desarrollo & Lenguajes',
            skills: [
                'C',
                'Java',
                'Python',
                'JavaScript / TypeScript',
                'React',
                'Next.js',
                'Node.js',
                'SQL',
                'HTML5 / CSS3'
            ]
        },
        {
            icon: '☁️',
            title: 'Cloud & DevOps',
            skills: [
                'Terraform (IaC)',
                'Cloudflare Workers',
                'Vercel',
                'GitHub Actions',
                'CI/CD',
                'Docker',
                'Linux',
                'Checkov',
                'Trivy'
            ]
        },
        {
            icon: '🤖',
            title: 'IA & Machine Learning',
            skills: [
                'RAG (Retrieval-Augmented Generation)',
                'OpenAI / GPT',
                'Groq AI',
                'Computer Vision',
                'TensorFlow',
                'NLP',
                'Deep Learning'
            ]
        },
        {
            icon: '🛠️',
            title: 'Herramientas & Otros',
            skills: [
                'Git / GitHub',
                'VS Code',
                'Oracle Database',
                'PostgreSQL',
                'API REST',
                'Metodologías Ágiles',
                'Documentación Técnica'
            ]
        }
    ]

    return (
        <section className="skills section" id="habilidades">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Habilidades</span>
                    <h2 className="section-title">
                        Stack <span className="gradient-text">Tecnológico</span>
                    </h2>
                </div>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category glass-card">
                            <div className="skill-category-icon">{category.icon}</div>
                            <h3 className="skill-category-title">{category.title}</h3>
                            <div className="skill-list">
                                {category.skills.map((skill, i) => (
                                    <span key={i} className="tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
