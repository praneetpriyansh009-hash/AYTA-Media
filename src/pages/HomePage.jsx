import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AmbientParticles from '../components/AmbientParticles'
import useScrollReveal from '../hooks/useScrollReveal'

const LOGO_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMcUiLoutpUO0mCQM7GRAyYTaieVG5zYdlBEqyCJaUAfGRBvew7rlNr4xcJh6yTIRBHyLSmEdqclakIPKEQGgTha57N5IQCpLe9KsmQeg01zg6Kfg8uMuVI2Y6LLMSO65Jw0EnMWyfXe2B--E3jkjnfY7AjTQNRJvqvKr1IxMRywt3XFN3CG6f9QzjQzBXvHQ4VadJ73PaPliicAHPoEEW7f_q4m0AfbFcnBQaynDnHTKzxdy-u407g2LKP9mXPfBCAWc'
const IMG1 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjZcQP-Z-XLGrKseXGfcXek8hLEwdqBjC4ujCauaaOv_A1dJPJNHwDnq7P20V2hIUQWR-5vEHVm2VSihgw3PdN9p1SOn6YGjcnv2FhXpenmT0wTF_zYbcvXGe1GdlpU2yTAmPeGXDdqyPosPLo2oZodWbVM_tRzsMXJC6ygoT9X5ogYe7SI-eZ4ezP8YN8RWvq-wAkCczwZlRCTM5yK3V6tUxYwYiKwsYtdZ12TB8_fvOMwMauJM1F4w'
const IMG2 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDU5Ew_fB-4LcqRfIeV9EBoYi8uHZA_frKXKa4pmzmEzmpp8BBt5m2Jje-9fceM0-aN-diUKyrOxpsFhHl7e3s8xMG7E2SYttdEBGEeqC6lx4fxyEk525IDMn7R4cwdURV8UlKU8Jyxr8cErXmzDF9wunC2_IZtHwOuTHOdo6uIeGvj3AXII7i5SQpxgPNpWmjKX8oxUVPMoKptVjL1JaQvwHOY2IT3AciN63fNbk12jyZHItzkPvOexA'
const IMG3 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdl1lbjONMensGGY4IiqB4-BDgavvel4DF_SbyNNc4t_uZMPho4fev0-VwnYF8S_isea-I_ZLXF3cWXuJdBtJlssOujFDmif_di_Wey2eIDsA20m4tJSVnzfmS8-cMdrBGjxB6YAdg2TZxtcFrQLT1d9y_hM75kvlLKlRLE_2yqcL4FY9QJZlOQ37nMlPwvSRZz153j-c6lHdOERgBsbIIGmcf3FZFB-3_EiMLBtNDvsiBS-w8k0xTpYm5m1uEXiip41g'
const POSTER1 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfFzidk4zlt3c29fRaqtXIJnVjrBYGrgy1559jEWk5eIDpYUqLAii8tAYOVZD5P5euOjw-1s0_D98NnVzoOP-y6exdA2GuVU1-ABzHmOjksDYUy_Wiunwe4XD9y5aJN9kbEprs5EdCgb9-GA4TEhRKEmkQsIZXlMgWBt0z4cpMMHns2t47rc0zGxj99YBuQ21W9K_T_naCi75shMvkohMGGfKySzAYCbwM-ti3X4VY_CXngQcAmhczk6qvTkogMnVFyg8'
const POSTER2 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBCfteeh2R3cUZyEtb46SN4oe48fZQa9vlm7FteCo0jBT1Jnp3rdPBJqphPiRNvQXYPRheaKjkl3H9dvbB2RDSDMevnNfkVIXvnzWH4biQudD2Fd8QY0mXyKSz2F0sZtEDctlzflezIJGUkPHAsVRTTT2JelDa36g5xURwH-bJz6iXsLriUjPMvux4K1DUwDIoLnuQncr9w7HCxKKcgc5p7Z3G56y6LPsd80bMU0WMZM0mT1xTn2XMu7oFVzZYFXDhunU'

const pillars = [
  { num: 'I', icon: 'podcasts', label: 'UNDERGROUND DISPATCHES', title: 'Raw Podcasts With Grit', desc: 'Uncensored tapes interrogating modern mental health burnout, predatory coaching hubs, unwritten student anxieties, and authentic existential tensions across Tier-2 & 3 cities.', cta: 'Listen To The Tapes' },
  { num: 'II', icon: 'record_voice_over', label: 'RADICAL INTERVIEWS', title: 'Deep-Dive Inquisitions', desc: 'Exhaustive, unhurried dialogues with dissident artists, grassroots leaders, independent documentary makers, and student rebels who reject commercial sterilization.', cta: 'View Inquisitions' },
  { num: 'III', icon: 'theater_comedy', label: 'SACRED CULTURAL ARENAS', title: 'Physical Stage Conclaves', desc: "Transforming digital discourse into physical amphitheaters. From Patna's river ghats to national auditoriums, our flagship festivals summon real youth poetry, street plays, and spoken fury.", cta: 'Enter The Conclave' },
]

const broadcastsAndEvents = [
  { img: IMG1, category: 'FEATURED PODCAST', title: 'Why Generation Z Feels Lost in Traditional Education', desc: 'Degree inflation, rote-learning factory hubs, and the silent panic after convocation. Unpacking the collapse of the conventional employment promise.', tag: 'Flagship Series', icon: 'podcasts' },
  { img: IMG2, category: 'UPCOMING EVENT', title: 'AYTA Poetry Slam & Open Mic Night', desc: 'An evening of raw spoken word, unplugged music, and unfiltered dialogues. Reserve your spot to witness the local underground talent.', tag: 'Live Event', icon: 'theater_comedy' },
  { img: IMG3, category: 'MEDIA PARTNERS', title: 'Official Media Partners at Truce MUN 2026', desc: 'AYTA Media House takes the front row in documenting the intense diplomatic debates and global policy discourse at Truce Model United Nations.', tag: 'Partnership', icon: 'handshake' },
]

function handleNewsletter(e) {
  e.preventDefault()
  const form = e.currentTarget
  const success = form.parentElement.querySelector('#newsletterSuccess')
  if (success) { form.style.opacity = '0.4'; form.style.pointerEvents = 'none'; success.classList.remove('hidden') }
}

export default function HomePage() {
  useScrollReveal()

  useEffect(() => {
    document.title = 'AYTA Media House — The Sovereign Broadcast & Cultural Sanctum'
  }, [])

  return (
    <div className="bg-[var(--color-obsidian-950)] text-[#dce4ec] font-[var(--font-body-md)] relative overflow-x-hidden film-grain min-h-screen">
      <AmbientParticles />

      {/* Ambient halos */}
      <div className="pointer-events-none fixed -top-40 left-1/2 w-[1200px] h-[700px] bg-gradient-to-b from-amber-600/8 via-[var(--color-gold-500)]/5 to-transparent rounded-full blur-[170px] -z-10 animate-ambient-glow" style={{ transform: 'translateX(-50%)' }} />
      <div className="pointer-events-none fixed top-[45vh] -left-60 w-[700px] h-[700px] bg-[var(--color-crimson-ember)]/5 rounded-full blur-[180px] -z-10 animate-halo-pulse" />
      <div className="pointer-events-none fixed bottom-10 right-[-100px] w-[800px] h-[800px] bg-[var(--color-gold-600)]/4 rounded-full blur-[190px] -z-10" />

      <Header />

      <main className="w-full pt-28 relative z-10">

        {/* ═══ HERO ═══ */}
        <section className="relative w-full max-w-[1440px] mx-auto px-6 pt-16 pb-28 text-center flex flex-col items-center">
          <div className="animate-hero-1 flex items-center justify-center gap-4 text-[var(--color-gold-400)]/80 mb-6">
            <span className="text-sm">✦</span>
            <div className="w-16 sm:w-28 h-px bg-gradient-to-r from-transparent to-[var(--color-gold-500)]/60" />
            <div className="inline-flex items-center gap-3 px-5 py-1.5 rounded-full bg-[var(--color-obsidian-900)]/95 border border-[var(--color-gold-500)]/40 text-[var(--color-gold-300)] shadow-[0_0_25px_rgba(242,177,70,0.2)] hover:border-[var(--color-gold-400)] transition-colors">
              <span className="w-2 h-2 rounded-full bg-[var(--color-crimson-glow)] shadow-[0_0_10px_#e63e19] animate-pulse" />
              <span className="font-[var(--font-cinzel)] text-[11px] uppercase tracking-[0.3em] text-[var(--color-gold-200)] font-semibold">THE UNFILTERED SANCTUM</span>
              <span className="text-[var(--color-gold-500)] text-xs">✦</span>
              <span className="text-[11px] tracking-widest text-[var(--color-gold-300)]/80 font-[var(--font-quote-editorial)] italic">The Sovereign Cultural Broadcast</span>
            </div>
            <div className="w-16 sm:w-28 h-px bg-gradient-to-l from-transparent to-[var(--color-gold-500)]/60" />
            <span className="text-sm">✦</span>
          </div>

          <div className="animate-hero-2 relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-[3px] bg-gradient-to-tr from-[var(--color-gold-500)] via-amber-200 to-amber-700 shadow-[0_0_45px_rgba(242,177,70,0.45)] mb-8 flex items-center justify-center group cursor-pointer transition-all duration-500 hover:shadow-[0_0_65px_rgba(242,177,70,0.7)] hover:scale-105">
            <div className="absolute -inset-4 rounded-full bg-[var(--color-gold-400)]/10 blur-xl animate-halo-pulse pointer-events-none" />
            <div className="w-full h-full rounded-full bg-[var(--color-obsidian-950)] overflow-hidden flex items-center justify-center p-2 border border-[var(--color-gold-500)]/30 relative z-10">
              <img alt="AYTA Media House Official Insignia" className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-700" src={LOGO_URL} />
            </div>
            <div className="absolute -inset-1 rounded-full border border-[var(--color-gold-400)]/30 animate-pulse pointer-events-none" />
          </div>

          <h1 className="animate-hero-3 font-[var(--font-display-hero)] text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.08] max-w-5xl mb-6 drop-shadow-[0_8px_40px_rgba(0,0,0,0.95)]">
            THE VOICE OF THE YOUTH.<br />
            <span className="liquid-gold-text font-[var(--font-quote-editorial)] italic font-normal tracking-wide block sm:inline mt-2">UNAPOLOGETIC & IMMORTAL.</span>
          </h1>

          <div className="animate-hero-4 relative flex flex-col items-center justify-center max-w-3xl mx-auto mb-8 px-4">
            <div className="flex items-center justify-center gap-4 mb-3 w-full">
              <div className="h-px flex-grow max-w-xs bg-gradient-to-r from-transparent via-[var(--color-gold-500)]/40 to-[var(--color-gold-500)]" />
              <span className="text-[var(--color-gold-400)] text-sm animate-pulse">✦</span>
              <div className="h-px flex-grow max-w-xs bg-gradient-to-l from-transparent via-[var(--color-gold-500)]/40 to-[var(--color-gold-500)]" />
            </div>
            <p className="font-[var(--font-quote-editorial)] text-2xl sm:text-4xl text-[var(--color-gold-200)]/95 italic tracking-wider font-light drop-shadow-lg leading-snug">
              "युवा चेतना की बुलंद आवाज़ — ज़मीनी सच, बिना किसी हिचकिचाहट के।"
            </p>
            <div className="flex items-center justify-center gap-4 mt-3 w-full">
              <div className="h-px flex-grow max-w-xs bg-gradient-to-r from-transparent via-[var(--color-gold-500)]/40 to-[var(--color-gold-500)]" />
              <span className="text-[var(--color-gold-400)] text-sm animate-pulse">✦</span>
              <div className="h-px flex-grow max-w-xs bg-gradient-to-l from-transparent via-[var(--color-gold-500)]/40 to-[var(--color-gold-500)]" />
            </div>
          </div>

          <p className="animate-hero-5 font-[var(--font-body-md)] text-base sm:text-xl text-[#c4d2df] max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            AYTA Media House is an uncompromising cultural order dismantling synthetic narratives. Through fearless long-form podcasts, intimate counter-culture inquisitions, and monumental live performance conclaves, we broadcast the visceral truth of India's new vanguard.
          </p>

          <div className="animate-hero-6 flex flex-wrap items-center justify-center gap-5 w-full max-w-xl mx-auto">
            <a href="#featured-episodes" className="btn-sheen px-9 py-4 rounded-xl bg-gradient-to-r from-[var(--color-gold-400)] via-amber-200 to-[var(--color-gold-500)] text-[var(--color-obsidian-950)] font-[var(--font-cinzel)] font-bold text-xs uppercase tracking-[0.24em] shadow-[0_0_35px_rgba(242,177,70,0.5)] hover:shadow-[0_0_55px_rgba(242,177,70,0.85)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3">
              <span>ENTER THE BROADCAST ARCHIVE</span>
              <span className="material-symbols-outlined text-base">podcasts</span>
            </a>
            <Link to="/aagaaz" className="px-8 py-4 rounded-xl bg-[var(--color-obsidian-900)]/90 hover:bg-[var(--color-obsidian-850)] text-[var(--color-gold-200)] border border-[var(--color-gold-500)]/40 hover:border-[var(--color-gold-300)] font-[var(--font-cinzel)] text-xs uppercase tracking-[0.22em] transition-all duration-300 flex items-center gap-3 shadow-[0_8px_30px_rgba(0,0,0,0.7)] hover:shadow-[0_0_30px_rgba(242,177,70,0.3)] hover:-translate-y-0.5 group">
              <span>EXPLORE AAGAAZ 2026</span>
              <span className="material-symbols-outlined text-base group-hover:translate-x-1.5 text-[var(--color-gold-400)] transition-transform duration-300">arrow_forward</span>
            </Link>
          </div>

          <div className="w-full max-w-4xl mt-16 pt-6 border-t border-[var(--color-gold-500)]/20 flex items-center justify-between text-[var(--color-gold-400)]/60 reveal-on-scroll">
            <span className="font-[var(--font-cinzel)] text-[10px] tracking-[0.3em] uppercase text-[var(--color-gold-300)]/80">PATNA • NCR • RESISTANCE DIALECTS</span>
            <div className="flex items-center gap-2"><span>✦</span><span className="w-12 h-px bg-[var(--color-gold-500)]/30" /><span>✦</span></div>
            <span className="font-[var(--font-cinzel)] text-[10px] tracking-[0.3em] uppercase text-[var(--color-gold-300)]/80">AUTHENTIC CULTURAL ARTIFACTS</span>
          </div>
        </section>

        {/* ═══ THREE PILLARS ═══ */}
        <section className="w-full bg-[var(--color-obsidian-900)]/80 py-24 border-y border-[var(--color-gold-500)]/20 relative reveal-on-scroll">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <div className="flex items-center gap-2 text-[var(--color-gold-400)] mb-2 font-[var(--font-cinzel)] text-xs tracking-[0.3em] uppercase">
                  <span>✦</span><span>CURATORIAL FOUNDATION</span><span>✦</span>
                </div>
                <h2 className="font-[var(--font-display-hero)] text-3xl sm:text-5xl text-white font-bold tracking-tight">The Three Pillars of Disruption</h2>
              </div>
              <p className="font-[var(--font-quote-editorial)] text-xl sm:text-2xl text-[#c4d3e0] italic max-w-md font-light">
                "We do not broadcast to soothe polite sensibilities. We broadcast to document what polite society refuses to acknowledge."
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillars.map(p => (
                <div key={p.num} className="relative beveled-glass rounded-2xl p-8 gilded-card-lux group flex flex-col justify-between overflow-hidden shadow-2xl reveal-on-scroll">
                  <div className="absolute top-3 left-3 text-[var(--color-gold-400)]/50 font-mono text-sm leading-none transition-colors group-hover:text-[var(--color-gold-300)]">⌜</div>
                  <div className="absolute top-3 right-3 text-[var(--color-gold-400)]/50 font-mono text-sm leading-none transition-colors group-hover:text-[var(--color-gold-300)]">⌝</div>
                  <div className="absolute bottom-3 left-3 text-[var(--color-gold-400)]/50 font-mono text-sm leading-none transition-colors group-hover:text-[var(--color-gold-300)]">⌞</div>
                  <div className="absolute bottom-3 right-3 text-[var(--color-gold-400)]/50 font-mono text-sm leading-none transition-colors group-hover:text-[var(--color-gold-300)]">⌟</div>
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-[var(--color-obsidian-950)] border border-[var(--color-gold-500)]/35 flex items-center justify-center text-[var(--color-gold-300)] group-hover:scale-110 group-hover:text-[var(--color-gold-200)] group-hover:border-[var(--color-gold-400)]/80 transition-all duration-500 shadow-[0_0_20px_rgba(242,177,70,0.15)]">
                        <span className="material-symbols-outlined text-3xl">{p.icon}</span>
                      </div>
                      <span className="font-[var(--font-cinzel)] text-4xl sm:text-5xl text-[var(--color-gold-500)]/30 font-black group-hover:text-[var(--color-gold-300)] group-hover:drop-shadow-[0_0_12px_rgba(242,177,70,0.6)] transition-all duration-500">{p.num}</span>
                    </div>
                    <span className="font-[var(--font-cinzel)] text-[11px] tracking-[0.28em] text-[var(--color-gold-400)] uppercase font-semibold">{p.label}</span>
                    <h3 className="font-[var(--font-display-hero)] text-2xl text-white font-bold mt-2 mb-4 leading-snug group-hover:text-[var(--color-gold-200)] transition-colors">{p.title}</h3>
                    <p className="font-[var(--font-body-md)] text-sm text-[#b0c0cf] leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-[var(--color-gold-500)]/15 flex items-center justify-between text-[var(--color-gold-300)] font-[var(--font-cinzel)] text-xs tracking-widest uppercase group-hover:text-[var(--color-gold-200)] transition-colors">
                    <span className="flex items-center gap-2">{p.cta} <span className="material-symbols-outlined text-sm group-hover:translate-x-1.5 transition-transform duration-300">arrow_forward</span></span>
                    <span className="text-amber-400 text-xs">✦</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ FEATURED BROADCASTS & EVENTS ═══ */}
        <section className="w-full max-w-[1440px] mx-auto px-6 py-24" id="featured-episodes">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 reveal-on-scroll">
            <div>
              <div className="flex items-center gap-2 text-[var(--color-gold-400)] font-[var(--font-cinzel)] text-xs tracking-[0.25em] uppercase mb-2"><span>✦</span><span>SUBVERSIVE AUDIO & EVENTS</span></div>
              <h2 className="font-[var(--font-display-hero)] text-3xl sm:text-5xl text-white font-bold tracking-tight">Master Tapes & Collaborations</h2>
            </div>
            <div className="flex items-center gap-3">
              <a href="#" className="px-5 py-2 rounded-xl bg-[var(--color-gold-500)]/10 hover:bg-[var(--color-gold-500)]/20 border border-[var(--color-gold-500)]/40 hover:border-[var(--color-gold-300)] text-[var(--color-gold-200)] font-[var(--font-cinzel)] text-xs tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(242,177,70,0.3)]">View Entire Archive</a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {broadcastsAndEvents.map((item, i) => (
              <article key={i} className="relative beveled-glass rounded-2xl overflow-hidden gilded-border flex flex-col justify-between group transition-all duration-500 shadow-2xl reveal-on-scroll hover:-translate-y-1.5">
                <div className="relative h-64 w-full overflow-hidden">
                  <img alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src={item.img} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-obsidian-950)] via-[var(--color-obsidian-950)]/40 to-transparent group-hover:via-[var(--color-obsidian-950)]/20 transition-all duration-500" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded bg-[var(--color-obsidian-950)]/90 border border-[var(--color-gold-500)]/50 backdrop-blur-md text-[var(--color-gold-200)] font-[var(--font-cinzel)] text-[10px] tracking-wider uppercase font-semibold group-hover:border-[var(--color-gold-300)] group-hover:shadow-[0_0_12px_rgba(242,177,70,0.4)] transition-all">{item.category}</span>
                </div>
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-[var(--font-display-hero)] text-xl text-white font-bold mb-3 group-hover:text-[var(--color-gold-200)] transition-colors leading-snug">{item.title}</h3>
                    <p className="font-[var(--font-body-md)] text-sm text-[#a5b4c2] line-clamp-3 mb-6 font-light leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-[var(--color-gold-500)]/15 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[var(--color-gold-400)] text-xs font-[var(--font-cinzel)] tracking-wider uppercase">
                      <span className="text-amber-400">✦</span><span>{item.tag}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="w-9 h-9 rounded-full bg-[var(--color-obsidian-900)] border border-[var(--color-gold-500)]/40 hover:bg-[var(--color-gold-500)] hover:text-[var(--color-obsidian-950)] text-[var(--color-gold-300)] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md">
                        <span className="material-symbols-outlined text-base">{item.icon}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ═══ AAGAAZ SHOWCASE ═══ */}
        <section className="relative w-full py-28 bg-gradient-to-b from-[var(--color-obsidian-950)] via-[var(--color-obsidian-900)] to-[var(--color-obsidian-950)] border-t border-[var(--color-gold-500)]/25 overflow-hidden reveal-on-scroll" id="aagaaz-showcase">
          <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[950px] bg-gradient-to-b from-amber-600/10 via-[var(--color-gold-500)]/8 to-transparent rounded-full blur-[170px] -z-10 animate-halo-pulse" />
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="relative beveled-glass rounded-3xl p-6 sm:p-12 gilded-border-glow shadow-[0_30px_90px_rgba(0,0,0,0.95)]">
              <div className="flex items-center justify-between text-[var(--color-gold-400)] mb-8">
                <span className="text-xl">✦</span>
                <div className="h-0.5 flex-grow mx-6 hairline-gold" />
                <span className="font-[var(--font-cinzel)] text-xs tracking-[0.4em] uppercase text-[var(--color-gold-300)]">AYTA MEDIA HOUSE SOVEREIGN STAGE</span>
                <div className="h-0.5 flex-grow mx-6 hairline-gold" />
                <span className="text-xl">✦</span>
              </div>

              <div className="flex flex-col items-center text-center mb-10">
                <span className="font-[var(--font-cinzel)] text-xs tracking-[0.35em] text-[var(--color-gold-400)] uppercase font-semibold mb-2">PATNA KI PRATIBHA • FLAGSHIP YOUTH FESTIVAL 2026</span>
                <h2 className="font-[var(--font-cinzel)] text-5xl sm:text-7xl md:text-8xl font-black liquid-gold-text tracking-widest leading-none drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)] mb-3">AAGAAZ</h2>
                <p className="font-[var(--font-quote-editorial)] text-2xl sm:text-3xl text-[var(--color-gold-200)] tracking-wider italic">"WORDS THAT MOVE WORLDS"</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <div className="relative rounded-2xl overflow-hidden gilded-border-glow poster-aura-pulse p-1 bg-gradient-to-tr from-[var(--color-gold-600)]/40 via-amber-400/20 to-[var(--color-crimson-glow)]/30 group">
                    <div className="rounded-xl overflow-hidden relative">
                      <img alt="AAGAAZ Words That Move Worlds Poster" className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition-transform duration-700 ease-out" src={POSTER1} />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-obsidian-950)]/60 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <div className="relative rounded-2xl overflow-hidden gilded-border-glow poster-aura-pulse p-1 bg-gradient-to-tr from-[var(--color-gold-400)]/40 via-amber-200/20 to-[var(--color-gold-700)]/40 group">
                    <div className="rounded-xl overflow-hidden relative">
                      <img alt="AAGAAZ Shakti Festival Theme Poster" className="w-full h-auto max-h-[580px] object-cover mx-auto transform group-hover:scale-[1.03] transition-transform duration-700 ease-out" src={POSTER2} />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-obsidian-950)]/70 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <Link to="/aagaaz" className="btn-sheen px-10 py-5 rounded-2xl bg-gradient-to-r from-[var(--color-gold-400)] via-amber-200 to-[var(--color-gold-500)] text-[var(--color-obsidian-950)] font-[var(--font-cinzel)] font-bold text-sm uppercase tracking-[0.25em] shadow-[0_0_40px_rgba(242,177,70,0.5)] hover:shadow-[0_0_60px_rgba(242,177,70,0.85)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3">
                  <span>ENTER THE AAGAAZ CONCLAVE & REGISTER</span>
                  <span className="material-symbols-outlined text-lg font-bold">arrow_forward</span>
                </Link>
                <div className="flex items-center gap-4 text-[var(--color-gold-300)] font-[var(--font-cinzel)] text-[11px] tracking-[0.3em] uppercase mt-4">
                  <span>BE HEARD</span><span className="text-amber-400 animate-pulse">✦</span>
                  <span>BE SEEN</span><span className="text-amber-400 animate-pulse">✦</span>
                  <span>BE A PART OF AAGAAZ</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ VIDEO CLIPS MARQUEE ═══ */}
        <section className="w-full py-24 border-t border-[var(--color-gold-500)]/20 overflow-hidden bg-[var(--color-obsidian-950)] relative reveal-on-scroll">
          <div className="text-center max-w-2xl mx-auto mb-12 px-6">
            <div className="flex items-center justify-center gap-2 text-[var(--color-gold-400)] font-[var(--font-cinzel)] text-xs tracking-[0.3em] uppercase mb-2"><span>✦</span><span>THE UNDERGROUND SPEAKS</span><span>✦</span></div>
            <h2 className="font-[var(--font-display-hero)] text-3xl sm:text-5xl text-white font-bold tracking-tight">Moments That Moved Worlds</h2>
            <p className="font-[var(--font-quote-editorial)] text-xl text-[#b8c6d3] italic mt-3 font-light">Witness raw clips from our flagship broadcasts, open mics, and live conclaves.</p>
          </div>

          {/* Marquee Belt container */}
          <div className="relative w-full overflow-hidden flex py-4">
            {/* Left and right fade gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[var(--color-obsidian-950)] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[var(--color-obsidian-950)] to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee-belt flex gap-6 px-3">
              {/* Duplicate list twice for seamless infinite scrolling */}
              {[...Array(2)].map((_, groupIndex) => (
                <div key={groupIndex} className="flex gap-6">
                  {[1, 2, 3, 4, 5].map((itemIndex) => (
                    <div key={itemIndex} className="relative w-64 h-96 rounded-2xl overflow-hidden gilded-border group flex-shrink-0 cursor-pointer">
                      <div className="absolute inset-0 bg-[var(--color-obsidian-900)] flex flex-col items-center justify-center border border-[var(--color-gold-500)]/20 transition-all duration-300 group-hover:border-[var(--color-gold-500)]/60">
                        <span className="material-symbols-outlined text-4xl text-[var(--color-gold-500)]/50 group-hover:text-[var(--color-gold-300)] mb-3 transition-colors">play_circle</span>
                        <span className="text-[var(--color-gold-400)]/60 font-[var(--font-cinzel)] text-xs tracking-widest uppercase">Video Clip {itemIndex}</span>
                        <span className="absolute bottom-4 left-0 right-0 text-center text-[#a5b4c2] text-xs opacity-0 group-hover:opacity-100 transition-opacity">(Add Video Here)</span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ NEWSLETTER ═══ */}
        <section className="w-full bg-[var(--color-obsidian-900)]/90 py-24 border-t border-[var(--color-gold-500)]/20 reveal-on-scroll">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="relative rounded-3xl beveled-glass p-8 sm:p-14 gilded-border-glow shadow-2xl overflow-hidden">
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="w-full lg:w-7/12 text-left">
                  <div className="flex items-center gap-2 text-[var(--color-gold-400)] font-[var(--font-cinzel)] text-xs tracking-[0.3em] uppercase mb-3">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-gold-400)] animate-ping" />
                    <span>DISRUPTION GAZETTE & CONCLAVE PASSES</span>
                  </div>
                  <h2 className="font-[var(--font-display-hero)] text-3xl sm:text-5xl text-white font-bold leading-tight mb-4">Stay plugged into raw youth stories & private conclave passes.</h2>
                  <p className="font-[var(--font-body-md)] text-base text-[#bcc7d3] max-w-xl font-light leading-relaxed">Receive unedited podcast transcripts, exclusive front-row invitations to AAGAAZ 2026, and private bulletins from the cultural underground.</p>
                </div>
                <div className="w-full lg:w-5/12">
                  <form className="flex flex-col sm:flex-row gap-2 bg-[var(--color-obsidian-950)] p-2 rounded-2xl border border-[var(--color-gold-500)]/40 focus-within:border-[var(--color-gold-300)] focus-within:ring-2 focus-within:ring-[var(--color-gold-500)]/30 transition-all duration-300 shadow-inner" id="newsletterForm" onSubmit={handleNewsletter}>
                    <input className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder:text-[var(--color-gold-300)]/40 focus:outline-none font-[var(--font-body-md)]" placeholder="Enter your university or personal email..." required type="email" />
                    <button className="btn-sheen px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--color-gold-400)] to-amber-400 text-[var(--color-obsidian-950)] font-[var(--font-cinzel)] font-bold text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(242,177,70,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 flex-shrink-0" type="submit">
                      <span>Enlist</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </form>
                  <div className="hidden mt-3 p-3 text-center text-[var(--color-gold-300)] font-[var(--font-cinzel)] text-xs tracking-wider bg-[var(--color-obsidian-950)] rounded-xl border border-[var(--color-gold-500)]/30" id="newsletterSuccess">
                    ✦ You are consecrated into the movement. Welcome to AYTA.
                  </div>
                  <p className="font-[var(--font-cinzel)] text-[10px] text-[var(--color-gold-400)]/60 tracking-wider uppercase mt-3 text-center sm:text-left">No corporate spam. Unsubscribe anytime with one tap.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
