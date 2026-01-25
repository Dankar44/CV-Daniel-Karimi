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
            subtitle: 'Intelligent Microscopy Platform',
            description: 'Intelligent Microscopy Platform for Automated Cell Migration Analysis using Deep Learning.',
            image: '/projects/migracell/images_html/imagen2.2.png',
            problem: 'In biomedical research, wound healing assays are critical but analyzing them manually implies 4-8 hours per experiment, researcher subjectivity, and low reproducibility.',
            solution: 'Total automation via Deep Learning. The system processes full experiments in under 5 minutes using custom YOLOv8-seg models for pixel-perfect segmentation, ensuring 100% reproducible results and unattended batch processing.',
            features: [
                '< 5 minutes per experiment (automated)',
                'Pixel-perfect segmentation with YOLOv8-seg',
                '100% reproducible results',
                'Unattended batch processing',
                'Publication-ready chart generation',
                'Full pipeline from ingestion to reporting'
            ],
            tech: ['Python', 'YOLOv8-seg', 'PyTorch', 'OpenCV', 'Tkinter', 'Pandas'],
            metrics: [
                { label: 'Proc. Time', value: '<5 min' },
                { label: 'Accuracy', value: 'High' },
                { label: 'Time Saved', value: '98%' }
            ],
            github: 'https://github.com/Dankar44/MigraCell-Analyzer',
            demo: null,
            year: '2024',
            duration: 'In development',
            role: 'AI Engineer'
        },
        {
            id: 'golden-pipeline',
            icon: <Icons.Cyber />,
            area: 'cyber',
            type: 'web',
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
            icon: <Icons.AI />,
            area: 'ai',
            type: 'web',
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
            icon: <Icons.AI />,
            area: 'ai',
            type: 'web',
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
            icon: <Icons.Telecom />,
            area: 'telecom',
            type: 'web',
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
            icon: <Icons.Biotech />,
            area: ['biotech', 'ai'],
            type: 'app',
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
            id: 'benative',
            icon: <Icons.Telecom />,
            area: 'telecom',
            type: 'web',
            badge: 'In Development',
            title: 'BeNative',
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

    const areas = [
        { id: 'all', label: 'All Projects', icon: <Icons.All /> },
        { id: 'biotech', label: 'Biotechnology', icon: <Icons.Biotech /> },
        { id: 'cyber', label: 'Cybersecurity', icon: <Icons.Cyber /> },
        { id: 'telecom', label: 'Telecommunications', icon: <Icons.Telecom /> },
        { id: 'ai', label: 'Artificial Intelligence', icon: <Icons.AI /> }
    ]

    const types = [
        { id: 'all', label: 'All Types', icon: <Icons.Folder /> },
        { id: 'web', label: 'Web Page', icon: <Icons.Web /> },
        { id: 'app', label: 'Application', icon: <Icons.App /> }
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
                    <Link to="/english" className="back-link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Back to CV
                    </Link>

                    <div className="portfolio-hero-content">
                        <span className="section-label">Portfolio</span>
                        <h1 className="portfolio-title">
                            My <span className="gradient-text">Projects</span>
                        </h1>
                        <p className="portfolio-subtitle">
                            A collection of projects demonstrating my expertise in full-stack development,
                            security engineering, and AI integration. Each project represents a real-world
                            problem solved with modern technologies.
                        </p>
                    </div>

                    {/* Filters Container */}
                    <div className="portfolio-filters-container" style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', marginBottom: '40px' }}>

                        {/* Area Filter */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                            <span style={{ fontSize: '0.9em', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Project Area</span>
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
                            <span style={{ fontSize: '0.9em', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Platform Type</span>
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
                                        <span className="view-project">View Case Study (HTML)</span>
                                    </div>
                                </div>

                                <div className="portfolio-card-content">
                                    <div className="portfolio-card-header">
                                        <span className="portfolio-card-icon">{project.icon}</span>
                                        <span className="portfolio-card-badge">{project.badge}</span>
                                    </div>

                                    <h3 className="portfolio-card-title">
                                        {project.title}
                                        {(project.title === 'Cell Tracker' || project.title === 'CellTracker') && (
                                            <span title="Most Featured Project" style={{ marginLeft: '8px', cursor: 'help', verticalAlign: 'middle', fontSize: '1.2em' }}>
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
