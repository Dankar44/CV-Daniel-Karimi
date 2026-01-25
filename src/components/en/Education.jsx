function Education() {
    const education = [
        {
            years: '2020 - 2025',
            degree: 'Bachelor\'s Degree in Telecommunications Systems Engineering',
            school: 'Polytechnic University of Madrid (ETSIT-UPM)',
            location: 'Madrid, Spain',
            details: 'Comprehensive training in communication systems, digital signal processing, electronics, networks, programming, and radiocommunication systems. Specialization in developing solutions with Artificial Intelligence and Computer Vision.'
        },
        {
            years: '2018 - 2020',
            degree: 'Technological Baccalaureate',
            school: 'IES Isabel la Católica',
            location: 'Madrid, Spain',
            details: 'Science and Technology track. Training in advanced mathematics, physics, industrial technology, and technical drawing. Solid foundation in logical-mathematical thinking and problem-solving facilitating engineering access.'
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
