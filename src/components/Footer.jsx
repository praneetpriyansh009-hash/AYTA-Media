import { Link } from 'react-router-dom'

const LOGO_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_xQjBOW8l-6R7KJXW1rXyxZtpG_Qq_Wv4X7UCp3f7hzwZllCYajfLa-Ei_a5DRvAvUFa0LbZTEvlHY1LQb3CZZtChiVPCZdLW_V6tEmyryyV1tsq2DXQn4itM22bso5Z18c2Oiaof7jNHa_abO8CutF8vAXPBqr4c-JzXL6DfekvELep1ifXMeI0w_REKAIXHIaPdY_Uqf3sVnlvcMFIsbJN0e3Z78OQlZ8GMPuJF8yphSYGRe-5HFoo_yrSsyRFlMmU'

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--color-obsidian-950)] text-[#dce4ec] border-t border-[var(--color-gold-500)]/25 relative z-10">
      <div className="w-full max-w-[1440px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[var(--color-gold-500)]/15">
          {/* Brand */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-[var(--color-gold-400)] to-amber-600 shadow-[0_0_15px_rgba(242,177,70,0.3)] hover:scale-105 transition-transform">
                <div className="w-full h-full rounded-full overflow-hidden bg-[var(--color-obsidian-950)]">
                  <img alt="AYTA Seal" className="w-full h-full object-cover" src={LOGO_URL} />
                </div>
              </div>
              <div>
                <span className="font-[var(--font-cinzel)] text-2xl font-bold tracking-[0.18em] text-white block">AYTA MEDIA HOUSE</span>
                <p className="font-[var(--font-cinzel)] text-[10px] tracking-[0.25em] text-[var(--color-gold-400)] uppercase">THE CULTURAL SOVEREIGN BROADCAST</p>
              </div>
            </div>
            <p className="font-[var(--font-quote-editorial)] text-xl text-[var(--color-gold-100)]/90 italic max-w-lg leading-relaxed font-light">
              "Empowering youth voices across Bihar & India, asking the hard questions through raw conversations, art, and unapologetic culture."
            </p>
            <div className="flex items-center gap-3 pt-2">
              {['smart_display', 'podcasts', 'photo_camera', 'campaign'].map(icon => (
                <a key={icon} href="#" className="w-10 h-10 rounded-xl bg-[var(--color-obsidian-900)] border border-[var(--color-gold-500)]/30 text-[var(--color-gold-300)] hover:bg-[var(--color-gold-500)] hover:text-[var(--color-obsidian-950)] hover:border-[var(--color-gold-300)] transition-all duration-300 hover:-translate-y-1 flex items-center justify-center shadow-md">
                  <span className="material-symbols-outlined text-lg">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Sanctum Nav */}
          <div className="lg:col-span-2 flex flex-col gap-3 font-[var(--font-cinzel)]">
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--color-gold-300)] font-bold mb-2">Sanctum Navigation</span>
            <nav className="flex flex-col gap-2.5 text-xs text-[#a4b4c2] tracking-wider">
              <Link to="/" className="hover:text-[var(--color-gold-300)] hover:translate-x-1 transition-all duration-200">Home</Link>
              <a href="#" className="hover:text-[var(--color-gold-300)] hover:translate-x-1 transition-all duration-200">About Us</a>
              <a href="#" className="hover:text-[var(--color-gold-300)] hover:translate-x-1 transition-all duration-200">Podcasts & Shows</a>
              <a href="#" className="hover:text-[var(--color-gold-300)] hover:translate-x-1 transition-all duration-200">Spotlight Interviews</a>
              <Link to="/aagaaz" className="hover:text-[var(--color-gold-300)] hover:translate-x-1 transition-all duration-200 text-[var(--color-gold-400)]">AAGAAZ 2026</Link>
              <a href="#" className="hover:text-[var(--color-gold-300)] hover:translate-x-1 transition-all duration-200">Youth Community</a>
            </nav>
          </div>

          {/* Curatorial Records */}
          <div className="lg:col-span-2 flex flex-col gap-3 font-[var(--font-cinzel)]">
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--color-gold-300)] font-bold mb-2">Curatorial Records</span>
            <nav className="flex flex-col gap-2.5 text-xs text-[#a4b4c2] tracking-wider">
              <a href="#" className="hover:text-[var(--color-gold-300)] hover:translate-x-1 transition-all duration-200">Festival Archives</a>
              <a href="#" className="hover:text-[var(--color-gold-300)] hover:translate-x-1 transition-all duration-200">Editorial Standards</a>
              <a href="#" className="hover:text-[var(--color-gold-300)] hover:translate-x-1 transition-all duration-200">Media Press Kits</a>
              <a href="#" className="hover:text-[var(--color-gold-300)] hover:translate-x-1 transition-all duration-200">Patna Cultural Bureau</a>
              <a href="#" className="hover:text-[var(--color-gold-300)] hover:translate-x-1 transition-all duration-200">Privacy & Charter</a>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="font-[var(--font-cinzel)] text-xs uppercase tracking-[0.25em] text-[var(--color-gold-300)] font-bold">The Disruption Dispatch</span>
            <p className="text-xs text-[#a4b4c2] leading-relaxed">
              Unfiltered weekly cultural essays, underground festival dispatches, and investigative youth reports delivered directly to your inbox.
            </p>
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex bg-[var(--color-obsidian-900)] rounded-xl p-1 border border-[var(--color-gold-500)]/30 focus-within:border-[var(--color-gold-300)] focus-within:ring-1 focus-within:ring-[var(--color-gold-400)] transition-all">
                <input className="w-full bg-transparent px-3 py-2 text-xs text-white placeholder:text-[var(--color-gold-300)]/40 focus:outline-none" placeholder="Enter your email..." type="email" />
                <button className="px-3.5 py-2 rounded-lg bg-[var(--color-gold-400)] text-[var(--color-obsidian-950)] font-bold hover:bg-[var(--color-gold-300)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center" type="button">
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
              <span className="font-[var(--font-cinzel)] text-[10px] text-[var(--color-gold-400)]/60 tracking-wider">✦ Zero spam. Pure grassroots discourse.</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-[var(--font-cinzel)] text-xs text-[var(--color-gold-400)]/80 tracking-widest">
          <div>© 2026 AYTA Media House. All sovereign rights reserved. Patna • New Delhi.</div>
          <div className="flex items-center gap-2">
            <span>CRAFTED FOR CULTURAL RENAISSANCE</span>
            <span className="text-amber-400">✦</span>
            <span>VOICE OF THE YOUTH</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
