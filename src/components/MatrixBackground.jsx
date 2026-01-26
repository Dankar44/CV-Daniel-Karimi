import { useEffect, useRef } from 'react'

const MatrixBackground = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        // Configuración inicial del canvas
        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        resizeCanvas()
        window.addEventListener('resize', resizeCanvas)

        // Caracteres para el efecto (Matrix digital rain + símbolos tecno)
        const chars = '0123456789ABCDEF$$##@&%π∑∫µ∆Ω≈∞'
        const fontSize = 14
        const columns = Math.ceil(window.innerWidth / fontSize)

        // Array para guardar la posición Y de cada columna
        const drops = new Array(columns).fill(1)

        const draw = () => {
            // Fondo semi-transparente para crear estela (trail effect)
            // Usamos un color muy oscuro con mucha transparencia
            ctx.fillStyle = 'rgba(15, 23, 42, 0.05)' // Varía alpha para trail más o menos largo
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // Color del texto y fuente
            // Color sutil cyan/azul para combinar con el tema, pero muy transparente
            ctx.fillStyle = 'rgba(56, 189, 248, 0.15)' // Cyan sutil (tailwind sky-400 approx) con baja opacidad
            ctx.font = `${fontSize}px monospace`

            for (let i = 0; i < drops.length; i++) {
                // Seleccionar caracter aleatorio
                const text = chars.charAt(Math.floor(Math.random() * chars.length))

                // Dibujar caracter
                ctx.fillText(text, i * fontSize, drops[i] * fontSize)

                // Reiniciar caída aleatoriamente o si sale de pantalla
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0
                }

                // Mover coordenada Y
                drops[i]++
            }
        }

        // Loop de animación
        const interval = setInterval(draw, 50) // ~20fps para efecto "computadora retro"

        return () => {
            clearInterval(interval)
            window.removeEventListener('resize', resizeCanvas)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none', // Click-through
                zIndex: 0 // Detrás del contenido pero sobre el fondo base
            }}
        />
    )
}

export default MatrixBackground
