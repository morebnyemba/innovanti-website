'use client'

import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

const RED = '#e01435'
const WHITE = '#ffffff'

// Brand gradient stops the completed phrase sweeps into (matches the hero gradient).
const STOPS: { p: number; c: [number, number, number] }[] = [
  { p: 0, c: [255, 127, 141] },   // #ff7f8d
  { p: 0.6, c: [200, 16, 46] },   // #C8102E
  { p: 1, c: [255, 154, 166] },   // #ff9aa6
]
function gradientAt(p: number): string {
  for (let i = 1; i < STOPS.length; i++) {
    if (p <= STOPS[i].p) {
      const a = STOPS[i - 1]
      const b = STOPS[i]
      const t = (p - a.p) / (b.p - a.p)
      const c = a.c.map((v, k) => Math.round(v + (b.c[k] - v) * t))
      return `rgb(${c[0]},${c[1]},${c[2]})`
    }
  }
  const last = STOPS[STOPS.length - 1].c
  return `rgb(${last[0]},${last[1]},${last[2]})`
}

const TYPE_MS = 70
const DELETE_MS = 36
const HOLD_MS = 1700
const BETWEEN_MS = 400
const SWEEP_STAGGER_MS = 26

export default function TypedHeadline({ phrases }: { phrases: string[] }) {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [sub, setSub] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduce) return
    const current = phrases[index] ?? ''

    let delay: number
    if (!deleting && sub === current.length) delay = HOLD_MS
    else if (deleting && sub === 0) delay = BETWEEN_MS
    else delay = deleting ? DELETE_MS : TYPE_MS

    const id = setTimeout(() => {
      if (!deleting && sub === current.length) {
        setDeleting(true)
      } else if (deleting && sub === 0) {
        setDeleting(false)
        setIndex((i) => (i + 1) % phrases.length)
      } else {
        setSub((s) => s + (deleting ? -1 : 1))
      }
    }, delay)

    return () => clearTimeout(id)
  }, [sub, deleting, index, phrases, reduce])

  const current = phrases[index] ?? ''
  const text = reduce ? (phrases[0] ?? '') : current.slice(0, sub)

  // Once fully typed (and while deleting) the phrase sweeps into the gradient.
  const filled = !reduce && (deleting || sub === current.length)
  const totalLetters = current.split('').filter((c) => c !== ' ').length

  let letter = -1

  return (
    <span aria-hidden>
      <span style={{ color: RED, marginRight: '0.28em' }}>&gt;</span>
      <span>
        {text.split('').map((ch, i) => {
          if (ch !== ' ') letter += 1
          if (ch === ' ') return <span key={i}> </span>

          const p = totalLetters > 1 ? letter / (totalLetters - 1) : 0
          const color = filled ? gradientAt(p) : letter % 2 === 0 ? RED : WHITE
          return (
            <span
              key={i}
              style={{ color, transition: 'color .3s ease', transitionDelay: filled ? `${letter * SWEEP_STAGGER_MS}ms` : '0ms' }}
            >
              {ch}
            </span>
          )
        })}
      </span>
      <span
        style={{
          display: 'inline-block', width: '0.06em', minWidth: 3, height: '0.9em',
          background: RED, marginLeft: '0.1em', borderRadius: 1, verticalAlign: '-0.06em',
          animation: reduce ? 'none' : 'caret-blink 1s step-end infinite',
        }}
      />
    </span>
  )
}
