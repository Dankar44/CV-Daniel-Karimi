import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Portfolio() {
    const [selectedProject, setSelectedProject] = useState(null)
    const [filter, setFilter] = useState('all')
    const [carouselIndex, setCarouselIndex] = useState(0)

    const projects = [
        {
            id: 'graphsec-iac',
            icon: '🛡️',
            category: 'security',
            badge: 'Thesis Project',
            title: 'GraphSec-IaC',
            subtitle: 'Infrastructure Security Visualizer',
            description: 'Infrastructure as Code security visualizer that combines Terraform dependency graphs with vulnerability analysis from industry-leading tools.',
            image: '/portfolio/graphsec-iac.png',
            problem: 'Modern cloud infrastructure defined by code (IaC) can be extremely complex, with hundreds of interconnected resources. When security tools detect vulnerabilities, it\'s difficult to understand the real impact without seeing the architectural context.',
            solution: 'GraphSec-IaC parses Terraform files, builds a comprehensive resource dependency graph, and overlays vulnerabilities detected by Checkov and Trivy. Security engineers can now visualize the "blast radius" of each vulnerability and prioritize fixes based on actual architecture, not just CVSS severity.',
            features: [
                'Custom HCL parsing engine that understands Terraform syntax',
                'Interactive graph visualization powered by React Flow',
                'SARIF finding correlation with infrastructure nodes',
                'Risk propagation algorithm that traces vulnerability impact through dependencies',
                'Filter and search capabilities for large infrastructures',
                'Export reports for security audits'
            ],
            tech: ['Python', 'Terraform', 'React', 'React Flow', 'Checkov', 'Trivy', 'SARIF', 'Docker'],
            metrics: [
                { label: 'Vulnerability Detection', value: '98%' },
                { label: 'Resources Parsed', value: '1000+' },
                { label: 'Integration Time', value: '<5min' }
            ],
            github: 'https://github.com/guillermop2002/GraphSec-IaC',
            demo: null,
            year: '2024',
            duration: '6 months',
            role: 'Full-stack Developer & Security Researcher'
        },
        {
            id: 'golden-pipeline',
            icon: '🔐',
            category: 'security',
            badge: 'DevSecOps',
            title: 'Golden Pipeline',
            subtitle: 'Security as Code Demo',
            description: 'Secure CI/CD pipeline implementation using GitHub Actions that automatically detects and blocks vulnerable code before it reaches production.',
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
            problem: 'Software teams often push vulnerable code to production because security scans are either not integrated into the development workflow, run too late in the process, or produce too many false positives that developers ignore.',
            solution: 'Golden Pipeline demonstrates a "shift-left" security approach by integrating Gitleaks for secret detection and Semgrep for SAST directly into GitHub Actions. The pipeline automatically fails when it detects hardcoded secrets, SQL injection vulnerabilities, insecure eval() usage, or disabled SSL verification—preventing vulnerable code from ever reaching production.',
            features: [
                'Gitleaks integration detecting 6+ types of hardcoded secrets',
                'Semgrep SAST analysis for SQL Injection and code vulnerabilities',
                'Automatic pipeline blocking on security issues',
                'Detailed security summary reports on each commit',
                'Documented vulnerability remediation workflow',
                'Full demonstration with intentional vulnerabilities and fixes'
            ],
            tech: ['GitHub Actions', 'Gitleaks', 'Semgrep', 'Python', 'CI/CD', 'SAST', 'DevSecOps', 'YAML'],
            metrics: [
                { label: 'Secrets Detected', value: '6+' },
                { label: 'Vuln Types', value: '4' },
                { label: 'Pipeline Speed', value: '<2min' }
            ],
            github: 'https://github.com/guillermop2002/Golden-Pipeline',
            demo: null,
            year: '2025',
            duration: '1 week',
            role: 'Security Engineer'
        },
        {
            id: 'ai-chatbot',
            icon: '🤖',
            category: 'ai',
            badge: 'AI + RAG',
            title: 'AI Chatbot Widget',
            subtitle: 'Serverless RAG-Powered Assistant',
            description: 'Turnkey serverless infrastructure to create RAG chatbots. Simply provide a URL and it automatically generates a fully trained chatbot widget.',
            image: '/portfolio/chatbot-widget.png',
            problem: 'Companies want to add AI-powered chat support to their websites, but building a custom solution requires significant ML expertise, infrastructure management, and ongoing maintenance costs.',
            solution: 'A completely serverless solution that runs on Cloudflare Workers edge network. The system automatically crawls the provided URL, generates vector embeddings, and deploys a functional chat widget—all without traditional servers, ensuring minimal latency and maximum scalability.',
            features: [
                'Automatic website crawling and intelligent scraping',
                'Vector embedding generation and semantic search (RAG)',
                '100% serverless Edge architecture on Cloudflare Workers',
                'Widget packaged as a universal Web Component',
                'Real-time streaming responses for better UX',
                'Customizable appearance and branding'
            ],
            tech: ['Cloudflare Workers', 'React', 'Groq AI', 'KV Storage', 'RAG', 'Web Components', 'Vite'],
            metrics: [
                { label: 'Response Time', value: '<500ms' },
                { label: 'Uptime', value: '99.9%' },
                { label: 'Cost/Month', value: '$0*' }
            ],
            github: 'https://github.com/guillermop2002/chatbot',
            demo: 'https://chatbot-6h9.pages.dev',
            year: '2024',
            duration: '3 months',
            role: 'Full-stack Developer'
        },
        {
            id: 'patch-boe',
            icon: '📜',
            category: 'ai',
            badge: 'LegalTech',
            title: 'Patch-BOE',
            subtitle: 'AI-Powered Legislative Intelligence',
            description: 'Platform that extracts legislative changes from the Spanish Official Gazette (BOE), generates AI summaries, and assigns relevance scores.',
            image: '/portfolio/patch-boe.png',
            problem: 'Legal professionals spend hours daily reading the Official State Gazette to stay updated on new regulations. Most content is irrelevant to their practice, but they can\'t risk missing important changes.',
            solution: 'Patch-BOE automates the entire process. Daily, the system downloads the BOE, processes complex legal text using Large Language Models, and generates digestible executive summaries. A scoring system predicts the national impact of each new regulation, allowing users to filter regulatory "noise".',
            features: [
                'Automated daily ETL pipeline from BOE',
                'Legal summarization via GPT-4 and Groq',
                'Normative relevance classification algorithm',
                'Reading interface optimized for legal professionals',
                'Email digest with personalized filters',
                'Historical search and trend analysis'
            ],
            tech: ['Next.js', 'Python', 'OpenAI', 'Groq', 'Web Scraping', 'PostgreSQL', 'Redis', 'Docker'],
            metrics: [
                { label: 'Daily Publications', value: '200+' },
                { label: 'Processing Time', value: '<30min' },
                { label: 'Accuracy', value: '94%' }
            ],
            github: 'https://github.com/guillermop2002/Patch-Boe',
            demo: null,
            year: '2024',
            duration: '4 months',
            role: 'Full-stack Developer & AI Engineer'
        },
        {
            id: 'dreizeer',
            icon: '💪',
            category: 'web',
            badge: 'SEO + GEO',
            title: 'Dreizeer',
            subtitle: 'Fitness Business Digitalization',
            description: 'Complete digital transformation of a fitness business. Website with maximum SEO/Local optimization and integrated management system.',
            image: '/portfolio/dreizeer.png',
            problem: 'Local fitness businesses struggle to compete online. They lack technical knowledge to implement proper SEO, and most web solutions are generic templates that don\'t convert visitors into clients.',
            solution: 'More than a corporate website, Dreizeer is a client acquisition platform. An aggressive Local SEO (Google Business Profile) and technical SEO (perfect Core Web Vitals) strategy was implemented, positioning the business in the top 3 local searches in Madrid in under 3 months.',
            features: [
                'Perfect Lighthouse Score: 100/100 in Performance & SEO',
                'Transactional keyword strategy targeting high-intent searches',
                'Deep Google Maps & Business Profile integration',
                'Automated lead conversion system with follow-up sequences',
                'Mobile-first responsive design',
                'Analytics dashboard for conversion tracking'
            ],
            tech: ['Next.js', 'Vercel', 'SEO', 'Google Business', 'Google Analytics', 'Schema.org', 'Tailwind CSS'],
            metrics: [
                { label: 'Lighthouse Score', value: '100/100' },
                { label: 'Local Rank', value: 'Top 3' },
                { label: 'Lead Conversion', value: '+340%' }
            ],
            github: 'https://github.com/guillermop2002/Dreizeer',
            demo: 'https://www.dreizeer.es',
            year: '2024',
            duration: '2 months',
            role: 'Full-stack Developer & SEO Specialist'
        },
        {
            id: 'cell-tracker',
            icon: '🔬',
            category: 'ml',
            badge: 'Computer Vision',
            title: 'Cell Tracker',
            subtitle: 'Scientific Cell Analysis Tool',
            description: 'Cell tracking and analysis system using advanced image processing and machine learning for biology laboratories.',
            image: '/portfolio/cell-tracker.png',
            problem: 'Biologists spend countless hours manually counting cells and tracking their movement in microscopy videos. This process is tedious, error-prone, and creates a bottleneck in research workflows.',
            solution: 'A scientific tool that uses advanced computer vision techniques to automate cell counting and movement tracking. Implements Watershed segmentation algorithms and Kalman filters to predict trajectories even when cells overlap.',
            features: [
                'Advanced medical image segmentation using Watershed',
                'Multi-object tracking with Kalman Filter predictions',
                'Statistical analysis of cell mobility and proliferation',
                'Real-time video processing capabilities',
                'Export data to CSV/Excel for further analysis',
                'Batch processing for multiple experiments'
            ],
            tech: ['Python', 'OpenCV', 'TensorFlow', 'NumPy', 'SciPy', 'Matplotlib', 'scikit-image'],
            metrics: [
                { label: 'Accuracy', value: '96%' },
                { label: 'Processing Speed', value: '30 FPS' },
                { label: 'Time Saved', value: '85%' }
            ],
            github: null,
            demo: null,
            year: '2023',
            duration: '5 months',
            role: 'ML Engineer'
        },
        {
            id: 'nativeconnect',
            icon: '🌍',
            category: 'mobile',
            badge: 'In Development',
            title: 'NativeConnect',
            subtitle: 'Cultural Exchange Platform',
            description: 'Mobile app connecting travelers with native locals. Features matching system, real-time chat, and identity verification.',
            image: '/portfolio/nativeconnect.png',
            problem: 'Travelers seeking authentic cultural experiences have no easy way to connect with locals willing to share their culture. Existing platforms are either too commercial or lack proper safety measures.',
            solution: 'A social platform focused on genuine cultural exchange. NativeConnect uses geolocation and affinity algorithms to connect travelers seeking authentic experiences with locals willing to share them. Security is a priority, with identity verification and community reputation systems.',
            features: [
                'Real-time geolocation with privacy controls',
                'End-to-End (E2E) encrypted messaging',
                'Matching algorithm based on interests and availability',
                'Light KYC identity verification system',
                'Review and reputation system',
                'In-app translation for 50+ languages'
            ],
            tech: ['React Native', 'Firebase', 'Node.js', 'Socket.io', 'PostgreSQL', 'AWS S3', 'Stripe'],
            metrics: [
                { label: 'Match Rate', value: '78%' },
                { label: 'Response Time', value: '<2h' },
                { label: 'Safety Score', value: '4.9/5' }
            ],
            github: null,
            demo: null,
            year: '2025',
            duration: 'Ongoing',
            role: 'Full-stack Mobile Developer'
        }
    ]

    const categories = [
        { id: 'all', label: 'All Projects', icon: '🎯' },
        { id: 'security', label: 'Security', icon: '🛡️' },
        { id: 'ai', label: 'AI & ML', icon: '🤖' },
        { id: 'web', label: 'Web', icon: '🌐' },
        { id: 'mobile', label: 'Mobile', icon: '📱' },
        { id: 'ml', label: 'Computer Vision', icon: '🔬' }
    ]

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter)

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden'
            setCarouselIndex(0)
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => { document.body.style.overflow = 'unset' }
    }, [selectedProject])

    const nextImage = () => {
        if (selectedProject?.images) {
            setCarouselIndex((prev) => (prev + 1) % selectedProject.images.length)
        }
    }

    const prevImage = () => {
        if (selectedProject?.images) {
            setCarouselIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length)
        }
    }

    return (
        <div className="portfolio-page">
            {/* Hero Section */}
            <section className="portfolio-hero">
                <div className="container">
                    <Link to="/english" className="back-link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Back to CV
                    </Link>

                    <div className="portfolio-hero-content">
                        <span className="section-label">Portfolio</span>
                        <h1 className="portfolio-title">
                            My <span className="gradient-text">Work</span>
                        </h1>
                        <p className="portfolio-subtitle">
                            A collection of projects showcasing my expertise in full-stack development,
                            security engineering, and AI integration. Each project represents a real-world
                            problem solved with modern technologies.
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div className="portfolio-filters">
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
                                onClick={() => setFilter(cat.id)}
                            >
                                <span className="filter-icon">{cat.icon}</span>
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="portfolio-projects">
                <div className="container">
                    <div className="portfolio-grid">
                        {filteredProjects.map((project, index) => (
                            <article
                                key={project.id}
                                className="portfolio-card glass-card"
                                onClick={() => setSelectedProject(project)}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="portfolio-card-image">
                                    <img
                                        src={project.image}
                                        alt={`${project.title} screenshot`}
                                        loading="lazy"
                                    />
                                    <div className="portfolio-card-overlay">
                                        <span className="view-project">View Case Study</span>
                                    </div>
                                </div>

                                <div className="portfolio-card-content">
                                    <div className="portfolio-card-header">
                                        <span className="portfolio-card-icon">{project.icon}</span>
                                        <span className="portfolio-card-badge">{project.badge}</span>
                                    </div>

                                    <h3 className="portfolio-card-title">{project.title}</h3>
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
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Modal */}
            {selectedProject && (
                <div className="portfolio-modal-overlay" onClick={() => setSelectedProject(null)}>
                    <div className="portfolio-modal glass-card" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={() => setSelectedProject(null)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 6L6 18M6 6l12 12"></path>
                            </svg>
                        </button>

                        <div className="portfolio-modal-content">
                            {/* Header */}
                            <div className="portfolio-modal-header">
                                <div className="portfolio-modal-title-group">
                                    <span className="portfolio-modal-icon">{selectedProject.icon}</span>
                                    <div>
                                        <h2>{selectedProject.title}</h2>
                                        <p className="portfolio-modal-subtitle">{selectedProject.subtitle}</p>
                                    </div>
                                </div>
                                <span className="portfolio-modal-badge">{selectedProject.badge}</span>
                            </div>

                            {/* Image / Carousel */}
                            <div className="portfolio-modal-image">
                                {selectedProject.images ? (
                                    <div className="image-carousel">
                                        <button className="carousel-btn carousel-prev" onClick={prevImage}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M15 18l-6-6 6-6" />
                                            </svg>
                                        </button>
                                        <img src={selectedProject.images[carouselIndex]} alt={`${selectedProject.title} - ${carouselIndex + 1}`} />
                                        <button className="carousel-btn carousel-next" onClick={nextImage}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M9 18l6-6-6-6" />
                                            </svg>
                                        </button>
                                        <div className="carousel-dots">
                                            {selectedProject.images.map((_, idx) => (
                                                <button
                                                    key={idx}
                                                    className={`carousel-dot ${idx === carouselIndex ? 'active' : ''}`}
                                                    onClick={() => setCarouselIndex(idx)}
                                                />
                                            ))}
                                        </div>
                                        <span className="carousel-counter">{carouselIndex + 1} / {selectedProject.images.length}</span>
                                    </div>
                                ) : (
                                    <img src={selectedProject.image} alt={selectedProject.title} />
                                )}
                            </div>

                            {/* Metrics */}
                            <div className="portfolio-modal-metrics">
                                {selectedProject.metrics.map((metric, i) => (
                                    <div key={i} className="metric-card glass-card">
                                        <span className="metric-value">{metric.value}</span>
                                        <span className="metric-label">{metric.label}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Project Info */}
                            <div className="portfolio-modal-info">
                                <div className="info-item">
                                    <span className="info-label">Year</span>
                                    <span className="info-value">{selectedProject.year}</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Duration</span>
                                    <span className="info-value">{selectedProject.duration}</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Role</span>
                                    <span className="info-value">{selectedProject.role}</span>
                                </div>
                            </div>

                            {/* Problem & Solution */}
                            <div className="portfolio-modal-section">
                                <h3>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="12" y1="8" x2="12" y2="12"></line>
                                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                    </svg>
                                    The Problem
                                </h3>
                                <p>{selectedProject.problem}</p>
                            </div>

                            <div className="portfolio-modal-section">
                                <h3>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                    </svg>
                                    The Solution
                                </h3>
                                <p>{selectedProject.solution}</p>
                            </div>

                            {/* Features */}
                            <div className="portfolio-modal-section">
                                <h3>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                    </svg>
                                    Key Features
                                </h3>
                                <ul className="feature-list">
                                    {selectedProject.features.map((feature, i) => (
                                        <li key={i}>
                                            <span className="feature-bullet">▹</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tech Stack */}
                            <div className="portfolio-modal-section">
                                <h3>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                                    </svg>
                                    Tech Stack
                                </h3>
                                <div className="tech-stack-grid">
                                    {selectedProject.tech.map((tech, i) => (
                                        <span key={i} className="tag tag-cyan">{tech}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="portfolio-modal-actions">
                                {selectedProject.github && (
                                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        View on GitHub
                                    </a>
                                )}
                                {selectedProject.demo && (
                                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Portfolio
