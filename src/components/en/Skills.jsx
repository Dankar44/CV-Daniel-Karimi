function Skills() {
    const skillCategories = [
        {
            icon: '📡',
            title: 'Telecommunications',
            skills: [
                'Digital Signal Processing (DSP)',
                'Radiocommunication Systems',
                'Antennas & RF Propagation',
                'TCP/IP Networks',
                'Microprocessors',
                'Analog/Digital Electronics',
                'Embedded Systems'
            ]
        },
        {
            icon: '🤖',
            title: 'AI & Computer Vision',
            skills: [
                'YOLO (v5/v8)',
                'PyTorch',
                'OpenCV',
                'Deep Learning',
                'Computer Vision',
                'TensorFlow',
                'Image Processing',
                'RAG'
            ]
        },
        {
            icon: '💻',
            title: 'Development & Languages',
            skills: [
                'Python',
                'JavaScript / TypeScript',
                'C',
                'React.js',
                'Next.js',
                'HTML5 / CSS3',
                'Node.js',
                'SQL'
            ]
        },
        {
            icon: '☁️',
            title: 'Cloud & DevOps',
            skills: [
                'Vercel',
                'Cloudflare Workers',
                'GitHub Actions',
                'CI/CD',
                'Docker',
                'Linux',
                'Git'
            ]
        },
        {
            icon: '📈',
            title: 'Data Science',
            skills: [
                'Pandas',
                'NumPy',
                'Data Curation',
                'Data Analysis',
                'Visualization',
                'Jupyter Notebooks'
            ]
        },
        {
            icon: '🛠️',
            title: 'Tools & Others',
            skills: [
                'Git / GitHub',
                'VS Code',
                'PostgreSQL',
                'REST AI',
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
