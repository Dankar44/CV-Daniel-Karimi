function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container">
                <p className="footer-text">
                    © {currentYear} Daniel Karimi
                    <br />
                    <a href="https://github.com/Dankar44" target="_blank" rel="noopener noreferrer">
                        Ver código fuente
                    </a>
                </p>
            </div>
        </footer>
    )
}

export default Footer
