import { useState, useEffect } from 'react'
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion'

function MobileSkillsStack({ categories }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    // Current and Next cards
    const index = currentIndex % categories.length
    const nextIndex = (currentIndex + 1) % categories.length

    const currentCard = categories[index]
    const nextCard = categories[nextIndex]

    // Animation Variants
    const variants = {
        enter: {
            scale: 0.95,
            y: 10,
            x: 0,
            opacity: 1,
            zIndex: 1 // Start behind
        },
        center: {
            scale: 1,
            y: 0,
            x: 0,
            opacity: 1,
            zIndex: 2,
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.2 }
            }
        },
        exit: (direction) => ({
            x: direction > 0 ? 500 : -500,
            opacity: 0,
            scale: 1, // Keep scale while exiting
            rotate: direction > 0 ? 20 : -20,
            transition: { duration: 0.8 }
        })
    }

    // Idle Animation for the active card
    const [isIdle, setIsIdle] = useState(false)

    useEffect(() => {
        setIsIdle(false)
        const timer = setTimeout(() => setIsIdle(true), 4000)
        return () => clearTimeout(timer)
    }, [currentIndex])

    const idleAnimation = isIdle ? {
        x: [0, -10, 10, -10, 10, 0],
        rotate: [0, -2, 2, -2, 2, 0],
        transition: { duration: 0.6, ease: "easeInOut" }
    } : {}

    const handleDragEnd = (e, { offset, velocity }) => {
        const swipe = Math.abs(offset.x) * velocity.x

        if (swipe < -10000 || offset.x < -100) {
            // Swipe Left
            setDirection(-1)
            setCurrentIndex(prev => prev + 1)
        } else if (swipe > 10000 || offset.x > 100) {
            // Swipe Right
            setDirection(1)
            setCurrentIndex(prev => prev + 1)
        }
    }

    return (
        <div className="mobile-skills-stack" style={{
            position: 'relative',
            height: '400px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden', // Contain swipe exits
            perspective: 1000
        }}>
            {/* Background Card (The one waiting) */}
            <div className="skill-category glass-card stack-card-back" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1,
                transform: 'scale(0.95) translateY(10px)',
                opacity: 0.9,
                transition: 'all 0.3s ease'
            }}>
                <div className="skill-category-icon">{nextCard.icon}</div>
                <h3 className="skill-category-title">{nextCard.title}</h3>
                <div className="skill-list" style={{ opacity: 0.7 }}>
                    {nextCard.skills.map((skill, i) => (
                        <span key={i} className="tag">{skill}</span>
                    ))}
                </div>
            </div>

            {/* Foreground Card (Animated) */}
            <AnimatePresence custom={direction} mode="popLayout">
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate={isIdle ? idleAnimation : "center"}
                    exit="exit"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.7}
                    onDragEnd={handleDragEnd}
                    className="skill-category glass-card stack-card-front"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        cursor: 'grab',
                        background: 'var(--surface)',
                        boxShadow: '0 10px 30px -10px rgba(0,0,0,0.3)'
                    }}
                    whileTap={{ cursor: 'grabbing' }}
                >
                    <div className="skill-category-icon">{currentCard.icon}</div>
                    <h3 className="skill-category-title">{currentCard.title}</h3>
                    <div className="skill-list" style={{ pointerEvents: 'none' }}>
                        {currentCard.skills.map((skill, i) => (
                            <span key={i} className="tag">{skill}</span>
                        ))}
                    </div>

                    <div style={{
                        position: 'absolute',
                        bottom: '15px',
                        left: '0',
                        width: '100%',
                        textAlign: 'center',
                        fontSize: '0.75rem',
                        color: 'var(--text-tertiary)',
                        pointerEvents: 'none',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        opacity: 0.7
                    }}>
                        ↔ Deslizar
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default MobileSkillsStack
