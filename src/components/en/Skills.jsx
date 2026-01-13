function Skills() {
    const skillCategories = [
        {
            icon: '🛡️',
            title: 'Cybersecurity',
            skills: [
                'Pentesting',
                'Ethical Hacking',
                'Vulnerability Analysis',
                'OWASP Top 10',
                'Burp Suite',
                'Metasploit',
                'Nmap',
                'Wireshark',
                'SOC / SIEM',
                'Incident Response'
            ]
        },
        {
            icon: '📋',
            title: 'Standards & Compliance',
            skills: [
                'ISO 27001',
                'ISO 27002',
                'ENS',
                'CCN-STIC',
                'LUCIA (CCN-CERT)',
                'GDPR',
                'Security Auditing',
                'Risk Management'
            ]
        },
        {
            icon: '💻',
            title: 'Development & Languages',
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
            title: 'AI & Machine Learning',
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
            title: 'Tools & Others',
            skills: [
                'Git / GitHub',
                'VS Code',
                'Oracle Database',
                'PostgreSQL',
                'REST APIs',
                'Agile Methodologies',
                'Technical Documentation'
            ]
        }
    ]

    return (
        <section className="skills section" id="skills">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Skills</span>
                    <h2 className="section-title">
                        Tech <span className="gradient-text">Stack</span>
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
