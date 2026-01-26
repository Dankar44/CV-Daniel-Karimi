import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)

    const projects = [
        {
            icon: <img src="/projects/cell-tracker/icono-celltracker.png" alt="CellTracker" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '12px' }} />,
            type: 'App',
            badge: 'IA + Paper Científico',
            id: 'cell-tracker',
            title: 'CellTracker',
            description: 'Sistema de rastreo celular con IA para microscopía. Pendiente de publicación en revista científica de software.',
            details: 'Proyecto estrella de visión artificial para laboratorios de biología. Implementa modelos de detección basados en YOLOv8 con entrenamiento personalizado para la identificación y seguimiento automático de células en secuencias de microscopía. Incluye pipeline completo de procesamiento de imagen: preprocesamiento, augmentación de datos, tracking multi-objeto con filtros de Kalman, y exportación de métricas para análisis estadístico. Desarrollado en colaboración con investigadores, actualmente en proceso de publicación.',
            features: [
                'Detección de células con YOLOv8 entrenamiento custom',
                'Tracking multi-objeto con filtros de Kalman',
                'Pipeline de preprocesamiento y augmentación de datos',
                'Análisis cuantitativo de trayectorias y exportación de métricas',
                'Pendiente de publicación en revista científica'
            ],
            tech: ['Python', 'YOLOv8', 'PyTorch', 'OpenCV', 'NumPy', 'Pandas', 'Deep Learning'],
            github: 'https://github.com/Dankar44/CellTracker',
            demo: null
        },
        {
            icon: <img src="/projects/migracell/icono.ico" alt="MigraCell" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '12px' }} />,
            type: 'App',
            badge: 'Deep Learning + Bio',
            id: 'migracell',
            title: 'MigraCell Analyzer',
            description: 'Plataforma de Microscopía Inteligente para el Análisis Automatizado de Migración Celular mediante Deep Learning.',
            details: 'Automatización total de ensayos de wound healing mediante Deep Learning. Procesa experimentos completos en < 5 minutos (vs 4-8h manual) con segmentación pixel-perfect y resultados 100% reproducibles. Incluye pipeline completo: ingesta de datos, inferencia con YOLOv8-seg, post-procesamiento de máscaras, cálculo geométrico y generación de reportes automáticos locales.',
            features: [
                '< 5 minutos por experimento (automático)',
                'Segmentación pixel-perfect con YOLOv8-seg',
                'Resultados 100% reproducibles',
                'Procesamiento batch desatendido',
                'Generación de gráficas para publicación'
            ],
            tech: ['Python', 'YOLOv8-seg', 'PyTorch', 'OpenCV', 'Tkinter', 'Pandas'],
            github: 'https://github.com/Dankar44/MigraCell-Analyzer',
            demo: null
        },
        {
            icon: '🌊',
            type: 'Web',
            badge: 'Educación + Física',
            title: 'Simulador Efecto Doppler',
            description: 'Herramienta educativa interactiva desarrollada para el Departamento de Física de la Universidad de Vigo.',
            details: 'Plataforma web educativa que permite experimentar con el efecto Doppler en diferentes escenarios. Incluye múltiples simuladores visuales que facilitan la comprensión de conceptos de física ondulatoria: ondas sonoras, barrera del sonido, y variaciones de frecuencia. Desarrollado a petición del Departamento de Física de la Universidad de Vigo para uso docente.',
            features: [
                'Simulador interactivo del efecto Doppler',
                'Visualización de ondas y frecuencias en tiempo real',
                'Múltiples escenarios físicos configurables',
                'Interfaz intuitiva para estudiantes universitarios'
            ],
            tech: ['HTML5', 'CSS3', 'JavaScript', 'Canvas API'],
            github: 'https://github.com/Dankar44/Doppler',
            demo: 'https://doppler-six.vercel.app'
        },
        {
            icon: '🍽️',
            type: 'Web',
            badge: 'Web Comercial',
            title: 'Dulcinea - Restaurante',
            description: 'Sitio web comercial completamente funcional para un restaurante real en producción.',
            details: 'Desarrollo completo de la presencia digital de un restaurante real. Diseño responsive con catálogo de productos, galería de imágenes optimizadas, menús digitales y experiencia de usuario enfocada en conversión. Desplegado en producción con Vercel y optimizado para SEO local.',
            features: [
                'Diseño responsive y moderno',
                'Catálogo de productos con imágenes optimizadas',
                'Menús digitales interactivos',
                'SEO Local optimizado'
            ],
            tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Vercel'],
            github: 'https://github.com/Dankar44/Dulcinea',
            demo: 'https://dulcinea-rho.vercel.app'
        },

        {
            icon: '🤖',
            type: 'Web',
            badge: 'AI + RAG',
            id: 'ai-chatbot',
            title: 'AI Chatbot Widget',
            description: 'Infraestructura serverless para crear chatbots con RAG. Solo pasas la URL y genera automáticamente un chatbot entrenado.',
            details: 'Una solución "llave en mano" para integrar inteligencia artificial en cualquier sitio web. El sistema realiza un crawling automático del contenido de la URL proporcionada, genera embeddings vectoriales del texto y despliega un widget de chat totalmente funcional. Todo corre en el Edge (Cloudflare Workers) para garantizar mínima latencia y máxima escalabilidad sin servidores tradicionales.',
            features: [
                'Crawling y Scrapping automático de sitios web',
                'Generación de Embeddings y Búsqueda Vectorial (RAG)',
                'Arquitectura 100% Serverless en el Edge',
                'Widget empaquetado como Web Component universal'
            ],
            tech: ['Cloudflare Workers', 'React', 'Groq AI', 'KV Storage', 'RAG'],
            github: 'https://github.com/Dankar44/chatbot',
            demo: 'https://chatbot-6h9.pages.dev'
        },
        {
            icon: '💪',
            type: 'Web',
            badge: 'SEO + GEO',
            id: 'dreizeer',
            title: 'Dreizeer',
            description: 'Digitalización completa de negocio fitness. Sitio web con máxima optimización SEO/Local y sistema de gestión.',
            details: 'Más que una web corporativa, Dreizeer es una plataforma de captación de clientes. Se implementó una estrategia agresiva de SEO Local (Google Business Profile) y SEO técnico (Core Web Vitals perfectos) que posicionó el negocio en el top 3 de búsquedas locales en Madrid en menos de 3 meses. Incluye gestión de leads y sistema de reservas integrado.',
            features: [
                'Puntuación Lighthouse 100/100 en Performance y SEO',
                'Estrategia de palabras clave transaccionales',
                'Integración con Google Maps y Business Profile',
                'Sistema de conversión de leads automatizado'
            ],
            tech: ['Next.js', 'Vercel', 'SEO', 'Google Business', 'Analytics'],
            github: 'https://github.com/Dankar44/Dreizeer',
            demo: 'https://www.dreizeer.es'
        },
    ]

    // Disable scrolling when modal is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => { document.body.style.overflow = 'unset' }
    }, [selectedProject])

    return (
        <section className="projects section" id="proyectos">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Proyectos</span>
                    <h2 className="section-title">
                        <span className="gradient-text">Proyectos</span> Destacados
                    </h2>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <article
                            key={index}
                            className={`project-card glass-card ${project.id === 'cell-tracker' ? 'featured-project' : ''}`}
                            onClick={() => setSelectedProject(project)}
                            style={{ position: 'relative' }}
                        >
                            <span style={{
                                position: 'absolute',
                                top: '15px',
                                left: '15px',
                                background: 'rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(4px)',
                                padding: '4px 12px',
                                borderRadius: '20px',
                                fontSize: '0.75rem',
                                fontWeight: '600',
                                color: 'rgba(255, 255, 255, 0.9)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                zIndex: 10,
                                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                            }}>
                                {project.type}
                            </span>
                            <div className="project-header">
                                <div className="project-icon" style={
                                    (project.id === 'cell-tracker' || project.id === 'migracell')
                                        ? { background: 'transparent', border: 'none' }
                                        : {}
                                }>
                                    {project.icon}
                                </div>
                                <div className="project-links" onClick={(e) => e.stopPropagation()}>
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Ver código en GitHub">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Ver demo">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                        </a>
                                    )}
                                </div>
                            </div>

                            <span className="project-badge">{project.badge}</span>
                            <h3 className="project-title">
                                {project.title}
                            </h3>
                            <p className="project-description">{project.description}</p>

                            <div className="project-tech">
                                {project.tech.slice(0, 3).map((tech, i) => (
                                    <span key={i} className="tag">{tech}</span>
                                ))}
                                {project.tech.length > 3 && <span className="tag">+{project.tech.length - 3}</span>}
                            </div>

                            <div className="click-hint">
                                <span>Ver detalles</span>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Project Details Modal */}
                {selectedProject && (
                    <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
                        <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
                            <button className="close-btn" onClick={() => setSelectedProject(null)}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 6L6 18M6 6l12 12"></path>
                                </svg>
                            </button>

                            <div className="modal-header">
                                <div className="modal-header-icon">{selectedProject.icon}</div>
                                <div className="modal-title-group">
                                    <h3>{selectedProject.title}</h3>
                                    <span className="modal-subtitle-text">{selectedProject.badge}</span>
                                    {selectedProject.id && (
                                        <a
                                            href={`/projects/${selectedProject.id}/${selectedProject.id}.html`}
                                            className="portfolio-modal-btn"
                                            title="Ver Portfolio Completo"
                                        >
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                <polyline points="15 3 21 3 21 9"></polyline>
                                                <line x1="10" y1="14" x2="21" y2="3"></line>
                                            </svg>
                                            Portfolio
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="modal-body">
                                <div className="modal-section">
                                    <h4 className="modal-section-title">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
                                        Descripción Detallada
                                    </h4>
                                    <p className="modal-description">{selectedProject.details}</p>
                                </div>

                                <div className="modal-section">
                                    <h4 className="modal-section-title">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                        Características Clave
                                    </h4>
                                    <div className="feature-list">
                                        {selectedProject.features.map((feature, idx) => (
                                            <div key={idx} className="feature-item">
                                                <span className="feature-icon-bullet">▹</span>
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="modal-section">
                                    <h4 className="modal-section-title">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
                                        Stack Tecnológico
                                    </h4>
                                    <div className="tech-stack-modal">
                                        {selectedProject.tech.map((tech, i) => (
                                            <span key={i} className="tag tag-cyan">{tech}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="modal-section" style={{ display: 'flex', gap: 'var(--space-4)', marginTop: 'var(--space-8)' }}>
                                    {selectedProject.github && (
                                        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                            Ver en GitHub
                                        </a>
                                    )}
                                    {selectedProject.demo && (
                                        <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                            Ver Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div style={{ marginTop: '40px', textAlign: 'center' }}>
                    <Link to="/portfolio" className="btn btn-primary">
                        Ver más proyectos
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Projects
