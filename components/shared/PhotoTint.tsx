// Cohesive brand wash for photographs that would otherwise read as plain stock.
// Parent container must be position:relative and overflow:hidden.
export default function PhotoTint() {
  return (
    <span
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        background:
          'linear-gradient(150deg, rgba(10,19,36,0.34) 0%, rgba(10,19,36,0.05) 55%, rgba(200,16,46,0.12) 100%)',
        mixBlendMode: 'multiply',
      }}
    />
  )
}
