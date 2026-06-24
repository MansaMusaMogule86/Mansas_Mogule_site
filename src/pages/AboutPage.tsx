import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { User, Bot, TrendingUp, ArrowRight, Award } from 'lucide-react'

const team = [
  {
    role: 'Founder & Chief Architect',
    name: 'The Visionary',
    focus: 'AI Architecture & Empire Strategy',
    node: 'ROOT',
    color: '#C79A38',
    icon: User,
    desc: 'Strategic leader overseeing capital deployment, system architecture, and overall empire direction. The connecting intelligence between all six divisions.',
  },
  {
    role: 'AI & Automation Operator',
    name: 'Intelligence Division',
    focus: 'Moguls AI · Oracle OS · Labs',
    node: 'BRANCH 01',
    color: '#4338CA',
    icon: Bot,
    desc: 'Specialist in building and operating AI infrastructure, custom agents, and intelligent automation pipelines across the empire.',
  },
  {
    role: 'Research & Growth Operator',
    name: 'Growth Division',
    focus: 'Growth · Studio · Academy',
    node: 'BRANCH 02',
    color: '#10B981',
    icon: TrendingUp,
    desc: 'Research-driven growth architect responsible for marketing systems, brand development, and educational program deployment.',
  },
]

const milestones = [
  { year: '2022', event: 'Empire Concept Formalized', desc: 'Vision for multi-division AI-powered empire established' },
  { year: '2023', event: 'Moguls AI Launched', desc: 'First AI agent products deployed to enterprise clients' },
  { year: '2024', event: 'Oracle OS v1.0', desc: 'Strategic intelligence platform reaches first 50 enterprise users' },
  { year: '2025', event: 'Full Ecosystem Activation', desc: 'All six divisions operational with coordinated revenue architecture' },
  { year: '2026', event: 'Empire Expansion Phase', desc: 'Rochester University partnership and international scaling commence' },
]

export default function AboutPage() {
  return (
    <div className="page-enter pt-20">
      {/* Hero */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 50% 40% at 50% 20%, rgba(199,154,56,0.04) 0%, transparent 60%)',
        }} />
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-label mb-3">THE HUMAN-AI COMMAND STRUCTURE</div>
            <h1 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 58px)', color: '#0F172A', lineHeight: 1.1, marginBottom: '20px' }}>
              The Operators Behind{' '}
              <span style={{ background: 'linear-gradient(135deg, #F0D597, #C79A38)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                The Empire
              </span>
            </h1>
            <p className="text-[#64748B] text-sm max-w-xl mx-auto" style={{ fontFamily: 'Inter', lineHeight: 1.8 }}>
              A lean, elite command structure built on human ingenuity amplified by artificial intelligence. Every operator is a specialist. Every system is a force multiplier.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-[#F8F9FC]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="glass-panel rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none" style={{
              background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(199,154,56,0.03) 0%, transparent 70%)',
            }} />
            <div className="section-label mb-4">OUR MISSION</div>
            <p style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: 'clamp(18px, 2.5vw, 28px)', color: '#0F172A', lineHeight: 1.6, maxWidth: '700px', margin: '0 auto' }}>
              "To build, acquire, and scale transformative businesses through capital intelligence, operational excellence, and strategic acquisitions — while elevating communities."
            </p>
          </div>
        </div>
      </section>

      {/* Command Tree */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="section-label mb-12 text-center">COMMAND STRUCTURE — HUMAN × AI</div>

          <div className="flex flex-col items-center gap-8">
            {/* Root node */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-panel rounded-2xl p-8 w-full max-w-lg text-center"
              style={{ border: '1.5px solid rgba(199,154,56,0.3)', boxShadow: '0 8px 40px rgba(199,154,56,0.08)' }}
            >
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', color: '#C79A38', letterSpacing: '0.16em', marginBottom: '8px' }}>
                ROOT NODE — COMMAND CENTER
              </div>
              <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(199,154,56,0.1)', border: '1px solid rgba(199,154,56,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <User size={28} color="#C79A38" />
              </div>
              <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '20px', color: '#C79A38', marginBottom: '4px' }}>Founder & Chief Architect</h3>
              <p style={{ fontFamily: 'Inter', fontSize: '13px', color: '#64748B' }}>AI Architecture & Empire Strategy — Central intelligence connecting all divisions, capital flows, and strategic vision.</p>
            </motion.div>

            {/* Connector */}
            <div style={{ width: '2px', height: '40px', background: 'linear-gradient(180deg, rgba(199,154,56,0.4), rgba(199,154,56,0.1))' }} />

            {/* Branch nodes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {team.slice(1).map((member, i) => {
                const Icon = member.icon
                return (
                  <motion.div
                    key={member.role}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    viewport={{ once: true }}
                    className="glass-panel rounded-2xl p-7"
                    style={{ border: `1.5px solid ${member.color}20` }}
                  >
                    <div style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', color: member.color, letterSpacing: '0.14em', marginBottom: '12px' }}>
                      {member.node}
                    </div>
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: `${member.color}10`, border: `1px solid ${member.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                      <Icon size={22} color={member.color} />
                    </div>
                    <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '16px', color: '#0F172A', marginBottom: '4px' }}>
                      {member.role}
                    </h3>
                    <p style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', color: member.color, letterSpacing: '0.06em', marginBottom: '10px' }}>
                      {member.focus}
                    </p>
                    <p style={{ fontFamily: 'Inter', fontSize: '12px', color: '#64748B', lineHeight: 1.7 }}>
                      {member.desc}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Rochester University Opportunity */}
      <section className="py-16 bg-[#F8F9FC]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-panel rounded-2xl p-10 relative overflow-hidden"
            style={{ border: '1.5px solid rgba(67,56,202,0.2)' }}
          >
            <div className="absolute top-0 right-0 w-48 h-48 pointer-events-none" style={{
              background: 'radial-gradient(circle, rgba(67,56,202,0.05) 0%, transparent 70%)',
            }} />
            <div className="flex items-start gap-6">
              <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: 'rgba(67,56,202,0.08)', border: '1px solid rgba(67,56,202,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Award size={26} color="#4338CA" />
              </div>
              <div>
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', color: '#4338CA', letterSpacing: '0.16em', marginBottom: '8px' }}>
                  ECOSYSTEM TRACTION — PROOF OF NETWORK
                </div>
                <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '22px', color: '#0F172A', marginBottom: '12px' }}>
                  Rochester University Partnership
                </h3>
                <p style={{ fontFamily: 'Inter', fontSize: '14px', color: '#475569', lineHeight: 1.8 }}>
                  The Mansas Moguls ecosystem has secured an early strategic partnership with Rochester University — providing direct access to elite academic talent pipelines, research collaboration opportunities, and institutional credibility as proof of our network scaling flywheel. This represents Phase 1 of our broader educational institution partnership strategy.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="section-label mb-10">EMPIRE TIMELINE</div>
          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-px" style={{ background: 'linear-gradient(180deg, rgba(199,154,56,0.4), transparent)' }} />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-8 items-start"
                >
                  <div style={{ fontFamily: 'JetBrains Mono', fontSize: '12px', fontWeight: 600, color: '#C79A38', width: '48px', flexShrink: 0, textAlign: 'right' }}>{m.year}</div>
                  <div className="relative">
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#C79A38', position: 'absolute', left: '-32px', top: '6px' }} />
                    <div>
                      <h4 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '15px', color: '#0F172A', marginBottom: '4px' }}>{m.event}</h4>
                      <p style={{ fontFamily: 'Inter', fontSize: '13px', color: '#64748B' }}>{m.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F8F9FC]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '32px', color: '#0F172A', marginBottom: '16px' }}>
            Join the{' '}
            <span style={{ background: 'linear-gradient(135deg, #F0D597, #C79A38)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Empire
            </span>
          </h2>
          <p className="text-[#64748B] text-sm mb-8" style={{ fontFamily: 'Inter' }}>
            We're selective. We're strategic. We're looking for operators who deserve empire-grade infrastructure.
          </p>
          <Link to="/contact" className="btn-gold" data-cursor-hover>
            Submit Your Request
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  )
}
