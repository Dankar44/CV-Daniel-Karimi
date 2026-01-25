function Skills() {
    const skillCategories = [
        {
            icon: '📡',
            title: 'Telecomunicaciones',
            skills: [
                'Procesado Digital de Señal (DSP)',
                'Sistemas de Radiocomunicación',
                'Antenas y Propagación RF',
                'Redes TCP/IP',
                'Microprocesadores',
                'Electrónica Analógica/Digital',
                'Sistemas Embebidos'
            ]
        },
        {
            icon: '🤖',
            title: 'IA & Computer Vision',
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
            title: 'Desarrollo & Lenguajes',
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
            title: 'Ciencia de Datos',
            skills: [
                'Pandas',
                'NumPy',
                'Data Curation',
                'Análisis de Datos',
                'Visualización',
                'Jupyter Notebooks'
            ]
        },
        {
            icon: '🛠️',
            title: 'Herramientas & Otros',
            skills: [
                'Git / GitHub',
                'VS Code',
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
