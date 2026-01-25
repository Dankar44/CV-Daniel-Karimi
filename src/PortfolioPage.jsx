import { useState, useEffect } from 'react'
import Portfolio from './components/Portfolio'
import PortfolioEN from './components/en/Portfolio'

function PortfolioPage({ lang = 'es' }) {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme) {
            return savedTheme
        }
        return 'dark'
    })

    useEffect(() => {
        window.scrollTo(0, 0)
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    return (
        <div className="app">
            {/* Background Effects */}
            <div className="bg-gradient-mesh"></div>
            <div className="noise-overlay"></div>

            {lang === 'en' ? <PortfolioEN /> : <Portfolio />}
        </div>
    )
}

export default PortfolioPage
