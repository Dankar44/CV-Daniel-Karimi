function Experience() {
    const experiences = [
        {
            date: 'Octubre 2025 - Enero 2026',
            role: 'Ingeniero de Inteligencia Artificial (Prácticas)',
            company: 'CSIC - Instituto de Tecnologías Físicas y de la Información (ITEFI)',
            location: 'Madrid, España',
            description: [
                'Desarrollo de sistemas de Visión Artificial para automatización del análisis biológico: generación y curación de datasets de alta calidad para entrenamiento de redes neuronales YOLOv8',
                'Implementación de pipelines de preprocesamiento de imágenes celulares: conversión de formatos, normalización y optimización del rango dinámico para clasificación automatizada',
                'Anotación semántica y generación de Ground Truth mediante LabelMe: definición de taxonomías, etiquetado masivo de células y exportación a formatos compatibles con Deep Learning',
                'Colaboración multidisciplinar con el grupo de investigación RESULT: traducción de requerimientos biológicos complejos a estructuras de datos interpretables por IA',
                'Configuración de entornos de desarrollo con Anaconda/Python y gestión de dependencias para frameworks de Machine Learning (PyTorch, OpenCV)',
                'Validación y optimización de modelos: análisis de métricas de rendimiento, refinamiento de datasets y mejora de la capacidad predictiva del sistema'
            ],
            skills: ['YOLOv8', 'PyTorch', 'OpenCV', 'Python', 'LabelMe', 'Deep Learning', 'Computer Vision', 'Data Curation']
        },
        {
            date: 'Septiembre 2020 - Julio 2025',
            role: 'Formación en Sistemas de Telecomunicación',
            company: 'Universidad Politécnica de Madrid (ETSIT-UPM)',
            location: 'Madrid, España',
            description: [
                'Especialización en Procesado Digital de la Señal: Análisis espectral, filtrado digital, modulaciones y demodulaciones, algoritmos DSP en tiempo real',
                'Sistemas de Radiocomunicación y RF: Diseño de antenas, propagación de ondas electromagnéticas, tecnología de alta frecuencia y sistemas de transmisión',
                'Electrónica de Comunicaciones: Diseño de circuitos analógicos/digitales, microprocesadores, sistemas embebidos y diseño microelectrónico',
                'Redes y Servicios de Telecomunicación: Arquitectura TCP/IP, protocolos de red, sistemas operativos y redes de ordenadores',
                'Programación y Desarrollo: Algoritmos, estructuras de datos, programación orientada a objetos (C, Python) y sistemas de información'
            ],
            skills: ['DSP', 'Antenas', 'RF', 'Microprocesadores', 'Redes TCP/IP', 'Electrónica', 'Python', 'C']
        }
    ]

    return (
        <section className="experience section" id="experiencia">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Experiencia</span>
                    <h2 className="section-title">
                        Mi <span className="gradient-text">Trayectoria</span> Profesional
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
