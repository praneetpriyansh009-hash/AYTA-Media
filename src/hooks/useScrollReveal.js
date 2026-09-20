import { useEffect } from 'react'

export default function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal-on-scroll')
    if (!('IntersectionObserver' in window)) {
      els.forEach(el => el.classList.add('revealed'))
      return
    }
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target) } }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}
