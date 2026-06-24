import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Brain, Monitor, Palette, TrendingUp, GraduationCap, FlaskConical, X, ArrowRight } from 'lucide-react'

const divisions = [
  {
    id: 'moguls-ai',
    number: '01',
    label: 'Moguls AI',
    icon: Brain,
    color: '#4338CA',
    glowColor: 'rgba(67, 56, 202, 0.4)',
    angle: -90,
    status: 'ACTIVE',
    purpose: 'Autonomous AI systems, custom agents, and intelligent process automation for enterprise-grade operations.',
    services: ['AI Agent Development', 'Custom LLM Dashboards', 'Process Automation', 'Predictive Analytics', 'Neural Workflow Systems'],
    revenue: 'Setup Fee + SaaS Retainer',
    emoji: '🤖',
  },
  {
    id: 'oracle-os',
    number: '02',
    label: 'Oracle OS',
    icon: Monitor,
    color: '#8B5CF6',
    glowColor: 'rgba(139, 92, 246, 0.4)',
    angle: -30,
    status: 'ACTIVE',
    purpose: 'AI-powered strategic intelligence layer — the operating system for elite business decision-making.',
    services: ['Mission Control KPIs', 'Company Digital Twin', 'Competitor Matrix', 'Simulation Engine', 'Executive Briefings'],
    revenue: 'Enterprise SaaS License',
    emoji: '🔮',
    path: '/oracle-os',
  },
  {
    id: 'moguls-studio',
    number: '03',
    label: 'Moguls Studio',
    icon: Palette,
    color: '#C79A38',
    glowColor: 'rgba(199, 154, 56, 0.4)',
    angle: 30,
    status: 'ACTIVE',
    purpose: 'Brand identity, UI/UX, packaging, and premium presentation architecture for elite operators.',
    services: ['Brand Identity Systems', 'UI/UX Design', 'Pitch Architecture', 'Motion Design', 'Content Production'],
    revenue: 'Project Retainer + Royalties',
    emoji: '🎨',
  },
  {
    id: 'moguls-growth',
    number: '04',
    label: 'Moguls Growth',
    icon: TrendingUp,
    color: '#10B981',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    angle: 90,
    status: 'ACTIVE',
    purpose: 'Performance marketing, growth engineering, and high-velocity lead acquisition at institutional scale.',
    services: ['Performance Marketing', 'Lead Velocity Systems', 'Partnership Mapping', 'Funnel Architecture', 'Growth Analytics'],
    revenue: 'Performance Fee + Retainer',
    emoji: '📈',
  },
  {
    id: 'moguls-academy',
    number: '05',
    label: 'Moguls Academy',
    icon: GraduationCap,
    color: '#F59E0B',
    glowColor: 'rgba(245, 158, 11, 0.4)',
    angle: 150,
    status: 'BUILDING',
    purpose: 'Elite education, corporate training, and creator monetization programs for the next generation of operators.',
    services: ['Corporate Training Tracks', 'AI & Automation Courses', 'Creator Monetization', 'Executive Coaching', 'Cohort Programs'],
    revenue: 'Course Sales + Memberships',
    emoji: '🎓',
  },
  {
    id: 'moguls-labs',
    number: '06',
    label: 'Moguls Labs',
    icon: FlaskConical,
    color: '#EC4899',
    glowColor: 'rgba(236, 72, 153, 0.4)',
    angle: 210,
    status: 'DEVELOPMENT',
    purpose: 'R&D incubator for next-generation SaaS micro-apps, experimental tech, and future business architecture.',
    services: ['SaaS Micro-App Incubation', 'Tech Experimentation', 'Prototype Development', 'IP Creation', 'Future Building'],
    revenue: 'Equity + Revenue Share',
    emoji: '🧪',
  },
]

const RADIUS = 220
const CENTER = 320

export default function EcosystemMap() {
  const [activeDiv, setActiveDiv] = useState<string | null>(null)
  const active = divisions.find(d => d.id === activeDiv) || null

  return (
    <section className="relative py-28 overflow-hidden" style={{ background: 'linear-gradient(180deg, #F8F9FC 0%, #F1F3FA 100%)' }}>
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="section-label mb-3">THE EMPIRE SYSTEM — ONE VISION, SIX DIVISIONS, INFINITE IMPACT</div>
          <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 48px)', color: '#0F172A', letterSpacing: '0.02em' }}>
            The Mansas Moguls{' '}
            <span style={{ background: 'linear-gradient(135deg, #F0D597, #C79A38, #8B6914)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Ecosystem Map
            </span>
          </h2>
          <p className="mt-4 text-[#64748B] max-w-xl mx-auto text-sm" style={{ fontFamily: 'Inter' }}>
            Six specialized divisions, each a powerhouse in its domain, seamlessly integrated into one unstoppable empire.
          </p>
        </motion.div>
      </div>

      {/* Map Container */}
      <div className="relative flex items-center justify-center" style={{ minHeight: '680px' }}>
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 640 640"
          preserveAspectRatio="xMidYMid meet"
          style={{ maxWidth: '640px', margin: '0 auto', left: '50%', transform: 'translateX(-50%)' }}
        >
          {divisions.map((div) => {
            const angleRad = (div.angle * Math.PI) / 180
            const nx = CENTER + RADIUS * Math.cos(angleRad)
            const ny = CENTER + RADIUS * Math.sin(angleRad) * 0.7 + 60
            const isActive = activeDiv === div.id
            return (
              <g key={div.id}>
                <line
                  x1={CENTER} y1={CENTER + 30}
                  x2={nx} y2={ny}
                  stroke={isActive ? div.color : 'rgba(199,154,56,0.2)'}
                  strokeWidth={isActive ? 2 : 1}
                  strokeDasharray="6 4"
                  className="connector-path"
                  style={{ transition: 'stroke 0.3s, stroke-width 0.3s' }}
                />
                {/* Animated particle */}
                {isActive && (
                  <circle r="3" fill={div.color} opacity="0.9">
                    <animateMotion
                      dur="2s"
                      repeatCount="indefinite"
                      path={`M ${CENTER} ${CENTER + 30} L ${nx} ${ny}`}
                    />
                  </circle>
                )}
              </g>
            )
          })}
        </svg>

        {/* Central Hub */}
        <div className="absolute" style={{
          left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 10,
        }}>
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div style={{
              width: '130px', height: '130px',
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              background: 'linear-gradient(135deg, #1E1B4B 0%, #12103A 100%)',
              border: 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 50px rgba(67,56,202,0.3), 0 0 100px rgba(67,56,202,0.1)',
              position: 'relative',
            }}>
              <div className="text-center">
                <svg viewBox="0 0 60 50" className="w-12 h-10 mx-auto mb-1">
                  <defs>
                    <linearGradient id="hubGold" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F0D597" />
                      <stop offset="50%" stopColor="#C79A38" />
                      <stop offset="100%" stopColor="#8B6914" />
                    </linearGradient>
                  </defs>
                  <path d="M8 38 L12 24 L20 32 L30 18 L40 32 L48 24 L52 38 Z" fill="url(#hubGold)" />
                  <rect x="8" y="38" width="44" height="4" rx="1.5" fill="url(#hubGold)" />
                  <polygon points="30,16 33,20 30,22 27,20" fill="#4338CA" />
                </svg>
                <div style={{ fontFamily: 'Space Grotesk', fontSize: '7px', fontWeight: 700, letterSpacing: '0.1em', background: 'linear-gradient(135deg, #F0D597, #C79A38)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  MANSAS<br />MOGULS
                </div>
              </div>
            </div>
            {/* Outer ring */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div style={{
                width: '170px', height: '60px',
                border: '1px solid rgba(199,154,56,0.25)',
                borderRadius: '50%',
                transform: 'rotateX(75deg)',
                animation: 'orbitRotate 10s linear infinite',
              }} />
            </div>
          </motion.div>
        </div>

        {/* Division Nodes */}
        {divisions.map((div, i) => {
          const angleRad = (div.angle * Math.PI) / 180
          const nx = 50 + (RADIUS / 640) * 100 * Math.cos(angleRad)
          const ny = 50 + (RADIUS * 0.7 / 640) * 100 * Math.sin(angleRad) + (60 / 640) * 100
          const Icon = div.icon
          const isActive = activeDiv === div.id

          return (
            <motion.div
              key={div.id}
              className="absolute"
              style={{
                left: `calc(50% + ${RADIUS * Math.cos(angleRad)}px)`,
                top: `calc(50% + ${RADIUS * 0.7 * Math.sin(angleRad) + 30}px)`,
                transform: 'translate(-50%, -50%)',
                zIndex: isActive ? 20 : 5,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={() => setActiveDiv(isActive ? null : div.id)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
                className="relative flex flex-col items-center gap-2"
                data-cursor-hover
              >
                {/* Node platform */}
                <div style={{
                  width: '88px', height: '88px',
                  borderRadius: '16px',
                  background: isActive
                    ? `linear-gradient(135deg, ${div.color}22, ${div.color}11)`
                    : 'rgba(255,255,255,0.85)',
                  border: isActive ? `2px solid ${div.color}` : '1.5px solid rgba(199,154,56,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  backdropFilter: 'blur(16px)',
                  boxShadow: isActive
                    ? `0 0 30px ${div.glowColor}, 0 4px 20px rgba(0,0,0,0.08)`
                    : '0 4px 20px rgba(0,0,0,0.06)',
                  transition: 'all 0.3s ease',
                  flexDirection: 'column',
                  gap: '4px',
                  animation: isActive ? 'nodePulse 2s ease-in-out infinite' : 'none',
                }}>
                  <Icon size={22} color={isActive ? div.color : '#475569'} style={{ transition: 'color 0.3s' }} />
                  <div style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', color: '#94A3B8', letterSpacing: '0.08em' }}>{div.number}</div>
                </div>

                {/* Label */}
                <div style={{
                  fontFamily: 'Space Grotesk',
                  fontSize: '11px',
                  fontWeight: 600,
                  color: isActive ? div.color : '#0F172A',
                  letterSpacing: '0.04em',
                  textAlign: 'center',
                  transition: 'color 0.3s',
                  whiteSpace: 'nowrap',
                }}>
                  {div.label}
                </div>

                {/* Status */}
                <div style={{
                  fontFamily: 'JetBrains Mono',
                  fontSize: '8px',
                  letterSpacing: '0.1em',
                  padding: '2px 8px',
                  borderRadius: '999px',
                  background: div.status === 'ACTIVE' ? 'rgba(16,185,129,0.1)' : div.status === 'BUILDING' ? 'rgba(245,158,11,0.1)' : 'rgba(139,92,246,0.1)',
                  color: div.status === 'ACTIVE' ? '#10B981' : div.status === 'BUILDING' ? '#F59E0B' : '#8B5CF6',
                  border: `1px solid ${div.status === 'ACTIVE' ? 'rgba(16,185,129,0.25)' : div.status === 'BUILDING' ? 'rgba(245,158,11,0.25)' : 'rgba(139,92,246,0.25)'}`,
                }}>
                  {div.status}
                </div>
              </motion.button>
            </motion.div>
          )
        })}
      </div>

      {/* Detail card panel */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto px-6 mt-8"
          >
            <div className="glass-panel rounded-2xl p-8 relative">
              <button
                onClick={() => setActiveDiv(null)}
                className="absolute top-4 right-4 text-[#94A3B8] hover:text-[#C79A38] transition-colors"
                data-cursor-hover
              >
                <X size={18} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div style={{ fontSize: '28px' }}>{active.emoji}</div>
                    <div>
                      <div className="section-label">{active.number} / DIVISION</div>
                      <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '22px', color: active.color }}>
                        {active.label}
                      </h3>
                    </div>
                  </div>
                  <p className="text-[#475569] text-sm leading-relaxed mb-6" style={{ fontFamily: 'Inter' }}>
                    {active.purpose}
                  </p>
                  <div>
                    <div className="section-label mb-3">PRIMARY SERVICES</div>
                    <div className="flex flex-wrap gap-2">
                      {active.services.map(s => (
                        <span key={s} style={{
                          fontFamily: 'JetBrains Mono', fontSize: '10px', padding: '4px 12px',
                          background: `${active.color}12`, color: active.color,
                          border: `1px solid ${active.color}30`, borderRadius: '4px',
                          letterSpacing: '0.06em',
                        }}>{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="section-label mb-2">REVENUE MODEL</div>
                    <div style={{ fontFamily: 'Space Grotesk', fontSize: '14px', fontWeight: 600, color: '#0F172A' }}>
                      {active.revenue}
                    </div>
                  </div>
                  <div>
                    <div className="section-label mb-2">STATUS</div>
                    <div className={active.status === 'ACTIVE' ? 'badge-active' : 'badge-building'}>
                      {active.status}
                    </div>
                  </div>
                  <Link
                    to={active.path || `/divisions/${active.id}`}
                    className="btn-gold mt-4 w-full justify-center text-xs py-3 block text-center"
                    data-cursor-hover
                  >
                    Deep Dive
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Instruction hint */}
      {!active && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
          style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#94A3B8', letterSpacing: '0.16em' }}
        >
          ↑ CLICK ANY DIVISION NODE TO EXPLORE
        </motion.p>
      )}
    </section>
  )
}
