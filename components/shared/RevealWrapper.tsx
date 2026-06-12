'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface Props {
  children: ReactNode
  delay?: number
  className?: string
}

export default function RevealWrapper({ children, delay = 0, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px 0px' })

  return (
    <div ref={ref} className={`perspective-900 ${className}`}>
      <motion.div
        initial={{ opacity: 0, rotateX: -6, y: 26 }}
        animate={inView ? { opacity: 1, rotateX: 0, y: 0 } : {}}
        transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: 'top center' }}
      >
        {children}
      </motion.div>
    </div>
  )
}
