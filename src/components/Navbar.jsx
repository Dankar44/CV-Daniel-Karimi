import { useState, useEffect } from 'react'

function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-content">
                <a href="#" className="navbar-logo">
                    G<span>.</span>Prieto
                </a>

                <ul className="navbar-links">
                    <li><a href="#sobre-mi">Sobre Mí</a></li>
                    <li><a href="#experiencia">Experiencia</a></li>
                    <li><a href="#proyectos">Proyectos</a></li>
                    <li><a href="#habilidades">Habilidades</a></li>
                    <li><a href="#educacion">Educación</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>

                <button className="mobile-menu-btn" aria-label="Menu">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
