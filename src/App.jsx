import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem('theme')
        if (saved) return saved
        return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
    })

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark')
    }

    return (
        <>
            {/* Background Effects */}
            <div className="bg-gradient-mesh"></div>
            <div className="noise-overlay"></div>

            {/* Navigation */}
            <Navbar theme={theme} toggleTheme={toggleTheme} />

            {/* Main Content */}
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

            {/* Footer */}
            <Footer />
        </>
    )
}

export default App
