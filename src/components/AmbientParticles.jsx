import { useEffect, useRef } from 'react'

export default function AmbientParticles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let width = canvas.width = window.innerWidth
    let height = canvas.height = window.innerHeight
    let animId

    const onResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)

    const count = Math.min(32, Math.floor(width / 45))
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      color: Math.random() > 0.3 ? 'rgba(242, 177, 70,' : 'rgba(255, 231, 198,',
      alpha: Math.random() * 0.5 + 0.2,
      speedY: -(Math.random() * 0.35 + 0.1),
      speedX: (Math.random() - 0.5) * 0.25,
      pulse: Math.random() * Math.PI,
    }))

    function render() {
      ctx.clearRect(0, 0, width, height)
      particles.forEach(p => {
        p.y += p.speedY; p.x += p.speedX; p.pulse += 0.02
        if (p.y < -10) { p.y = height + 10; p.x = Math.random() * width }
        if (p.x < -10) p.x = width + 10
        if (p.x > width + 10) p.x = -10
        const a = p.alpha * (0.6 + 0.4 * Math.sin(p.pulse))
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `${p.color} ${a})`
        ctx.fill()
      })
      animId = requestAnimationFrame(render)
    }
    render()

    return () => {
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(animId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-40" />
}
