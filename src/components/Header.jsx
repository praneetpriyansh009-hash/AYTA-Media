import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const LOGO_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAP8Hp7YMyYJEpXKXlkwFnpqjkFxiFm_X-sFpKrSZZrQKFYJVL6y_vzEAOFFY6k5H8Sn0XZeDuMEXfoWKLM4XFSBsQkS6MT_-QHRW86VhWlZqi9DVRc0UaG-2aROJOAXbTmenOHiUrb8GUZtsz6WTVf9IK-sbw6R0HMadsPHs0rEHWozTkRtXS3JE20prE5THChWksrFhHWf_JdnjnvnE1BbWlGDEnJ_byePgPDJcRhd6RocctGx34iB0fzL3VaE1vUf0I'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isAagaaz = location.pathname === '/aagaaz'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl transition-all duration-300 ${
        scrolled
          ? 'bg-[#040608]/98 border-b border-[var(--color-gold-500)]/15 shadow-[0_12px_45px_rgba(0,0,0,0.95)]'
          : 'bg-[#040608]/92 border-b border-[var(--color-gold-500)]/10'
      }`}
    >
      {/* Top announcement strip */}
      <div className="w-full bg-gradient-to-r from-[var(--color-obsidian-950)] via-[var(--color-obsidian-900)] to-[var(--color-obsidian-950)] border-b border-[var(--color-gold-500)]/15 px-4 py-1.5 flex items-center justify-between text-[11px] tracking-[0.25em] text-[var(--color-gold-300)] font-[var(--font-cinzel)]">
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"></span>
          <span className="text-[var(--color-gold-200)] font-semibold tracking-[0.3em]">SOVEREIGN BROADCAST</span>
          <span className="text-[var(--color-gold-500)]/40 hidden sm:inline">•</span>
          <span className="hidden sm:inline text-[var(--color-gold-400)]/80 tracking-widest">VOICE OF THE GENERATION</span>
        </div>
        <div className="flex items-center gap-4 text-[var(--color-gold-300)]/80">
          <span className="hidden md:inline text-[10px] tracking-widest text-amber-200/90">AAGAAZ FESTIVAL 2026 AUDITIONS OPENING</span>
          <span className="text-amber-400 animate-pulse">✦</span>
        </div>
      </div>

      {/* Main nav bar */}
      <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4 group">
          <div className="relative w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-[var(--color-gold-400)] via-amber-200 to-amber-700 shadow-[0_0_22px_rgba(242,177,70,0.35)] group-hover:shadow-[0_0_32px_rgba(242,177,70,0.7)] group-hover:scale-105 transition-all duration-300">
            <div className="w-full h-full rounded-full overflow-hidden bg-[var(--color-obsidian-950)] flex items-center justify-center p-0.5">
              <img src={LOGO_URL} alt="AYTA Media House Crest" className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-[var(--font-cinzel)] text-xl sm:text-2xl font-bold tracking-[0.18em] text-[var(--color-primary)] group-hover:text-[var(--color-gold-300)] transition-colors">AYTA</span>
              <span className="font-[var(--font-cinzel)] text-xs uppercase tracking-[0.3em] px-2 py-0.5 rounded bg-[var(--color-gold-500)]/15 text-[var(--color-gold-300)] border border-[var(--color-gold-500)]/30 group-hover:border-[var(--color-gold-400)]/60 transition-colors">MEDIA HOUSE</span>
              <span className="text-[var(--color-gold-400)] text-xs hidden lg:inline">✦</span>
            </div>
            <span className="text-[10px] uppercase font-[var(--font-cinzel)] tracking-[0.25em] text-[var(--color-gold-200)]/60 hidden sm:block">STORIES / VOICES / CULTURE — THE UNFILTERED SANCTUM</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-1 bg-[var(--color-surface-card)]/60 border border-[var(--color-gold-leaf)]/20 px-3 py-1.5 rounded-full backdrop-blur-md hover:border-[var(--color-gold-leaf)]/40 transition-colors duration-300 font-[var(--font-cinzel)] text-xs uppercase tracking-[0.22em]">
          <Link to="/" className={`nav-link-glow px-4 py-1.5 tracking-widest uppercase transition-colors ${location.pathname === '/' ? 'text-[var(--color-gold-200)] font-bold' : 'text-[var(--color-muted-text)] hover:text-[var(--color-gold-light)]'}`}>Home</Link>
          <a href={location.pathname === '/' ? '#featured-episodes' : '/#featured-episodes'} className="nav-link-glow px-4 py-1.5 text-[var(--color-muted-text)] hover:text-[var(--color-gold-light)] tracking-widest uppercase transition-colors">Podcasts</a>
          <a href="#" className="nav-link-glow px-4 py-1.5 text-[var(--color-muted-text)] hover:text-[var(--color-gold-light)] tracking-widest uppercase transition-colors">Interviews</a>
          <div className="relative flex items-center">
            <Link
              to="/aagaaz"
              className={`px-4 py-1.5 font-bold text-[var(--color-obsidian-950)] rounded-full shadow-[0_0_15px_rgba(212,163,89,0.5)] hover:shadow-[0_0_25px_rgba(245,215,158,0.7)] transition-all duration-300 uppercase transform hover:scale-[1.03] ${isAagaaz ? 'opacity-90' : ''}`}
              style={{ background: 'linear-gradient(135deg, #FFF6E5 0%, #F5D79E 28%, #D4A359 62%, #8F6927 100%)' }}
            >
              AAGAAZ 2026
            </Link>
            <span className="absolute -top-1.5 -right-1 px-1.5 py-0.5 rounded-full bg-[var(--color-accent-ember)] text-white font-[var(--font-cinzel)] text-[8px] font-bold leading-none tracking-tighter uppercase shadow-[0_0_10px_rgba(230,90,40,0.8)] animate-pulse">Live</span>
          </div>
          <a href="#" className="nav-link-glow px-4 py-1.5 text-[var(--color-muted-text)] hover:text-[var(--color-gold-light)] tracking-widest uppercase transition-colors">Community</a>
        </nav>

        {/* Action buttons */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-full border border-[var(--color-gold-leaf)]/30 text-[var(--color-gold-light)] hover:border-[var(--color-gold-leaf)] hover:bg-[var(--color-gold-leaf)]/10 font-[var(--font-cinzel)] text-xs tracking-wider uppercase transition-all duration-300 transform hover:scale-105"
          >
            Submit Story
          </a>
          <Link
            to="/aagaaz"
            className="btn-sheen hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full btn-gold-royal font-[var(--font-cinzel)] font-extrabold text-xs tracking-widest uppercase shadow-lg"
          >
            Register Free
          </Link>

          {/* Hamburger */}
          <button
            aria-label="Open navigation menu"
            onClick={() => setMenuOpen(o => !o)}
            className={`menu-btn xl:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded-lg border border-[var(--color-gold-500)]/30 bg-[var(--color-obsidian-850)] hover:border-[var(--color-gold-400)] transition-all duration-300 ${menuOpen ? 'open' : ''}`}
          >
            <span className="hamburger-bar bar-top block w-5 h-[1.5px] bg-[var(--color-gold-400)] origin-center"></span>
            <span className="hamburger-bar bar-mid block w-5 h-[1.5px] bg-[var(--color-gold-400)] origin-center"></span>
            <span className="hamburger-bar bar-bot block w-5 h-[1.5px] bg-[var(--color-gold-400)] origin-center"></span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`mobile-menu-drawer xl:hidden ${menuOpen ? 'open' : ''}`}>
        <div className="border-t border-[var(--color-gold-500)]/15 bg-[var(--color-noir)]/95 backdrop-blur-2xl px-4 py-4 flex flex-col gap-1">
          <Link to="/" className="nav-link-glow py-3 px-3 font-[var(--font-cinzel)] text-[11px] tracking-widest font-bold text-[var(--color-gold-200)] uppercase rounded-lg hover:bg-[var(--color-surface-card)]/50 transition-all flex items-center gap-2">
            <span className="text-amber-400 animate-pulse">✦</span> Home
          </Link>
          <a href="#" className="nav-link-glow py-3 px-3 font-[var(--font-cinzel)] text-[11px] tracking-widest text-[var(--color-muted-text)] hover:text-[var(--color-gold-light)] uppercase rounded-lg hover:bg-[var(--color-surface-card)]/50 transition-all">Podcasts & Shows</a>
          <a href="#" className="nav-link-glow py-3 px-3 font-[var(--font-cinzel)] text-[11px] tracking-widest text-[var(--color-muted-text)] hover:text-[var(--color-gold-light)] uppercase rounded-lg hover:bg-[var(--color-surface-card)]/50 transition-all">Interviews</a>
          <Link to="/aagaaz" className="py-3 px-3 font-[var(--font-cinzel)] text-[11px] tracking-widest font-bold text-[var(--color-noir)] rounded-lg shadow-md flex items-center justify-between uppercase" style={{ background: 'linear-gradient(135deg, #FFF6E5 0%, #F5D79E 28%, #D4A359 62%, #8F6927 100%)' }}>
            AAGAAZ 2026
            <span className="px-1.5 py-0.5 rounded-full bg-[var(--color-accent-ember)] text-white font-[var(--font-cinzel)] text-[8px] font-bold leading-none tracking-tighter uppercase shadow-[0_0_10px_rgba(230,90,40,0.8)] animate-pulse">Live</span>
          </Link>
          <a href="#" className="nav-link-glow py-3 px-3 font-[var(--font-cinzel)] text-[11px] tracking-widest text-[var(--color-muted-text)] hover:text-[var(--color-gold-light)] uppercase rounded-lg hover:bg-[var(--color-surface-card)]/50 transition-all">Community</a>
          <div className="pt-2 mt-1 border-t border-[var(--color-gold-leaf)]/15 flex flex-col gap-2">
            <a href="#" className="text-center py-2.5 rounded-full border border-[var(--color-gold-leaf)]/30 text-[var(--color-gold-light)] font-[var(--font-cinzel)] text-xs tracking-wider uppercase transition-all">Submit Story</a>
            <Link to="/aagaaz" className="text-center py-2.5 rounded-full btn-gold-royal font-[var(--font-cinzel)] text-xs tracking-widest font-extrabold uppercase">Register Free</Link>
          </div>
        </div>
      </div>
    </header>
  )
}
