function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container">
                <p className="footer-text">
                    © {currentYear} Guillermo Prieto Rodriguez
                    <br />
                    <a href="https://github.com/guillermop2002/CV-Guillermo-Prieto-Rodriguez" target="_blank" rel="noopener noreferrer">
                        Ver código fuente
                    </a>
                </p>
            </div>
        </footer>
    )
}

export default Footer
