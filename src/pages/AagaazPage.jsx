import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AmbientParticles from '../components/AmbientParticles'
import useScrollReveal from '../hooks/useScrollReveal'

const HERO_POSTER = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJHKijJOnoDukEweI4UJByX3yL-Eft0264jCGgrauTwEquvDSVwdPCDCQWZ2LbEpeIh-eb0y684WBmGwr8eFAI7Bw9rosY7fh29aFV2EQwetqDxpOz8ujK5glnzMNeZ0R1U8JX4Ku9VHLX2779L6ewqXjHjxBNLfyAic4pm48ra1sZdDAgHYkZP_7v0XsEM3v0TMrjfkr6PgmlL5424OXo0OLsLIgMXrtcj6f1rH75PeLbIZmAEePTDeRMQWmf9p-9lqM'
const BANNER_IMG = '/aagaaz-banner.jpg'
const MIC_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYIWEmxcgMO9JLfYgkBUjp864dSHAKkNq_s6sZtWsgfcRKu1TiGM98bwqM52rLSNu8JoHrDUHtB2hYrmLema7nUk3u1YB92trIW2z1Kb9SNGz0BMzJ3_u9nNu5D8iU_htFz90QNh4edb-hcwW8guwcFkE_Js5JZuLpdsLhcYtB_opUppznEQXAEf4_e013dwVv7pJwJLvvJBB_p90EXUhIESEsMRYKX-geyn6DjGvxE7PVEwVBxGz2Qw'

const STAGE_IMGS = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAW9QGKcgfnmgOyh_a9Qcwc1v9xATkVilvAFlufKtwAeqWY3Q2FachKhbmN8x2o2zWAHZk6XP2jXiMUmm602w1iu9et9KXHeILobizikjIvlAVfwh7XGdgoYO2E_LU6N2dh5xdLqUCmCD6sBNmLAjq6BjTE9ZCfFq9FHvpnCYP8Y_60bOUKNZT_vFAY-_KMjy1WFuqxcJBtpcnnxJ24bG4ypQv5HoHcOH-w7Lg_qNEtgsx8WFxfySzEuw',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBjGTX-bC19_UZ1QuFwPly-S8uddOiW0_gag2U7aT00iIUajAzJyVduRt2fhhbNPAp9VE6EsFExM-w8-Cw-euiD0cvsMOCXzCC8Z0FLZeBc5HelLUVJWDXMBiz86z7cH1CqaiqBqprUSfk44QkJqABIZBDrTn7WiDHpD0ea2D_CmwFLd3LUDvjiGtRY7oqBMu6KD8wAIOWUeM5HJpgOFNNuyRvOZN0-kBuPLfLBHaBELISQFwWATxLRtw',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAAzXZKtqnmCItoJ4VUoLUZwDIQ0zUfOsJeSODaanCMj0akS0Ey9TXgdiLOLH5N_90YhD6Uqgp8tFWKNIquwK7SCo7JUtuOTrR499U0wkPqfs-wAc9z5IjQY-y6RHYT5lMzDPanHTve5_sVIDs5CYDDXGRVu1a7shoG0sCR7qIdiyJHDDIqvGy0KM4-K1BLJqgRHFTea3-yQcRlkWfeVtcJg9KdvuC9Qh2ru0C_cUbtyhFldHjSnSjkbQ',
]

const disciplines = [
  { num: 'I', icon: 'history_edu', label: 'Poetry', hindi: '(कविता)', time: '2 – 5 Mins', type: 'Solo', desc: 'Free verse, slam poetry, spoken cadence. Verses in Hindi, Urdu, Maithili, Bhojpuri, or English that dissect human realities.' },
  { num: 'II', icon: 'favorite', label: 'Shayari', hindi: '(शायरी व नज़्म)', time: '2 – 5 Mins', type: 'Solo', desc: 'Lyrical couplets, ghazals, and introspective quatrains confronting modern anguish, heritage longing, and inner truths.' },
  { num: 'III', icon: 'theater_comedy', label: 'Role Play', hindi: '(हास्य व अभिनय)', time: '2 – 5 Mins', type: 'Solo', desc: 'Sharp social satire, nuanced solo monologues, observational comedy mirroring Indian college life and street reality.' },
  { num: 'IV', icon: 'auto_stories', label: 'Storytelling', hindi: '(कहानी वाचन)', time: '2 – 5 Mins', type: 'Solo', desc: 'The ancient art of spoken chronicle. First-person lived accounts, folklore through modern lenses, and dramatic memoirs.' },
  { num: 'V', icon: 'mic', label: 'Standup Comedy', hindi: '(स्टैंड-अप कॉमेडी)', time: '2 – 5 Mins', type: 'Solo', desc: 'Raw, unfiltered humor. Anecdotal comedy exploring the quirks, struggles, and absurdities of youth and regional life.' },
  { num: 'VI', icon: 'campaign', label: 'Nukad Natak', hindi: '(नुक्कड़ नाटक)', time: '7 – 10 Mins', type: 'School Team', desc: 'Street theatre with thunderous social resonance. Resonating dholaks, rhythmic clapping, and collective awakening.', ember: true },
]

const faqs = [
  { id: 'faq-1', q: 'Is there any registration fee to participate in AAGAAZ 2026?', a: 'Yes, a nominal talent entry fee of ₹899 is required to secure your audition slot and access to the grand stage.' },
  { id: 'faq-2', q: 'Can I perform in my regional mother tongue?', a: 'For AAGAAZ 2026, performances are strictly limited to Hindi and English to ensure universal resonance and standardized evaluation.' },
  { id: 'faq-3', q: 'How strictly are stage time limits enforced?', a: 'Strictly. Poetry & Shayari have a 2 to 5 minute limit. Monologues, Standup & Storytelling acts receive 5 to 7 minutes. A subtle amber stage cue lantern signals 30 seconds remaining.' },
  { id: 'faq-4', q: 'Are live instruments or background soundscapes permitted?', a: 'No. To maintain focus on the raw, unfiltered power of your voice and words, no live instruments or background soundscapes are permitted.' },
]

const privileges = [
  { icon: 'workspace_premium', title: 'Patna Ki Pratibha Trophy & Honors', desc: 'Formal physical memento, honorarium, and citation presented by acclaimed literary figures.' },
  { icon: 'podcasts', title: 'AYTA Podcast Spotlight', desc: 'Top three performers in each genre receive full-length conversational podcast features.' },
  { icon: 'diversity_3', title: 'Permanent Artist Collective Access', desc: 'Direct curation for commercial gigs, national college fests, and paid creative residencies.' },
  { icon: 'social_leaderboard', title: 'Viral Spotlight & Fame', desc: 'Clips of winning performances will be heavily promoted and published across our official Instagram and YouTube channels.' },
]

export default function AagaazPage() {
  const [activeTab, setActiveTab] = useState('performer')
  const [openFaq, setOpenFaq] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  useScrollReveal()

  useEffect(() => {
    document.title = 'AAGAAZ 2026 • AYTA Media House | The Grand Cultural Conclave'
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true) }

  return (
    <div className="bg-[var(--color-noir)] font-[var(--font-body-md)] text-[var(--color-on-noir)] antialiased relative overflow-x-hidden min-h-screen">
      <AmbientParticles />

      {/* Ambient halos */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035] mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(#d4a359 0.75px, transparent 0.75px)', backgroundSize: '16px 16px' }} />
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[1100px] h-[720px] bg-gradient-to-b from-[var(--color-accent-ember)]/5 via-[var(--color-gold-leaf)]/5 to-transparent rounded-full blur-[140px] animate-gold-pulse" />
        <div className="absolute top-[35%] -left-48 w-[550px] h-[550px] bg-[var(--color-gold-dark)]/5 rounded-full blur-[160px]" />
        <div className="absolute top-[65%] -right-48 w-[600px] h-[600px] bg-[var(--color-accent-ember)]/5 rounded-full blur-[170px]" />
      </div>

      <Header />

      <main className="relative z-10 w-full pt-24 pb-20">

        {/* ═══ HERO ═══ */}
        <section className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-8 pt-6 pb-20">
          <div className="flex flex-col items-center justify-center text-center mb-8 fade-in-entry">
            <div className="inline-flex items-center gap-3 px-6 py-1.5 rounded-full border border-[var(--color-gold-leaf)]/25 bg-[var(--color-surface-low)]/80 backdrop-blur-md mb-3 shadow-[0_0_20px_rgba(212,163,89,0.12)] hover:border-[var(--color-gold-leaf)]/50 transition-all duration-300">
              <span className="text-[var(--color-gold-leaf)] text-xs animate-pulse">❖</span>
              <span className="font-[var(--font-cinzel)] text-[11px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-gold-gradient">AYTA MEDIA HOUSE PRESENTS • ANNUAL CULTURAL CONCLAVE</span>
              <span className="text-[var(--color-gold-leaf)] text-xs animate-pulse">❖</span>
            </div>
            <div className="flex items-center gap-2 text-[var(--color-muted-text)] font-[var(--font-cinzel)] text-[10px] tracking-[0.25em] uppercase">
              <span>Stories</span><span>•</span><span>Voices</span><span>•</span><span>Culture</span><span>•</span>
              <span className="text-[var(--color-accent-ember)] font-bold drop-shadow-[0_0_8px_rgba(230,90,40,0.6)]">Patna Ki Pratibha</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex flex-col relative">
                <div className="inline-flex items-center gap-2 text-[var(--color-accent-ember)] mb-1 fade-in-entry delay-100">
                  <span className="font-[var(--font-cinzel)] text-xs tracking-[0.3em] uppercase font-bold">A Cultural Stage For Every Voice</span>
                </div>
                <h1 className="font-[var(--font-cinzel)] text-6xl sm:text-7xl lg:text-8xl font-black tracking-wider text-gold-gradient leading-none drop-shadow-[0_6px_30px_rgba(212,163,89,0.35)] animate-title-glow fade-in-entry delay-200">AAGAAZ</h1>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3 fade-in-entry delay-300">
                  <span className="font-[var(--font-hindi)] text-2xl sm:text-3xl text-[var(--color-gold-light)] tracking-wide font-normal drop-shadow-[0_2px_15px_rgba(251,230,190,0.3)]">शब्द जो संसार बदल दें</span>
                  <span className="text-[var(--color-gold-leaf)] text-sm hidden sm:inline animate-pulse">✦</span>
                  <span className="font-[var(--font-cinzel)] text-base sm:text-xl font-bold tracking-[0.22em] text-[var(--color-accent-ember)] uppercase">WORDS THAT MOVE WORLDS</span>
                </div>
              </div>

              {/* Theme decree */}
              <div className="relative gold-card-sheen p-6 sm:p-7 rounded-2xl border-l-4 border-l-[var(--color-gold-leaf)] shadow-2xl overflow-hidden group fade-in-entry delay-400">
                <div className="ornate-corner ornate-corner-tl" /><div className="ornate-corner ornate-corner-tr" />
                <div className="ornate-corner ornate-corner-bl" /><div className="ornate-corner ornate-corner-br" />
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[var(--color-gold-leaf)] text-lg animate-spin" style={{ animationDuration: '20s' }}>auto_awesome</span>
                    <span className="font-[var(--font-cinzel)] text-xs uppercase tracking-[0.28em] text-gold-gradient font-bold">THEME OF THE YEAR — SHAKTI (शक्ति)</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[var(--color-accent-ember)]/20 border border-[var(--color-accent-ember)]/40 text-[var(--color-accent-ember)] font-[var(--font-cinzel)] text-[9px] uppercase tracking-widest font-bold shadow-[0_0_10px_rgba(230,90,40,0.3)]">Solemn Decree</span>
                </div>
                <blockquote className="font-[var(--font-display-hero)] text-xl sm:text-2xl text-[var(--color-gold-light)] italic leading-relaxed my-2">
                  "You worship Shakti in idols, yet overlook the Shakti in the women beside you."
                </blockquote>
                <p className="font-[var(--font-body-md)] text-xs sm:text-sm text-[var(--color-muted-text)] leading-relaxed mt-2 border-t border-[var(--color-gold-leaf)]/15 pt-3">
                  A clarion call for Bihar and Indian storytellers, poets, and performers to reclaim reverence through bold truth, lived experience, and raw artistic resonance.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 fade-in-entry delay-500">
                {[['6', 'Disciplines'], ['₹899', 'Registration Fee'], ['PATNA', 'Grand Stage']].map(([val, label], i) => (
                  <div key={i} className="p-4 rounded-xl bg-[var(--color-surface-low)]/90 border border-[var(--color-gold-leaf)]/15 backdrop-blur-md flex flex-col items-center text-center transition-all duration-300 hover:border-[var(--color-gold-leaf)]/40 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.6)]">
                    <span className={`font-[var(--font-cinzel)] text-3xl font-extrabold ${i === 1 ? 'text-[var(--color-accent-ember)]' : 'text-gold-gradient'}`}>{val}</span>
                    <span className="font-[var(--font-cinzel)] text-[10px] text-[var(--color-muted-text)] uppercase tracking-widest mt-1">{label}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2 fade-in-entry delay-600">
                <a href="#register" className="px-8 py-3.5 rounded-full btn-gold-royal font-[var(--font-cinzel)] text-xs sm:text-sm tracking-[0.2em] font-black uppercase flex items-center gap-2 group">
                  <span>Register For Auditions</span>
                  <span className="material-symbols-outlined text-sm font-bold transform group-hover:translate-x-1.5 transition-transform duration-300">arrow_forward</span>
                </a>
                <a href="#disciplines" className="px-7 py-3.5 rounded-full border border-[var(--color-gold-leaf)]/40 text-[var(--color-gold-light)] hover:bg-[var(--color-gold-leaf)]/10 font-[var(--font-cinzel)] text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-300 flex items-center gap-2 transform hover:scale-105 hover:border-[var(--color-gold-leaf)]">
                  <span className="material-symbols-outlined text-sm text-[var(--color-gold-leaf)]">menu_book</span>
                  <span>Explore Categories</span>
                </a>
              </div>
            </div>

            {/* Right: Poster */}
            <div className="lg:col-span-5 relative fade-in-entry delay-300">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[var(--color-accent-ember)]/20 via-[var(--color-gold-leaf)]/25 to-transparent rounded-3xl blur-2xl animate-gold-pulse pointer-events-none" />
              <div className="relative rounded-3xl p-3 bg-gradient-to-b from-[var(--color-gold-leaf)]/40 via-[var(--color-gold-dark)]/20 to-[var(--color-noir)]/90 shadow-[0_25px_80px_rgba(0,0,0,0.9)] animate-shimmer-border">
                <div className="relative rounded-2xl overflow-hidden bg-[var(--color-noir)]">
                  <div className="relative h-[530px] w-full overflow-hidden group">
                    <img alt="Aagaaz Shakti Manifest Poster" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" src={HERO_POSTER} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-noir)] via-transparent to-[var(--color-noir)]/30" />
                    <div className="absolute top-4 left-4 flex items-center gap-2 bg-[var(--color-noir)]/80 backdrop-blur-md px-3.5 py-1 rounded-full border border-[var(--color-gold-leaf)]/40 shadow-md">
                      <span className="w-2 h-2 rounded-full bg-[var(--color-accent-ember)] animate-ping" />
                      <span className="font-[var(--font-cinzel)] text-[10px] text-[var(--color-gold-light)] uppercase tracking-widest font-semibold">Official 2026 Poster</span>
                    </div>
                    <div className="absolute top-4 right-4 bg-[var(--color-surface-low)]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[var(--color-gold-leaf)]/30 text-[var(--color-gold-leaf)] font-[var(--font-cinzel)] text-[10px] tracking-wider uppercase">Patna Live</div>
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[var(--color-noir)]/85 border border-[var(--color-gold-leaf)]/30 backdrop-blur-xl flex items-center justify-between gap-4 transition-all duration-300 group-hover:border-[var(--color-gold-leaf)]/60">
                      <div className="flex flex-col">
                        <span className="font-[var(--font-cinzel)] text-[10px] text-[var(--color-accent-ember)] tracking-widest uppercase font-bold">Grand Auditorium Finales</span>
                        <span className="font-[var(--font-display-hero)] text-lg text-[var(--color-gold-light)] italic font-semibold">Be Heard. Be Seen. Be Aagaaz.</span>
                      </div>
                      <a href="#register" className="px-3.5 py-1.5 rounded-full text-[var(--color-noir)] font-[var(--font-cinzel)] text-[10px] font-extrabold uppercase tracking-wider shrink-0 hover:opacity-90 transform hover:scale-105 transition-all shadow-md" style={{ background: 'linear-gradient(135deg, #FFF6E5 0%, #F5D79E 28%, #D4A359 62%, #8F6927 100%)' }}>View Poster</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Banner */}
          <div className="mt-12 rounded-2xl overflow-hidden border border-[var(--color-gold-leaf)]/25 shadow-2xl relative bg-[var(--color-noir)] group hover:border-[var(--color-gold-leaf)]/50 transition-all duration-500">
            <div className="relative w-full overflow-hidden">
              <img alt="Aagaaz Conclave Ocean of Words Banner" className="w-full h-auto block transition-transform duration-1000 ease-out group-hover:scale-105" src={BANNER_IMG} />
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-noir)] via-[var(--color-noir)]/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-noir)] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 max-w-xl transition-transform duration-500 group-hover:translate-x-1">
                <span className="font-[var(--font-cinzel)] text-[10px] sm:text-xs text-[var(--color-gold-leaf)] tracking-[0.3em] uppercase font-bold flex items-center gap-1.5">
                  <span className="text-[var(--color-accent-ember)]">✦</span> The Sonic Horizon
                </span>
                <h3 className="font-[var(--font-cinzel)] text-2xl sm:text-4xl text-gold-gradient font-bold uppercase mt-1 leading-tight">An Ocean of Truth, Rising in Bihar</h3>
                <p className="font-[var(--font-body-md)] text-xs sm:text-sm text-[var(--color-muted-text)] mt-2 line-clamp-2">Multi-track studio mastering, cinematic live film footage, and worldwide spotlight distribution on Spotify & YouTube.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ DISCIPLINES ═══ */}
        <section className="relative w-full py-20 bg-[var(--color-surface-low)]/50 border-y border-[var(--color-gold-leaf)]/15" id="disciplines">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
              <div className="flex items-center gap-2 text-[var(--color-gold-leaf)] mb-2">
                <span className="animate-pulse">❖</span>
                <span className="font-[var(--font-cinzel)] text-xs uppercase tracking-[0.35em] text-gold-gradient font-bold">Disciplines of Resonance</span>
                <span className="animate-pulse">❖</span>
              </div>
              <h2 className="font-[var(--font-cinzel)] text-3xl sm:text-5xl font-bold text-[var(--color-gold-light)] uppercase tracking-wide">Five Stages. Countless Truths.</h2>
              <p className="font-[var(--font-body-md)] text-sm sm:text-base text-[var(--color-muted-text)] mt-3">Every category is evaluated by celebrated mentors with unfiltered feedback, cinematic spotlight cuts, and official studio releases.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {disciplines.map(d => (
                <div key={d.num} className="gold-card-sheen rounded-2xl p-6 flex flex-col justify-between relative group cursor-pointer">
                  <div className="ornate-corner ornate-corner-tl" /><div className="ornate-corner ornate-corner-tr" />
                  <div className="ornate-corner ornate-corner-bl" /><div className="ornate-corner ornate-corner-br" />
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="font-[var(--font-cinzel)] text-2xl font-black text-[var(--color-gold-dark)] group-hover:text-[var(--color-gold-leaf)] transition-colors duration-300">{d.num}</span>
                      <div className="w-10 h-10 rounded-full border border-[var(--color-gold-leaf)]/30 bg-[var(--color-surface-high)] flex items-center justify-center text-[var(--color-gold-leaf)] group-hover:bg-[var(--color-gold-leaf)] group-hover:text-[var(--color-noir)] transition-all duration-300 shadow-inner group-hover:rotate-6 group-hover:scale-110">
                        <span className="material-symbols-outlined text-xl">{d.icon}</span>
                      </div>
                    </div>
                    <div>
                      <span className="font-[var(--font-cinzel)] text-[10px] text-[var(--color-accent-ember)] tracking-widest uppercase font-semibold">Stage Act</span>
                      <h3 className="font-[var(--font-cinzel)] text-xl font-bold text-[var(--color-gold-light)] group-hover:text-gold-gradient transition-all mt-0.5">
                        {d.label} <span className="font-[var(--font-hindi)] text-base block font-normal">{d.hindi}</span>
                      </h3>
                    </div>
                    <p className="font-[var(--font-body-md)] text-xs text-[var(--color-muted-text)] leading-relaxed">{d.desc}</p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-[var(--color-gold-leaf)]/15 flex items-center justify-between text-[11px] font-[var(--font-cinzel)]">
                    <span className={`flex items-center gap-1 ${d.ember ? 'text-[var(--color-accent-ember)] font-bold' : 'text-[var(--color-gold-leaf)]'}`}>
                      <span className="material-symbols-outlined text-xs">timer</span> {d.time}
                    </span>
                    <span className="text-[var(--color-muted-text)] uppercase tracking-wider group-hover:text-[var(--color-gold-light)] transition-colors">{d.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ═══ REGISTRATION ═══ */}
        <section className="relative w-full py-20 bg-[var(--color-surface-low)]/80 border-t border-[var(--color-gold-leaf)]/15" id="register">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left benefits */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div className="flex flex-col gap-6">
                  <div>
                    <div className="flex items-center gap-2 text-[var(--color-accent-ember)] mb-2"><span className="text-xs">✦</span><span className="font-[var(--font-cinzel)] text-xs uppercase tracking-[0.3em] font-bold">Official Invitation</span></div>
                    <h2 className="font-[var(--font-cinzel)] text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-gradient leading-tight">Claim Your Voice on the Grand Stage</h2>
                    <p className="font-[var(--font-body-md)] text-sm sm:text-base text-[var(--color-muted-text)] mt-3">Whether you are an established campus poet or a first-time storyteller echoing the raw realities of Bihar, AAGAAZ 2026 welcomes your craft.</p>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden border border-[var(--color-gold-leaf)]/30 shadow-xl group">
                    <div className="relative h-48 w-full overflow-hidden">
                      <img alt="Theatrical Vintage Mic" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src={MIC_IMG} />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-noir)] via-[var(--color-noir)]/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="font-[var(--font-cinzel)] text-[10px] uppercase tracking-widest text-[var(--color-gold-leaf)] font-bold">Studio Master Class Included</span>
                        <p className="font-[var(--font-body-md)] text-xs text-[var(--color-muted-text)] mt-0.5">Every invited performer receives individual 4K cinematic multi-cam cut.</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    {privileges.map(p => (
                      <div key={p.icon} className="flex items-start gap-3 group">
                        <div className="w-8 h-8 rounded-full border border-[var(--color-gold-leaf)]/40 bg-[var(--color-gold-leaf)]/10 text-[var(--color-gold-leaf)] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[var(--color-gold-leaf)] group-hover:text-[var(--color-noir)] transition-all duration-300">
                          <span className="material-symbols-outlined text-base">{p.icon}</span>
                        </div>
                        <div>
                          <h4 className="font-[var(--font-cinzel)] text-sm font-bold text-[var(--color-gold-light)] group-hover:text-gold-gradient transition-colors">{p.title}</h4>
                          <p className="font-[var(--font-body-md)] text-xs text-[var(--color-muted-text)]">{p.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-8 p-4 rounded-xl border border-[var(--color-gold-leaf)]/20 bg-[var(--color-surface-card)]/60 backdrop-blur-md flex items-center justify-between hover:border-[var(--color-gold-leaf)]/40 transition-colors duration-300">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[var(--color-gold-leaf)] text-2xl animate-pulse">support_agent</span>
                    <div className="flex flex-col">
                      <span className="font-[var(--font-cinzel)] text-xs text-[var(--color-gold-light)] font-bold">Curatorial Assistance Desk</span>
                      <span className="font-[var(--font-body-md)] text-[11px] text-[var(--color-muted-text)]">WhatsApp Helpline: +91 91234 56789</span>
                    </div>
                  </div>
                  <a href="https://wa.me/" target="_blank" rel="noreferrer" className="px-3.5 py-1 rounded-full border border-[var(--color-gold-leaf)]/40 text-[var(--color-gold-leaf)] hover:bg-[var(--color-gold-leaf)]/15 font-[var(--font-cinzel)] text-[10px] tracking-wider uppercase transition-all duration-300 transform hover:scale-105">WhatsApp</a>
                </div>
              </div>

              {/* Right form */}
              <div className="lg:col-span-7">
                <div className="gold-card-sheen rounded-3xl p-6 sm:p-10 shadow-2xl relative">
                  <div className="ornate-corner ornate-corner-tl" /><div className="ornate-corner ornate-corner-tr" />
                  <div className="ornate-corner ornate-corner-bl" /><div className="ornate-corner ornate-corner-br" />

                  {/* Tab switcher */}
                  <div className="flex items-center p-1.5 rounded-full bg-[var(--color-noir)]/80 border border-[var(--color-gold-leaf)]/30 mb-8">
                    {[{ id: 'performer', label: 'Performer Audition Docket' }, { id: 'audience', label: 'Patron & Audience Pass' }].map(t => (
                      <button key={t.id} onClick={() => { setActiveTab(t.id); setSubmitted(false) }}
                        className={`flex-1 py-2 text-center rounded-full font-[var(--font-cinzel)] text-xs font-bold transition-all uppercase tracking-wider ${activeTab === t.id ? 'bg-gold-gradient text-[var(--color-noir)] shadow-md' : 'text-[var(--color-muted-text)] hover:text-[var(--color-gold-light)]'}`}
                        style={activeTab === t.id ? { background: 'linear-gradient(135deg, #FFF6E5 0%, #F5D79E 28%, #D4A359 62%, #8F6927 100%)' } : {}}
                      >{t.label}</button>
                    ))}
                  </div>

                  {submitted ? (
                    <div className="flex flex-col items-center justify-center text-center p-8 bg-[var(--color-noir)]/90 rounded-2xl border border-[var(--color-gold-leaf)]/40">
                      <div className="w-16 h-16 rounded-full text-[var(--color-noir)] flex items-center justify-center mb-4 shadow-[0_0_35px_rgba(212,163,89,0.5)] animate-bounce" style={{ animationDuration: '2s', background: 'linear-gradient(135deg, #FFF6E5 0%, #F5D79E 28%, #D4A359 62%, #8F6927 100%)' }}>
                        <span className="material-symbols-outlined text-3xl font-bold">celebration</span>
                      </div>
                      <span className="font-[var(--font-cinzel)] text-xs text-[var(--color-accent-ember)] uppercase tracking-[0.3em] font-bold">Application Registered</span>
                      <h3 className="font-[var(--font-cinzel)] text-2xl font-bold text-[var(--color-gold-light)] mt-1">Swagatam! Welcome to Aagaaz 2026</h3>
                      <p className="font-[var(--font-body-md)] text-xs sm:text-sm text-[var(--color-muted-text)] max-w-md mt-2">Your entry has been received. A digital dossier confirmation has been dispatched to your WhatsApp with badge code: <strong className="text-[var(--color-gold-leaf)]">#AGZ-2026-PAT</strong>.</p>
                      <button onClick={() => setSubmitted(false)} className="mt-6 px-6 py-2 rounded-full border border-[var(--color-gold-leaf)]/40 text-[var(--color-gold-leaf)] hover:bg-[var(--color-gold-leaf)]/10 font-[var(--font-cinzel)] text-xs uppercase tracking-wider transition-all duration-300 transform hover:scale-105">Submit Another Registration</button>
                    </div>
                  ) : activeTab === 'performer' ? (
                    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {[['Performer Full Name *', 'text', 'e.g. Aarav Kashyap'], ['WhatsApp Contact *', 'tel', '+91 98765 43210']].map(([l, t, p]) => (
                          <div key={l} className="flex flex-col gap-1.5">
                            <label className="font-[var(--font-cinzel)] text-[11px] uppercase tracking-wider text-[var(--color-gold-light)] font-semibold">{l}</label>
                            <input className="gold-input-glow w-full bg-[var(--color-surface-card)] border border-[var(--color-gold-leaf)]/25 px-4 py-2.5 rounded-xl text-[var(--color-on-noir)] font-[var(--font-body-md)] text-sm placeholder:text-[var(--color-muted-text)]/40 focus:outline-none" placeholder={p} required type={t} />
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {[['Official Email *', 'email', 'aarav@patna.edu'], ['Institution / City *', 'text', 'e.g. NIT Patna']].map(([l, t, p]) => (
                          <div key={l} className="flex flex-col gap-1.5">
                            <label className="font-[var(--font-cinzel)] text-[11px] uppercase tracking-wider text-[var(--color-gold-light)] font-semibold">{l}</label>
                            <input className="gold-input-glow w-full bg-[var(--color-surface-card)] border border-[var(--color-gold-leaf)]/25 px-4 py-2.5 rounded-xl text-[var(--color-on-noir)] font-[var(--font-body-md)] text-sm placeholder:text-[var(--color-muted-text)]/40 focus:outline-none" placeholder={p} required type={t} />
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-1.5">
                          <label className="font-[var(--font-cinzel)] text-[11px] uppercase tracking-wider text-[var(--color-gold-light)] font-semibold">Performance Category *</label>
                          <select className="gold-input-glow w-full bg-[var(--color-surface-card)] border border-[var(--color-gold-leaf)]/25 px-4 py-2.5 rounded-xl text-[var(--color-on-noir)] font-[var(--font-body-md)] text-sm focus:outline-none cursor-pointer" required>
                            <option value="" disabled>Choose discipline</option>
                            <option value="poetry">Poetry (Kavita) [2 - 5 Mins]</option>
                            <option value="shayari">Shayari / Nazm [2 - 5 Mins]</option>
                            <option value="roleplay">Role Play [2 - 5 Mins]</option>
                            <option value="storytelling">Storytelling [2 - 5 Mins]</option>
                            <option value="comedy">Standup Comedy [2 - 5 Mins]</option>
                            <option value="nukad">Nukad Natak [7 - 10 Mins]</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="font-[var(--font-cinzel)] text-[11px] uppercase tracking-wider text-[var(--color-gold-light)] font-semibold">Language *</label>
                          <select className="gold-input-glow w-full bg-[var(--color-surface-card)] border border-[var(--color-gold-leaf)]/25 px-4 py-2.5 rounded-xl text-[var(--color-on-noir)] font-[var(--font-body-md)] text-sm focus:outline-none cursor-pointer">
                            <option value="hindi">Hindi</option>
                            <option value="english">English</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="font-[var(--font-cinzel)] text-[11px] uppercase tracking-wider text-[var(--color-gold-light)] font-semibold">Title of Piece (SHAKTI Theme) *</label>
                        <input className="gold-input-glow w-full bg-[var(--color-surface-card)] border border-[var(--color-gold-leaf)]/25 px-4 py-2.5 rounded-xl text-[var(--color-on-noir)] font-[var(--font-body-md)] text-sm placeholder:text-[var(--color-muted-text)]/40 focus:outline-none" placeholder="e.g. Durga Ke Haath, Kalam Ki Taakat" required type="text" />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="font-[var(--font-cinzel)] text-[11px] uppercase tracking-wider text-[var(--color-gold-light)] font-semibold">Script Draft / Synopsis (Max 300 Words)</label>
                        <textarea className="gold-input-glow w-full bg-[var(--color-surface-card)] border border-[var(--color-gold-leaf)]/25 px-4 py-2.5 rounded-xl text-[var(--color-on-noir)] font-[var(--font-body-md)] text-sm placeholder:text-[var(--color-muted-text)]/40 focus:outline-none resize-none" placeholder="Paste the key lines of your poetry or monologue..." rows="3" />
                      </div>
                      <div className="flex items-start gap-3 pt-1">
                        <input className="mt-1 rounded cursor-pointer w-4 h-4 transition-transform hover:scale-110" id="performer-terms" required type="checkbox" />
                        <label className="font-[var(--font-body-md)] text-xs text-[var(--color-muted-text)] cursor-pointer leading-relaxed" htmlFor="performer-terms">
                          I declare this submission is original and I consent to live broadcast and audio archiving by AYTA Media House.
                        </label>
                      </div>
                      <div className="pt-2">
                        <button className="w-full py-4 rounded-xl btn-gold-royal font-[var(--font-cinzel)] text-sm font-extrabold uppercase tracking-[0.25em] flex items-center justify-center gap-2 shadow-2xl" type="submit">
                          <span className="material-symbols-outlined text-base font-bold">verified</span>
                          <span>Submit Aagaaz 2026 Festival Entry</span>
                        </button>
                      </div>
                    </form>
                  ) : (
                    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                      <div className="p-4 rounded-xl bg-[var(--color-surface-high)] border border-[var(--color-gold-leaf)]/30 text-[var(--color-gold-light)] flex items-center gap-3">
                        <span className="material-symbols-outlined text-[var(--color-accent-ember)] text-2xl animate-pulse">confirmation_number</span>
                        <p className="font-[var(--font-body-md)] text-xs text-[var(--color-muted-text)]">Complimentary VIP patron badges are strictly governed by auditorium capacity. Digital passes generated upon confirmation.</p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {[['Attendee Name *', 'text', 'e.g. Priya Sinha'], ['WhatsApp Number *', 'tel', '+91 99887 76655']].map(([l, t, p]) => (
                          <div key={l} className="flex flex-col gap-1.5">
                            <label className="font-[var(--font-cinzel)] text-[11px] uppercase tracking-wider text-[var(--color-gold-light)] font-semibold">{l}</label>
                            <input className="gold-input-glow w-full bg-[var(--color-surface-card)] border border-[var(--color-gold-leaf)]/25 px-4 py-2.5 rounded-xl text-[var(--color-on-noir)] font-[var(--font-body-md)] text-sm placeholder:text-[var(--color-muted-text)]/40 focus:outline-none" placeholder={p} required type={t} />
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="font-[var(--font-cinzel)] text-[11px] uppercase tracking-wider text-[var(--color-gold-light)] font-semibold">Email For E-Pass *</label>
                        <input className="gold-input-glow w-full bg-[var(--color-surface-card)] border border-[var(--color-gold-leaf)]/25 px-4 py-2.5 rounded-xl text-[var(--color-on-noir)] font-[var(--font-body-md)] text-sm placeholder:text-[var(--color-muted-text)]/40 focus:outline-none" placeholder="priya@domain.com" required type="email" />
                      </div>
                      <div className="flex items-start gap-3 pt-1">
                        <input className="mt-1 rounded cursor-pointer w-4 h-4" id="audience-terms" required type="checkbox" />
                        <label className="font-[var(--font-body-md)] text-xs text-[var(--color-muted-text)] cursor-pointer leading-relaxed" htmlFor="audience-terms">I agree to arrive 30 minutes prior to gate closing. Seating is first-come, first-serve.</label>
                      </div>
                      <div className="pt-2">
                        <button className="w-full py-4 rounded-xl bg-[var(--color-accent-ember)] hover:bg-orange-600 text-white font-[var(--font-cinzel)] text-sm font-extrabold uppercase tracking-[0.25em] flex items-center justify-center gap-2 shadow-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(230,90,40,0.5)]" type="submit">
                          <span className="material-symbols-outlined text-base font-bold">qr_code_2</span>
                          <span>Reserve Free Audience Pass</span>
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ FAQ ═══ */}
        <section className="relative w-full py-20">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8">
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
              <span className="font-[var(--font-cinzel)] text-xs text-[var(--color-accent-ember)] uppercase tracking-[0.3em] font-bold">Curatorial Clarifications</span>
              <h2 className="font-[var(--font-cinzel)] text-3xl sm:text-4xl font-bold text-[var(--color-gold-light)] uppercase mt-1">Frequently Asked Questions</h2>
            </div>
            <div className="max-w-3xl mx-auto flex flex-col gap-4">
              {faqs.map(f => (
                <div key={f.id} className="gold-card-sheen rounded-2xl p-5 border border-[var(--color-gold-leaf)]/20 transition-all duration-300 hover:border-[var(--color-gold-leaf)]/50">
                  <h4 className="font-[var(--font-cinzel)] text-base text-[var(--color-gold-light)] font-bold flex items-center justify-between cursor-pointer group" onClick={() => setOpenFaq(openFaq === f.id ? null : f.id)}>
                    <span className="group-hover:text-gold-gradient transition-colors">{f.q}</span>
                    <span className="material-symbols-outlined text-[var(--color-gold-leaf)] transform transition-transform duration-300" style={{ transform: openFaq === f.id ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</span>
                  </h4>
                  <div className="overflow-hidden transition-all duration-500" style={{ maxHeight: openFaq === f.id ? '200px' : '0px' }}>
                    <p className="font-[var(--font-body-md)] text-xs sm:text-sm text-[var(--color-muted-text)] mt-2 leading-relaxed">{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ TROUPE BANNER ═══ */}
        <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 mb-6">
          <div className="rounded-3xl p-8 sm:p-10 border border-[var(--color-gold-leaf)]/30 bg-gradient-to-r from-[var(--color-surface-card)] via-[var(--color-noir)] to-[var(--color-surface-card)] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden transition-all duration-500 hover:border-[var(--color-gold-leaf)]/60">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full border border-[var(--color-gold-leaf)]/40 bg-[var(--color-gold-leaf)]/10 flex items-center justify-center text-[var(--color-gold-leaf)] shrink-0 shadow-[0_0_15px_rgba(212,163,89,0.2)]">
                <span className="material-symbols-outlined text-3xl animate-pulse">groups_2</span>
              </div>
              <div className="flex flex-col">
                <span className="font-[var(--font-cinzel)] text-lg sm:text-xl font-bold text-[var(--color-gold-light)]">Have a college troupe, drama club, or cultural society?</span>
                <span className="font-[var(--font-body-md)] text-xs sm:text-sm text-[var(--color-muted-text)]">Dedicated campus delegation slots with institutional accreditation and collective billing.</span>
              </div>
            </div>
            <a href="mailto:events@aytamedia.com?subject=College%20Troupe%20Registration%20Aagaaz%202026" className="px-6 py-3 rounded-full border border-[var(--color-gold-leaf)] text-[var(--color-gold-light)] hover:bg-[var(--color-gold-leaf)] hover:text-[var(--color-noir)] font-[var(--font-cinzel)] text-xs font-bold tracking-widest uppercase transition-all duration-300 shrink-0 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(212,163,89,0.4)]">Email Festival Desk</a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
