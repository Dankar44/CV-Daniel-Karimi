import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// Icons components
const Icons = {
    All: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
        </svg>
    ),
    Biotech: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
            <path d="M19.5 12c-2.483 0-4.5 2.015-4.5 4.5s2.017 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.017-4.5-4.5-4.5z" />
            <circle cx="10" cy="9" r="5" />
            <path d="M11 11.5L7.5 9" />
        </svg>
    ),
    Cyber: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
    ),
    Telecom: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
            <path d="M8.5 8.5a4 4 0 0 1 5 5" />
            <path d="M4.5 4.5a8 8 0 0 1 12 12" />
        </svg>
    ),
    AI: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
        </svg>
    ),
    Web: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
    ),
    App: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
            <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
    ),
    Folder: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        </svg>
    )
}

function Portfolio() {
    const [areaFilter, setAreaFilter] = useState('all')
    const [typeFilter, setTypeFilter] = useState('all')

    const projects = [
        {
            id: 'migracell',
            icon: <img src="/projects/migracell/icono.ico" alt="MigraCell Icon" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />,
            area: ['biotech', 'ai'],
            type: 'app',
            badge: 'Deep Learning + Bio',
            title: 'MigraCell Analyzer',
            subtitle: 'Plataforma de Microscopía Inteligente',
            description: 'Plataforma de Microscopía Inteligente para el Análisis Automatizado de Migración Celular mediante Deep Learning.',
            image: '/projects/migracell/images_html/imagen2.2.png',
            problem: 'En investigación biomédica, los ensayos de wound healing son críticos pero analizarlos manualmente implica 4-8 horas por experimento, subjetividad del investigador y baja reproducibilidad.',
            solution: 'Automatización total mediante Deep Learning. El sistema procesa experimentos completos en menos de 5 minutos utilizando modelos YOLOv8-seg personalizados para segmentación pixel-perfect, garantizando resultados 100% reproducibles y procesamiento batch desatendido.',
            features: [
                '< 5 minutos por experimento (automático)',
                'Segmentación pixel-perfect con YOLOv8-seg',
                'Resultados 100% reproducibles',
                'Procesamiento batch desatendido',
                'Generación de gráficas para publicación',
                'Pipeline completo desde ingesta hasta reporte'
            ],
            tech: ['Python', 'YOLOv8-seg', 'PyTorch', 'OpenCV', 'Tkinter', 'Pandas'],
            metrics: [
                { label: 'Tiempo Proc.', value: '<5 min' },
                { label: 'Precisión', value: 'High' },
                { label: 'Ahorro Tiempo', value: '98%' }
            ],
            github: 'https://github.com/Dankar44/MigraCell-Analyzer',
            demo: null,
            year: '2024',
            duration: 'En desarrollo',
            role: 'AI Engineer'
        },
        {
            id: 'cell-tracker',
            icon: <img src="/projects/cell-tracker/icono-celltracker.png" alt="CellTracker Icon" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />,
            area: ['biotech', 'ai'],
            type: 'app',
            badge: 'Visión Artificial',
            title: 'Cell Tracker',
            subtitle: 'Herramienta de Análisis Celular',
            description: 'Sistema de rastreo y análisis celular usando procesamiento de imágenes avanzado y machine learning.',
            image: '/projects/cell-tracker/imagen2.png',
            problem: 'El conteo y rastreo manual de células en videos de microscopía es tedioso, propenso a errores y crea cuellos de botella.',
            solution: 'Herramienta científica que automatiza el proceso con visión artificial. Implementa algoritmos Watershed y filtros de Kalman para predecir trayectorias.',
            features: [
                'Segmentación médica avanzada con Watershed',
                'Tracking multi-objeto con filtros Kalman',
                'Análisis estadístico de movilidad',
                'Procesamiento de vídeo en tiempo real',
                'Exportación a CSV/Excel',
                'Procesamiento por lotes'
            ],
            tech: ['Python', 'OpenCV', 'TensorFlow', 'NumPy', 'SciPy', 'Matplotlib', 'scikit-image'],
            metrics: [
                { label: 'Precisión', value: '96%' },
                { label: 'Velocidad', value: '30 FPS' },
                { label: 'Ahorro Tiempo', value: '85%' }
            ],
            github: null,
            demo: null,
            year: '2023',
            duration: '5 meses',
            role: 'ML Engineer'
        },
        {
            id: 'golden-pipeline',
            icon: <Icons.Cyber />,
            area: 'cyber',
            type: 'web',
            badge: 'DevSecOps',
            title: 'Golden Pipeline',
            subtitle: 'Demo de Seguridad como Código',
            description: 'Implementación de pipeline CI/CD seguro usando GitHub Actions que detecta y bloquea código vulnerable automáticamente antes de producción.',
            image: '/portfolio/golden-pipeline.png',
            images: [
                '/portfolio/screenshots/01_pipeline_failed_overview.png',
                '/portfolio/screenshots/02_gitleaks_secrets_detected.png',
                '/portfolio/screenshots/03_semgrep_vulnerabilities.png',
                '/portfolio/screenshots/04_security_summary.png',
                '/portfolio/screenshots/05_gitleaks_logs_detail.png',
                '/portfolio/screenshots/06_semgrep_logs_detail.png',
                '/portfolio/screenshots/07_pipeline_success_overview.png',
                '/portfolio/screenshots/08_all_jobs_passed.png'
            ],
            problem: 'Los equipos suelen subir código vulnerable porque los escaneos de seguridad no están integrados, son lentos o generan demasiados falsos positivos.',
            solution: 'Golden Pipeline demuestra un enfoque "shift-left" integrando Gitleaks y Semgrep directamente en GitHub Actions. El pipeline falla automáticamente al detectar secretos o vulnerabilidades críticas, impidiendo despliegues inseguros.',
            features: [
                'Detección de secretos con Gitleaks',
                'Análisis SAST con Semgrep',
                'Bloqueo automático de pipeline',
                'Reportes de seguridad detallados',
                'Flujo de remediación documentado',
                'Demo completa con vulnerabilidades intencionales'
            ],
            tech: ['GitHub Actions', 'Gitleaks', 'Semgrep', 'Python', 'CI/CD', 'SAST', 'DevSecOps', 'YAML'],
            metrics: [
                { label: 'Secretos', value: '6+' },
                { label: 'Tipos Vuln.', value: '4' },
                { label: 'Velocidad', value: '<2min' }
            ],
            github: 'https://github.com/guillermop2002/Golden-Pipeline',
            demo: null,
            year: '2025',
            duration: '1 semana',
            role: 'Security Engineer'
        },
        {
            id: 'ai-chatbot',
            icon: <Icons.AI />,
            area: 'ai',
            type: 'web',
            badge: 'AI + RAG',
            title: 'AI Chatbot Widget',
            subtitle: 'Asistente Serverless con RAG',
            description: 'Infraestructura serverless para crear chatbots RAG. Proporciona una URL y genera automáticamente un widget de chat entrenado.',
            image: '/portfolio/chatbot-widget.png',
            problem: 'Las empresas quieren chat con IA pero carecen de la experiencia en ML o infraestructura necesaria para implementarlo y mantenerlo.',
            solution: 'Solución totalmente serverless en Cloudflare Workers. Realiza crawling automático, genera embeddings y despliega un widget funcional sin servidores tradicionales, minimizando latencia y costes.',
            features: [
                'Crawling y scraping automático',
                'Generación de embeddings y búsqueda vectorial (RAG)',
                'Arquitectura 100% Serverless en el Edge',
                'Widget como Web Component universal',
                'Respuestas en streaming',
                'Marca personalizable'
            ],
            tech: ['Cloudflare Workers', 'React', 'Groq AI', 'KV Storage', 'RAG', 'Web Components', 'Vite'],
            metrics: [
                { label: 'Tiempo Resp.', value: '<500ms' },
                { label: 'Uptime', value: '99.9%' },
                { label: 'Coste/Mes', value: '$0*' }
            ],
            github: 'https://github.com/guillermop2002/chatbot',
            demo: 'https://chatbot-6h9.pages.dev',
            year: '2024',
            duration: '3 meses',
            role: 'Full-stack Developer'
        },
        {
            id: 'patch-boe',
            icon: <Icons.AI />,
            area: 'ai',
            type: 'web',
            badge: 'LegalTech',
            title: 'Patch-BOE',
            subtitle: 'Inteligencia Legislativa con IA',
            description: 'Plataforma que extrae cambios legislativos del BOE, genera resúmenes con IA y asigna puntuaciones de relevancia.',
            image: '/portfolio/patch-boe.png',
            problem: 'Los profesionales legales gastan horas leyendo el BOE para estar actualizados, entre mucho contenido irrelevante.',
            solution: 'Automatización del proceso. Diariamente descarga el BOE, procesa texto legal con LLMs y genera resúmenes ejecutivos. Un sistema de puntuación predice el impacto y filtra el ruido.',
            features: [
                'Pipeline ETL diario del BOE',
                'Resúmenes legales con GPT-4 y Groq',
                'Clasificación de relevancia normativa',
                'Interfaz optimizada para lectura',
                'Newsletter personalizada',
                'Búsqueda histórica'
            ],
            tech: ['Next.js', 'Python', 'OpenAI', 'Groq', 'Web Scraping', 'PostgreSQL', 'Redis', 'Docker'],
            metrics: [
                { label: 'Publicaciones', value: '200+/día' },
                { label: 'Procesamiento', value: '<30min' },
                { label: 'Precisión', value: '94%' }
            ],
            github: 'https://github.com/guillermop2002/Patch-Boe',
            demo: null,
            year: '2024',
            duration: '4 meses',
            role: 'Full-stack Developer'
        },
        {
            id: 'dreizeer',
            icon: <Icons.Telecom />,
            area: 'telecom',
            type: 'web',
            badge: 'SEO + GEO',
            title: 'Dreizeer',
            subtitle: 'Digitalización de Negocio Fitness',
            description: 'Transformación digital completa. Web con máxima optimización SEO/Local y sistema de gestión integrado.',
            image: '/portfolio/dreizeer.png',
            problem: 'Los negocios locales luchan por competir online sin conocimientos técnicos de SEO, usando plantillas genéricas que no convierten.',
            solution: 'Plataforma de captación de clientes. Estrategia agresiva de SEO Local y Técnico que posicionó el negocio en top 3 de Madrid en menos de 3 meses.',
            features: [
                'Puntuación Lighthouse 100/100',
                'Estrategia de keywords transaccionales',
                'Integración profunda con Google Maps',
                'Conversión de leads automatizada',
                'Diseño mobile-first',
                'Dashboard de analíticas'
            ],
            tech: ['Next.js', 'Vercel', 'SEO', 'Google Business', 'Google Analytics', 'Schema.org', 'Tailwind CSS'],
            metrics: [
                { label: 'Lighthouse', value: '100' },
                { label: 'Ranking', value: 'Top 3' },
                { label: 'Conversión', value: '+340%' }
            ],
            github: 'https://github.com/guillermop2002/Dreizeer',
            demo: 'https://www.dreizeer.es',
            year: '2024',
            duration: '2 meses',
            role: 'Full-stack Developer'
        },
        {
            id: 'benative',
            icon: <Icons.Telecom />,
            area: 'telecom',
            type: 'web',
            badge: 'En Desarrollo',
            title: 'BeNative',
            subtitle: 'Plataforma de Intercambio Cultural',
            description: 'App móvil que conecta viajeros con locales. Incluye sistema de matching, chat en tiempo real y verificación de identidad.',
            image: '/portfolio/nativeconnect.png',
            problem: 'Los viajeros buscan experiencias auténticas pero no tienen forma segura de conectar con locales dispuestos a compartir su cultura.',
            solution: 'Plataforma social enfocada en el intercambio genuino. Usa geolocalización y algoritmos de afinidad. Prioriza la seguridad con verificación de identidad.',
            features: [
                'Geolocalización en tiempo real con privacidad',
                'Mensajería encriptada E2E',
                'Algoritmo de matching por intereses',
                'Verificación de identidad (KYC ligero)',
                'Sistema de reputación y reseñas',
                'Traducción in-app'
            ],
            tech: ['React Native', 'Firebase', 'Node.js', 'Socket.io', 'PostgreSQL', 'AWS S3', 'Stripe'],
            metrics: [
                { label: 'Match Rate', value: '78%' },
                { label: 'Tiempo Resp.', value: '<2h' },
                { label: 'Seguridad', value: '4.9/5' }
            ],
            github: null,
            demo: null,
            year: '2025',
            duration: 'En curso',
            role: 'Mobile Developer'
        }
    ]

    const areas = [
        { id: 'all', label: 'Todos', icon: <Icons.All /> },
        { id: 'biotech', label: 'Biotecnología', icon: <Icons.Biotech /> },
        { id: 'cyber', label: 'Ciberseguridad', icon: <Icons.Cyber /> },
        { id: 'telecom', label: 'Telecomunicaciones', icon: <Icons.Telecom /> },
        { id: 'ai', label: 'Inteligencia Artificial', icon: <Icons.AI /> }
    ]

    const types = [
        { id: 'all', label: 'Todos', icon: <Icons.Folder /> },
        { id: 'web', label: 'Página Web', icon: <Icons.Web /> },
        { id: 'app', label: 'Aplicación', icon: <Icons.App /> }
    ]

    const filteredProjects = projects.filter(project => {
        const projectAreas = Array.isArray(project.area) ? project.area : [project.area]
        const areaMatch = areaFilter === 'all' || projectAreas.includes(areaFilter)
        const typeMatch = typeFilter === 'all' || project.type === typeFilter
        return areaMatch && typeMatch
    })

    return (
        <div className="portfolio-page">
            {/* Hero Section */}
            <section className="portfolio-hero">
                <div className="container">
                    <Link to="/" className="back-link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Volver al CV
                    </Link>

                    <div className="portfolio-hero-content">
                        <span className="section-label">Portfolio</span>
                        <h1 className="portfolio-title">
                            Mis <span className="gradient-text">Proyectos</span>
                        </h1>
                        <p className="portfolio-subtitle">
                            Una colección de proyectos que demuestran mi experiencia en desarrollo full-stack,
                            ingeniería de seguridad e integración de IA. Cada proyecto representa un problema
                            del mundo real resuelto con tecnologías modernas.
                        </p>
                    </div>

                    {/* Filters Container */}
                    <div className="portfolio-filters-container" style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', marginBottom: '40px' }}>

                        {/* Area Filter */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                            <span style={{ fontSize: '0.9em', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Área de Proyecto</span>
                            <div className="portfolio-filters">
                                {areas.map(cat => (
                                    <button
                                        key={cat.id}
                                        className={`filter-btn ${areaFilter === cat.id ? 'active' : ''}`}
                                        onClick={() => setAreaFilter(cat.id)}
                                    >
                                        <span className="filter-icon">{cat.icon}</span>
                                        {cat.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Type Filter */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                            <span style={{ fontSize: '0.9em', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Tipo de Plataforma</span>
                            <div className="portfolio-filters">
                                {types.map(cat => (
                                    <button
                                        key={cat.id}
                                        className={`filter-btn ${typeFilter === cat.id ? 'active' : ''}`}
                                        onClick={() => setTypeFilter(cat.id)}
                                    >
                                        <span className="filter-icon">{cat.icon}</span>
                                        {cat.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="portfolio-projects">
                <div className="container">
                    <div className="portfolio-grid">
                        {filteredProjects.map((project, index) => (
                            <a
                                key={project.id}
                                href={`/projects/${project.id}/${project.id}.html`}
                                className="portfolio-card glass-card"
                                style={{ animationDelay: `${index * 0.1}s`, textDecoration: 'none', color: 'inherit', display: 'block' }}
                            >
                                <div className="portfolio-card-image">
                                    <img
                                        src={project.image}
                                        alt={`${project.title} screenshot`}
                                        loading="lazy"
                                    />
                                    <div className="portfolio-card-overlay">
                                        <span className="view-project">Ver Caso de Estudio (HTML)</span>
                                    </div>
                                </div>

                                <div className="portfolio-card-content">
                                    <div className="portfolio-card-header">
                                        <span className="portfolio-card-icon">{project.icon}</span>
                                        <span className="portfolio-card-badge">{project.badge}</span>
                                    </div>

                                    <h3 className="portfolio-card-title">
                                        {project.title}
                                        {(project.title === 'CellTracker' || project.title === 'Cell Tracker') && (
                                            <span title="Proyecto Más Destacado" style={{ marginLeft: '8px', cursor: 'help', verticalAlign: 'middle', fontSize: '1.2em' }}>
                                                👑
                                            </span>
                                        )}
                                    </h3>
                                    <p className="portfolio-card-subtitle">{project.subtitle}</p>
                                    <p className="portfolio-card-description">{project.description}</p>

                                    <div className="portfolio-card-tech">
                                        {project.tech.slice(0, 4).map((tech, i) => (
                                            <span key={i} className="tag">{tech}</span>
                                        ))}
                                        {project.tech.length > 4 && (
                                            <span className="tag">+{project.tech.length - 4}</span>
                                        )}
                                    </div>

                                    <div className="portfolio-card-meta">
                                        <span className="meta-item">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                                <line x1="3" y1="10" x2="21" y2="10"></line>
                                            </svg>
                                            {project.year}
                                        </span>
                                        <span className="meta-item">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <polyline points="12 6 12 12 16 14"></polyline>
                                            </svg>
                                            {project.duration}
                                        </span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Portfolio
