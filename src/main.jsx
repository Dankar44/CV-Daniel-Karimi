import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AppEN from './AppEN.jsx'
import PortfolioPage from './PortfolioPage.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/english" replace />} />
                <Route path="/spanish" element={<App />} />
                <Route path="/english" element={<AppEN />} />
                <Route path="/portfolio" element={<PortfolioPage lang="es" />} />
                <Route path="/portfolio-en" element={<PortfolioPage lang="en" />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
