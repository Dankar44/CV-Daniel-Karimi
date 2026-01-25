function Education() {
    const education = [
        {
            years: '2020 - 2025',
            degree: 'Grado en Ingeniería de Sistemas de Telecomunicación',
            school: 'Universidad Politécnica de Madrid (ETSIT-UPM)',
            location: 'Madrid, España',
            details: 'Formación integral en sistemas de comunicación, procesado digital de señal, electrónica, redes, programación y sistemas de radiocomunicación. Especialización en desarrollo de soluciones con Inteligencia Artificial y Computer Vision.'
        },
        {
            years: '2018 - 2020',
            degree: 'Bachillerato Tecnológico',
            school: 'IES Isabel la Católica',
            location: 'Madrid, España',
            details: 'Modalidad de Ciencias y Tecnología. Formación en matemáticas avanzadas, física, tecnología industrial y dibujo técnico. Base sólida en pensamiento lógico-matemático y resolución de problemas que facilitó el acceso a la ingeniería.'
        }
    ]

    return (
        <section className="education section" id="educacion">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Educación</span>
                    <h2 className="section-title">
                        Formación <span className="gradient-text">Académica</span>
                    </h2>
                </div>

                <div className="education-grid">
                    {education.map((edu, index) => (
                        <div key={index} className="education-card glass-card">
                            <span className="education-years">{edu.years}</span>
                            <h3 className="education-degree">{edu.degree}</h3>
                            <p className="education-school">{edu.school} • {edu.location}</p>
                            <p className="education-details">{edu.details}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Education
