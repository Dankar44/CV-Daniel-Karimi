function Experience() {
    const experiences = [
        {
            date: 'October 2025 - January 2026',
            role: 'Artificial Intelligence Engineer (Internship)',
            company: 'CSIC - Institute of Physical and Information Technologies (ITEFI)',
            location: 'Madrid, Spain',
            description: [
                'Development of Computer Vision systems for biological analysis automation: generation and curation of high-quality datasets for training YOLOv8 neural networks',
                'Implementation of cell image preprocessing pipelines: format conversion, normalization, and dynamic range optimization for automated classification',
                'Semantic annotation and Ground Truth generation using LabelMe: taxonomy definition, massive cell labeling, and export to Deep Learning compatible formats',
                'Multidisciplinary collaboration with the RESULT research group: translation of complex biological requirements into AI-interpretable data structures',
                'Configuration of development environments with Anaconda/Python and dependency management for Machine Learning frameworks (PyTorch, OpenCV)',
                'Model validation and optimization: performance metrics analysis, dataset refinement, and improvement of system predictive capacity'
            ],
            skills: ['YOLOv8', 'PyTorch', 'OpenCV', 'Python', 'LabelMe', 'Deep Learning', 'Computer Vision', 'Data Curation']
        },
        {
            date: 'September 2020 - July 2025',
            role: 'Telecommunications Systems Training',
            company: 'Polytechnic University of Madrid (ETSIT-UPM)',
            location: 'Madrid, Spain',
            description: [
                'Specialization in Digital Signal Processing: Spectral analysis, digital filtering, modulations and demodulations, real-time DSP algorithms',
                'Radiocommunication Systems and RF: Antenna design, electromagnetic wave propagation, high-frequency technology, and transmission systems',
                'Communications Electronics: Analog/digital circuit design, microprocessors, embedded systems, and microelectronic design',
                'Telecommunication Networks and Services: TCP/IP architecture, network protocols, operating systems, and computer networks',
                'Programming and Development: Algorithms, data structures, object-oriented programming (C, Python), and information systems'
            ],
            skills: ['DSP', 'Antennas', 'RF', 'Microprocessors', 'TCP/IP Networks', 'Electronics', 'Python', 'C']
        }
    ]

    return (
        <section className="experience section" id="experience">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Experience</span>
                    <h2 className="section-title">
                        My Professional <span className="gradient-text">Journey</span>
                    </h2>
                </div>

                <div className="experience-timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience-item">
                            <div className="experience-dot"></div>
                            <div className="experience-card glass-card">
                                <span className="experience-date">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="16" y1="2" x2="16" y2="6"></line>
                                        <line x1="8" y1="2" x2="8" y2="6"></line>
                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                    </svg>
                                    {exp.date}
                                </span>
                                <h3 className="experience-role">{exp.role}</h3>
                                <p className="experience-company">
                                    {exp.company} • {exp.location}
                                </p>
                                <div className="experience-description">
                                    <ul>
                                        {exp.description.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="experience-skills">
                                    {exp.skills.map((skill, i) => (
                                        <span key={i} className="tag">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
