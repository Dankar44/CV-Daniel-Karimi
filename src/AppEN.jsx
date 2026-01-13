import { useState, useEffect } from 'react'
import NavbarEN from './components/en/NavbarEN'
import Hero from './components/en/Hero'
import About from './components/en/About'
import Experience from './components/en/Experience'
import Projects from './components/en/Projects'
import Skills from './components/en/Skills'
import Education from './components/en/Education'
import Certifications from './components/en/Certifications'
import Contact from './components/en/Contact'
import Footer from './components/en/Footer'

function AppEN() {
    // Theme management - Default to 'dark' if nothing stored, ignoring system pref initially to force dark mode
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme) {
            return savedTheme
        }
        return 'dark'
    })

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    return (
        <div className="app">
            {/* Background Effects */}
            <div className="bg-gradient-mesh"></div>
            <div className="noise-overlay"></div>

            <NavbarEN theme={theme} toggleTheme={toggleTheme} />

            <main>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Skills />
                <Education />
                <Certifications />
                <Contact />
            </main>

            <Footer />
        </div>
    )
}

export default AppEN
