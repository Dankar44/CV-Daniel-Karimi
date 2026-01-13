
function Education() {
    const education = [
        {
            years: '2020 - 2025',
            degree: 'BSc in Cybersecurity Engineering',
            school: 'Rey Juan Carlos University',
            location: 'Madrid, Spain',
            details: 'Comprehensive training in computer security, pentesting, cryptography, network security, secure development and AI applied to cybersecurity.'
        },
        {
            years: '2018 - 2020',
            degree: 'Technological Baccalaureate',
            school: 'IES de Excelencia Deportiva "Ortega y Gasset"',
            location: 'Madrid, Spain',
            details: 'Technological Sciences track. Combining studies with high-performance sports (volleyball), developing time management skills and working under pressure.'
        }
    ]

    return (
        <section className="education section" id="education">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Education</span>
                    <h2 className="section-title">
                        Academic <span className="gradient-text">Background</span>
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
