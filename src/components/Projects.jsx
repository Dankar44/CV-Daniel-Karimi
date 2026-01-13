function Projects() {
    const projects = [
        {
            icon: '🛡️',
            badge: 'TFG',
            title: 'GraphSec-IaC',
            description: 'Visualizador de seguridad de infraestructura como código. Combina grafos de dependencias de Terraform con análisis de vulnerabilidades de Checkov y Trivy, permitiendo correlacionar hallazgos de seguridad con la estructura de la infraestructura mediante un motor de análisis propio.',
            tech: ['Python', 'Terraform', 'React', 'Checkov', 'Trivy', 'SARIF'],
            github: 'https://github.com/guillermop2002/GraphSec-IaC',
            demo: null
        },
        {
            icon: '🤖',
            badge: 'AI + RAG',
            title: 'AI Chatbot Widget',
            description: 'Infraestructura serverless para crear chatbots con RAG (Retrieval-Augmented Generation) que se pueden integrar en cualquier página web. Solo pasas la URL y genera automáticamente un chatbot entrenado con el contenido del sitio usando Groq y Cloudflare Workers.',
            tech: ['Cloudflare Workers', 'React', 'Groq AI', 'KV Storage', 'RAG'],
            github: 'https://github.com/guillermop2002/chatbot',
            demo: 'https://chatbot-6h9.pages.dev'
        },
        {
            icon: '📜',
            badge: 'LegalTech',
            title: 'Patch-BOE',
            description: 'Plataforma que extrae diariamente los cambios legislativos del BOE (Boletín Oficial del Estado), genera resúmenes automáticos con IA y asigna puntuaciones de relevancia nacional para priorizar la información más importante para profesionales del sector legal.',
            tech: ['Next.js', 'Python', 'OpenAI', 'Web Scraping', 'PostgreSQL'],
            github: 'https://github.com/guillermop2002/Patch-Boe',
            demo: null
        },
        {
            icon: '💪',
            badge: 'SEO + GEO',
            title: 'Dreizeer',
            description: 'Digitalización completa del negocio de un preparador físico profesional. Sitio web con máxima optimización SEO y GEO (Local SEO), sistema de reservas, gestión de clientes y estrategia de marketing digital integrada.',
            tech: ['Next.js', 'Vercel', 'SEO', 'Google Business', 'Analytics'],
            github: 'https://github.com/guillermop2002/Dreizeer',
            demo: 'https://www.dreizeer.es'
        },
        {
            icon: '🔬',
            badge: 'Computer Vision',
            title: 'Cell Tracker',
            description: 'Sistema de rastreo y análisis de células mediante procesamiento de imágenes. Utiliza técnicas de computer vision y machine learning para detectar, seguir y clasificar células en secuencias de imágenes de microscopía.',
            tech: ['Python', 'OpenCV', 'TensorFlow', 'NumPy', 'Image Processing'],
            github: null,
            demo: null
        },
        {
            icon: '🌍',
            badge: 'En Desarrollo',
            title: 'NativeConnect',
            description: 'Aplicación móvil para conectar viajeros con locales nativos, facilitando intercambios culturales auténticos y experiencias de inmersión lingüística. Incluye sistema de matching, chat en tiempo real y verificación de usuarios.',
            tech: ['React Native', 'Firebase', 'Node.js', 'Real-time Chat'],
            github: null,
            demo: null
        }
    ]

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
                        <article key={index} className="project-card glass-card">
                            <div className="project-header">
                                <div className="project-icon">{project.icon}</div>
                                <div className="project-links">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link"
                                            aria-label="Ver código en GitHub"
                                        >
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link"
                                            aria-label="Ver demo"
                                        >
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                <polyline points="15 3 21 3 21 9"></polyline>
                                                <line x1="10" y1="14" x2="21" y2="3"></line>
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>

                            <span className="project-badge">{project.badge}</span>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>

                            <div className="project-tech">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="tag">{tech}</span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
