import React, { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0])
  const heroY = useTransform(scrollY, [0, 400], [0, 60])

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      setMousePos({
        x: (e.clientX - cx) / cx,
        y: (e.clientY - cy) / cy,
      })
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  const rx = mousePos.y * -6
  const ry = mousePos.x * 6

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #FFFFFF 0%, #F8F9FC 50%, #F1F3FA 100%)' }}
    >
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(67,56,202,0.04) 0%, transparent 70%)',
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 40% 30% at 50% 38%, rgba(199,154,56,0.06) 0%, transparent 60%)',
      }} />

      {/* HUD top-left */}
      <motion.div
        className="absolute top-28 left-8 hidden lg:block"
        style={{ opacity: heroOpacity }}
      >
        <div className="space-y-4">
          <div className="section-label mb-3">MM // ECOSYSTEM v2.0</div>
          <div className="space-y-3">
            {[
              { label: 'MISSION', value: 'BUILD. ACQUIRE. SCALE.' },
              { label: 'NETWORK', value: 'OPTIMAL' },
              { label: 'CAPITAL', value: 'DEPLOYED' },
              { label: 'ECOSYSTEM', value: 'EXCEPTIONAL' },
            ].map(item => (
              <div key={item.label} className="hud-metric">
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', color: '#94A3B8', letterSpacing: '0.14em' }}>{item.label}</div>
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: '11px', color: '#0F172A', fontWeight: 500, letterSpacing: '0.08em' }}>{item.value}</div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <div className="section-label mb-2">CORE PILLARS</div>
            {['CAPITAL INTELLIGENCE', 'OPERATIONAL EXCELLENCE', 'STRATEGIC ACQUISITIONS', 'TALENT BUILDING', 'LEGACY BUILDING'].map(p => (
              <div key={p} style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', color: '#64748B', letterSpacing: '0.1em', marginBottom: '4px' }}>
                — {p}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* HUD top-right */}
      <motion.div
        className="absolute top-28 right-8 hidden lg:block"
        style={{ opacity: heroOpacity }}
      >
        <div className="space-y-4">
          <div className="section-label mb-3 text-right">STRATEGIC OVERVIEW</div>
          {/* Mini chart */}
          <div className="glass-panel rounded-lg p-4 w-48">
            <svg viewBox="0 0 160 60" className="w-full">
              <defs>
                <linearGradient id="chartGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4338CA" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#C79A38" stopOpacity="0.9" />
                </linearGradient>
              </defs>
              <polyline
                points="0,55 20,48 40,42 60,35 80,28 100,20 120,14 140,8 160,3"
                fill="none"
                stroke="url(#chartGrad)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <polyline
                points="0,55 20,48 40,42 60,35 80,28 100,20 120,14 140,8 160,3 160,60 0,60"
                fill="url(#chartGrad)"
                opacity="0.12"
              />
            </svg>
            <div style={{ fontFamily: 'JetBrains Mono', fontSize: '8px', color: '#10B981', letterSpacing: '0.12em', marginTop: '4px' }}>↑ EXPONENTIAL GROWTH</div>
          </div>
          {/* Portfolio metrics */}
          <div className="space-y-2">
            {[
              { label: 'PORTFOLIO', value: '7+' },
              { label: 'PRODUCTS', value: '14' },
              { label: 'TEAM MEMBERS', value: '38' },
              { label: 'VALUATION', value: '$1.2B+' },
            ].map(m => (
              <div key={m.label} className="flex justify-between gap-8">
                <span style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', color: '#94A3B8', letterSpacing: '0.12em' }}>{m.label}</span>
                <span style={{ fontFamily: 'Space Grotesk', fontSize: '11px', fontWeight: 600, color: '#0F172A' }}>{m.value}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Central content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6"
        style={{ y: heroY }}
      >
        {/* 3D Crown / Logo Island */}
        <motion.div
          className="relative mb-12"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            transform: `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)`,
            transition: 'transform 0.1s ease',
          }}
        >
          {/* Platform layers */}
          <div className="relative flex flex-col items-center">
            {/* Orbital ring 1 */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div style={{
                width: '280px',
                height: '100px',
                border: '1.5px solid rgba(199,154,56,0.3)',
                borderRadius: '50%',
                transform: 'rotateX(75deg)',
                animation: 'orbitRotate 12s linear infinite',
              }} />
            </div>
            {/* Orbital ring 2 */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div style={{
                width: '220px',
                height: '80px',
                border: '1px solid rgba(67,56,202,0.25)',
                borderRadius: '50%',
                transform: 'rotateX(75deg)',
                animation: 'orbitRotateReverse 9s linear infinite',
              }} />
            </div>
            {/* Orbital ring 3 */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div style={{
                width: '340px',
                height: '120px',
                border: '1px dashed rgba(199,154,56,0.15)',
                borderRadius: '50%',
                transform: 'rotateX(75deg)',
                animation: 'orbitRotate 18s linear infinite',
              }} />
            </div>

            {/* Platform base layers */}
            <div className="relative" style={{ perspective: '600px', marginTop: '60px' }}>
              {/* Bottom platform */}
              <div style={{
                width: '220px', height: '16px',
                background: 'linear-gradient(180deg, rgba(30,27,75,0.9) 0%, rgba(14,13,40,0.95) 100%)',
                border: '1px solid rgba(199,154,56,0.4)',
                borderRadius: '4px',
                boxShadow: '0 4px 30px rgba(67,56,202,0.25), 0 0 40px rgba(67,56,202,0.1)',
                marginTop: '8px',
              }} />
              {/* Mid platform */}
              <div style={{
                width: '190px', height: '12px',
                background: 'linear-gradient(180deg, rgba(30,27,75,0.85) 0%, rgba(14,13,40,0.9) 100%)',
                border: '1px solid rgba(199,154,56,0.35)',
                borderRadius: '3px',
                margin: '0 auto',
                boxShadow: '0 2px 20px rgba(67,56,202,0.2)',
                marginTop: '-3px',
              }} />
              {/* Main platform */}
              <div style={{
                width: '160px', height: '10px',
                background: 'linear-gradient(180deg, rgba(199,154,56,0.15) 0%, rgba(30,27,75,0.9) 100%)',
                border: '1px solid rgba(199,154,56,0.5)',
                borderRadius: '3px',
                margin: '0 auto',
                marginTop: '-2px',
              }} />

              {/* Crown badge */}
              <div className="absolute left-1/2 -translate-x-1/2" style={{ top: '-110px' }}>
                <div style={{
                  width: '100px',
                  height: '100px',
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  background: 'linear-gradient(135deg, #1E1B4B 0%, #12103A 100%)',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 40px rgba(199,154,56,0.3), 0 0 80px rgba(67,56,202,0.2)',
                  animation: 'glow 4s ease-in-out infinite',
                  position: 'relative',
                }}>
                  <svg viewBox="0 0 80 80" className="w-16 h-16">
                    <defs>
                      <linearGradient id="crownGold" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#F0D597" />
                        <stop offset="40%" stopColor="#C79A38" />
                        <stop offset="100%" stopColor="#8B6914" />
                      </linearGradient>
                    </defs>
                    {/* Crown shape */}
                    <path d="M18 54 L22 36 L30 46 L40 28 L50 46 L58 36 L62 54 Z" fill="url(#crownGold)" />
                    <rect x="18" y="54" width="44" height="5" rx="2" fill="url(#crownGold)" />
                    {/* Gem */}
                    <polygon points="40,26 43,30 40,32 37,30" fill="#4338CA" />
                    {/* MM text */}
                    <text x="40" y="72" textAnchor="middle" fill="url(#crownGold)" fontSize="10" fontFamily="Space Grotesk" fontWeight="700" letterSpacing="1">MM</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Title Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="glass-panel rounded-xl px-10 py-8 max-w-2xl w-full relative"
          style={{
            boxShadow: '0 24px 80px rgba(31,38,135,0.08), 0 1px 0 rgba(255,255,255,0.9) inset',
          }}
        >
          {/* Corner screws */}
          {['top-3 left-3', 'top-3 right-3', 'bottom-3 left-3', 'bottom-3 right-3'].map(pos => (
            <div key={pos} className={`absolute ${pos} w-2.5 h-2.5 rounded-full`} style={{ background: 'radial-gradient(circle, #F0D597 0%, #C79A38 40%, #8B6914 100%)', boxShadow: '0 0 4px rgba(199,154,56,0.5)' }} />
          ))}

          <div className="section-label mb-3">BUILDING THE FUTURE · OWNING THE NOW · INSPIRING FOREVER</div>

          <h1 style={{
            fontFamily: 'Space Grotesk',
            fontWeight: 800,
            fontSize: 'clamp(32px, 5vw, 56px)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            background: 'linear-gradient(135deg, #F0D597 0%, #C79A38 40%, #8B6914 80%, #F0D597 100%)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'shimmer 5s linear infinite',
            lineHeight: 1.1,
          }}>
            Mansas Moguls
          </h1>

          <div style={{
            fontFamily: 'JetBrains Mono',
            fontSize: 'clamp(10px, 1.5vw, 14px)',
            letterSpacing: '0.28em',
            color: '#475569',
            textTransform: 'uppercase',
            marginTop: '10px',
            marginBottom: '16px',
          }}>
            — Empire Operating System —
          </div>

          <p className="text-[#64748B] text-sm leading-relaxed max-w-md mx-auto mb-8" style={{ fontFamily: 'Inter' }}>
            A multi-division empire built on capital intelligence, operational supremacy, and strategic vision. We don't just build companies — we architect legacies.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/divisions" className="btn-gold" data-cursor-hover>
              Explore The System
              <ArrowRight size={14} />
            </Link>
            <Link to="/oracle-os" className="btn-outline-gold" data-cursor-hover>
              Oracle OS
            </Link>
          </div>
        </motion.div>

        {/* Bottom HUD stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex gap-8 mt-10 flex-wrap justify-center"
        >
          {[
            { label: 'SYSTEM STATUS', value: 'OPTIMAL', color: '#10B981' },
            { label: 'NETWORK', value: 'ACTIVE', color: '#10B981' },
            { label: 'CAPITAL DEPLOYMENT', value: 'HIGH', color: '#F59E0B' },
            { label: 'ECOSYSTEM HEALTH', value: 'EXCEPTIONAL', color: '#10B981' },
          ].map(item => (
            <div key={item.label} className="text-center">
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', color: '#94A3B8', letterSpacing: '0.14em', textTransform: 'uppercase' }}>{item.label}</div>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: '11px', color: item.color, letterSpacing: '0.1em', fontWeight: 500 }}>{item.value}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ opacity: 0.5 }}
      >
        <span style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', color: '#94A3B8', letterSpacing: '0.2em' }}>SCROLL</span>
        <ChevronDown size={14} color="#C79A38" />
      </motion.div>
    </section>
  )
}
