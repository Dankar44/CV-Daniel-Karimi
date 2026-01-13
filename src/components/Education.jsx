function Education() {
    const education = [
        {
            years: '2020 - 2025',
            degree: 'Grado en Ingeniería de la Ciberseguridad',
            school: 'Universidad Rey Juan Carlos',
            location: 'Madrid, España',
            details: 'Formación integral en seguridad informática, pentesting, criptografía, seguridad de redes, desarrollo seguro e inteligencia artificial aplicada a la ciberseguridad.'
        },
        {
            years: '2018 - 2020',
            degree: 'Bachillerato Tecnológico',
            school: 'IES de Excelencia Deportiva "Ortega y Gasset"',
            location: 'Madrid, España',
            details: 'Modalidad de Ciencias Tecnológicas. Compaginación de estudios con deporte de alto rendimiento (voleibol), desarrollando habilidades de gestión del tiempo y trabajo bajo presión.'
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
