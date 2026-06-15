'use client'

import { useEffect, useState } from 'react'

// Office hours: Monday–Friday, 08:00–17:00, computed in Harare time (CAT, UTC+2)
// regardless of the visitor's own timezone.
function computeStatus(): { open: boolean; label: string } {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Africa/Harare',
    weekday: 'short',
    hour: '2-digit',
    hour12: false,
  }).formatToParts(new Date())

  const weekday = parts.find((p) => p.type === 'weekday')?.value ?? ''
  const hour = Number(parts.find((p) => p.type === 'hour')?.value ?? '0')

  const isWeekday = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(weekday)
  const open = isWeekday && hour >= 8 && hour < 17

  let label: string
  if (open) label = 'Open now'
  else if (isWeekday && hour < 8) label = 'Opens at 08:00'
  else label = 'Closed'

  return { open, label }
}

export default function OfficeStatus() {
  const [status, setStatus] = useState<{ open: boolean; label: string } | null>(null)

  useEffect(() => {
    setStatus(computeStatus())
    const id = setInterval(() => setStatus(computeStatus()), 60_000)
    return () => clearInterval(id)
  }, [])

  // Render nothing until mounted to avoid hydration mismatch.
  if (!status) return null

  const color = status.open ? '#1f9d57' : '#8a93a8'
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 10, fontSize: 13, fontWeight: 600, color }}>
      <span style={{ position: 'relative', display: 'flex', width: 9, height: 9 }}>
        {status.open && (
          <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: color, opacity: 0.4, animation: 'status-ping 1.8s cubic-bezier(0,0,0.2,1) infinite' }} />
        )}
        <span style={{ position: 'relative', width: 9, height: 9, borderRadius: '50%', background: color }} />
      </span>
      {status.label}
    </span>
  )
}
