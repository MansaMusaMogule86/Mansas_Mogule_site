import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Brain, Monitor, Palette, TrendingUp, GraduationCap, FlaskConical, ArrowRight } from 'lucide-react'

const divisions = [
  {
    id: 'moguls-ai',
    number: '01',
    title: 'Moguls AI',
    tagline: 'Intelligence at Machine Speed',
    desc: 'Autonomous AI systems, custom agents, and intelligent process automation that transforms your operations from manual to machine-speed.',
    icon: Brain,
    color: '#4338CA',
    status: 'ACTIVE',
    services: ['AI Agent Development', 'Custom LLM Dashboards', 'Process Automation', 'Predictive Analytics'],
    revenue: 'Setup Fee + SaaS Retainer',
  },
  {
    id: 'moguls-studio',
    number: '03',
    title: 'Moguls Studio',
    tagline: 'Brand Architecture at the Highest Level',
    desc: 'From identity systems to cinematic brand films — we architect premium visual empires that command instant market authority.',
    icon: Palette,
    color: '#C79A38',
    status: 'ACTIVE',
    services: ['Brand Identity Systems', 'UI/UX Design', 'Pitch Architecture', 'Motion Design'],
    revenue: 'Project + Retainer',
  },
  {
    id: 'moguls-growth',
    number: '04',
    title: 'Moguls Growth',
    tagline: 'Performance-Engineered Scaling',
    desc: 'High-velocity lead acquisition, strategic partnership mapping, and performance marketing at institutional scale.',
    icon: TrendingUp,
    color: '#10B981',
    status: 'ACTIVE',
    services: ['Performance Marketing', 'Lead Velocity Systems', 'Partnership Mapping', 'Growth Analytics'],
    revenue: 'Performance Fee + Retainer',
  },
  {
    id: 'moguls-academy',
    number: '05',
    title: 'Moguls Academy',
    tagline: 'Elevating the Next Generation',
    desc: 'Elite education programs, corporate training tracks, and creator monetization systems for ambitious operators.',
    icon: GraduationCap,
    color: '#F59E0B',
    status: 'BUILDING',
    services: ['Corporate Training', 'AI Workshops', 'Creator Monetization', 'Cohort Programs'],
    revenue: 'Course Sales + Memberships',
  },
  {
    id: 'moguls-labs',
    number: '06',
    title: 'Moguls Labs',
    tagline: 'Where the Future Gets Built',
    desc: 'R&D incubator for next-generation SaaS micro-apps, experimental technology, and the businesses of tomorrow.',
    icon: FlaskConical,
    color: '#EC4899',
    status: 'DEVELOPMENT',
    services: ['SaaS Incubation', 'Tech R&D', 'IP Creation', 'Prototype Development'],
    revenue: 'Equity + Revenue Share',
  },
]

export default function DivisionsPage() {
  return (
    <div className="page-enter pt-20">
      {/* Hero */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 50% 40% at 50% 30%, rgba(67,56,202,0.03) 0%, transparent 70%)',
        }} />
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-label mb-3">THE EMPIRE SYSTEM — SIX DIVISIONS</div>
            <h1 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 58px)', color: '#0F172A', lineHeight: 1.1, marginBottom: '20px' }}>
              One Vision.{' '}
              <span style={{ background: 'linear-gradient(135deg, #F0D597, #C79A38)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Six Divisions.
              </span>
              {' '}Infinite Impact.
            </h1>
            <p className="text-[#64748B] text-sm max-w-xl mx-auto" style={{ fontFamily: 'Inter', lineHeight: 1.8 }}>
              Each division is a precision-engineered powerhouse operating in its domain. Together, they form an unstoppable empire ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Divisions Grid */}
      <section className="py-16 bg-[#F8F9FC]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Oracle OS featured */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-panel rounded-3xl p-10 mb-8 relative overflow-hidden"
            style={{ border: '1.5px solid rgba(139,92,246,0.25)' }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none" style={{
              background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)',
            }} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', color: '#8B5CF6', letterSpacing: '0.14em', background: 'rgba(139,92,246,0.08)', padding: '3px 10px', borderRadius: '4px', border: '1px solid rgba(139,92,246,0.2)' }}>FLAGSHIP PRODUCT</span>
                  <span className="badge-active">ACTIVE</span>
                </div>
                <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '36px', color: '#8B5CF6', marginBottom: '12px' }}>Oracle OS</h2>
                <p className="text-[#475569] text-sm mb-6" style={{ fontFamily: 'Inter', lineHeight: 1.8 }}>
                  The AI-powered strategic intelligence operating system. Four layers of intelligence — Mission Control, Company Twin, Competitor Matrix, and Simulation Engine — unified into one command center.
                </p>
                <Link to="/oracle-os" className="btn-gold" data-cursor-hover>
                  Explore Oracle OS
                  <ArrowRight size={13} />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {['Mission Control', 'Company Twin', 'Competitor Matrix', 'Simulation Engine'].map((feature, i) => (
                  <div key={feature} className="rounded-xl p-4" style={{ background: 'rgba(139,92,246,0.05)', border: '1px solid rgba(139,92,246,0.12)' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8B5CF6', marginBottom: '8px' }} />
                    <div style={{ fontFamily: 'Space Grotesk', fontSize: '12px', fontWeight: 600, color: '#0F172A' }}>{feature}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Divisions grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {divisions.map((div, i) => {
              const Icon = div.icon
              return (
                <motion.div
                  key={div.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  viewport={{ once: true }}
                >
                  <Link to={`/divisions/${div.id}`} className="block group" data-cursor-hover>
                    <div
                      className="glass-panel rounded-2xl p-7 h-full transition-all duration-300 group-hover:-translate-y-1"
                      style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.border = `1.5px solid ${div.color}35`
                        ;(e.currentTarget as HTMLElement).style.boxShadow = `0 8px 40px ${div.color}15`
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.border = '1px solid rgba(199,154,56,0.15)'
                        ;(e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(0,0,0,0.04)'
                      }}
                    >
                      <div className="flex items-start justify-between mb-5">
                        <div style={{
                          width: '52px', height: '52px', borderRadius: '14px',
                          background: `${div.color}12`, border: `1px solid ${div.color}20`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                          <Icon size={24} color={div.color} />
                        </div>
                        <div>
                          <div className={div.status === 'ACTIVE' ? 'badge-active' : 'badge-building'} style={{ fontSize: '9px' }}>
                            {div.status}
                          </div>
                        </div>
                      </div>

                      <div style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', color: '#94A3B8', letterSpacing: '0.12em', marginBottom: '4px' }}>
                        {div.number} / DIVISION
                      </div>
                      <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '20px', color: '#0F172A', marginBottom: '6px' }}>
                        {div.title}
                      </h3>
                      <p style={{ fontFamily: 'Inter', fontSize: '12px', color: div.color, fontWeight: 600, marginBottom: '12px', letterSpacing: '0.02em' }}>
                        {div.tagline}
                      </p>
                      <p style={{ fontFamily: 'Inter', fontSize: '13px', color: '#64748B', lineHeight: 1.7, marginBottom: '20px' }}>
                        {div.desc}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {div.services.slice(0, 3).map(s => (
                          <span key={s} style={{
                            fontFamily: 'JetBrains Mono', fontSize: '9px',
                            padding: '3px 8px', borderRadius: '4px',
                            background: `${div.color}0A`, color: div.color,
                            border: `1px solid ${div.color}20`,
                            letterSpacing: '0.04em',
                          }}>{s}</span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid rgba(199,154,56,0.1)' }}>
                        <span style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', color: '#94A3B8', letterSpacing: '0.08em' }}>{div.revenue}</span>
                        <div className="flex items-center gap-1" style={{ color: div.color, fontFamily: 'Space Grotesk', fontSize: '11px', fontWeight: 600 }}>
                          Deep Dive <ArrowRight size={12} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
