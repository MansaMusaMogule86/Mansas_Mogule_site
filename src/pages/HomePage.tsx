import React from 'react'
import HeroSection from '../components/HeroSection'
import EcosystemMap from '../components/EcosystemMap'
import RevenueEngine from '../components/RevenueEngine'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Zap, Target, Globe } from 'lucide-react'

const pillars = [
  {
    icon: Shield,
    title: 'Capital Intelligence',
    desc: 'Strategic deployment of capital across high-conviction assets with institutional-grade due diligence.',
    color: '#4338CA',
  },
  {
    icon: Zap,
    title: 'Operational Excellence',
    desc: 'AI-powered systems and elite human talent working in perfect synchrony at every layer.',
    color: '#C79A38',
  },
  {
    icon: Target,
    title: 'Strategic Acquisitions',
    desc: 'Acquiring undervalued, high-potential businesses and scaling them to category dominance.',
    color: '#8B5CF6',
  },
  {
    icon: Globe,
    title: 'Legacy Building',
    desc: "Constructing entities that outlast trends — empires built to be inherited, not just sold.",
    color: '#10B981',
  },
]

export default function HomePage() {
  return (
    <div className="page-enter">
      <HeroSection />
      <EcosystemMap />

      {/* Core Pillars */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="section-label mb-3">FOUNDATIONAL PRINCIPLES</div>
            <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 'clamp(24px, 3.5vw, 42px)', color: '#0F172A' }}>
              The Four{' '}
              <span style={{ background: 'linear-gradient(135deg, #F0D597, #C79A38)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Core Pillars</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => {
              const Icon = p.icon
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-panel rounded-2xl p-7 group hover:-translate-y-1 transition-transform duration-300"
                >
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '12px',
                    background: `${p.color}12`,
                    border: `1px solid ${p.color}25`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '20px',
                  }}>
                    <Icon size={22} color={p.color} />
                  </div>
                  <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '16px', color: '#0F172A', marginBottom: '10px' }}>
                    {p.title}
                  </h3>
                  <p style={{ fontFamily: 'Inter', fontSize: '13px', color: '#64748B', lineHeight: 1.7 }}>
                    {p.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <RevenueEngine />

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="glass-panel rounded-3xl p-16 relative overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none" style={{
              background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(67,56,202,0.04) 0%, transparent 70%)',
            }} />
            <div className="section-label mb-4">READY TO JOIN THE EMPIRE?</div>
            <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 'clamp(24px, 4vw, 46px)', color: '#0F172A', lineHeight: 1.2, marginBottom: '20px' }}>
              Your Empire Starts{' '}
              <span style={{ background: 'linear-gradient(135deg, #F0D597, #C79A38)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                With One Request
              </span>
            </h2>
            <p className="text-[#64748B] text-sm mb-10 max-w-md mx-auto" style={{ fontFamily: 'Inter', lineHeight: 1.8 }}>
              We are selective about who we work with. If you're building something that deserves empire-grade infrastructure, let's talk.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-gold" data-cursor-hover>
                Submit Launch Request
                <ArrowRight size={14} />
              </Link>
              <Link to="/oracle-os" className="btn-outline-gold" data-cursor-hover>
                Explore Oracle OS
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
