'use client'

import { useState, ReactNode } from 'react'

interface Props {
  baseStyle: React.CSSProperties
  hoverStyle: React.CSSProperties
  children: ReactNode
}

export default function HoverCard({ baseStyle, hoverStyle, children }: Props) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      style={{ ...baseStyle, ...(hovered ? hoverStyle : {}) }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </div>
  )
}
