import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { Brain, Palette, TrendingUp, GraduationCap, FlaskConical, ArrowRight, Calculator, CheckCircle } from 'lucide-react'

const divisionData: Record<string, any> = {
  'moguls-ai': {
    number: '01',
    title: 'Moguls AI',
    tagline: 'Intelligence at Machine Speed',
    color: '#4338CA',
    icon: Brain,
    status: 'ACTIVE',
    hero: 'We build the neural infrastructure of modern empires — autonomous AI systems, intelligent agents, and workflow automation that scales without adding headcount.',
    services: [
      { name: 'AI Agent Development', desc: 'Custom autonomous agents for research, outreach, reporting, and decision support.' },
      { name: 'LLM Dashboard Systems', desc: 'Beautiful, functional AI-powered dashboards integrated into your existing stack.' },
      { name: 'Process Automation', desc: 'End-to-end workflow automation that eliminates operational bottlenecks.' },
      { name: 'Predictive Analytics', desc: 'ML models that forecast revenue, churn, and market movements.' },
      { name: 'Neural Workflow Systems', desc: 'AI-orchestrated multi-agent pipelines that replicate entire departments.' },
    ],
    packages: [
      { name: 'Starter Intelligence', price: '$2,500', desc: 'One AI agent + dashboard integration', duration: '4 weeks' },
      { name: 'Operations Suite', price: '$8,000', desc: 'Full process automation + 3 agents', duration: '8 weeks' },
      { name: 'Enterprise Neural Stack', price: 'Custom', desc: 'Complete AI infrastructure buildout', duration: 'Ongoing' },
    ],
    roi: { time: '68%', cost: '45%', scale: '10x' },
  },
  'moguls-studio': {
    number: '03',
    title: 'Moguls Studio',
    tagline: 'Brand Architecture at the Highest Level',
    color: '#C79A38',
    icon: Palette,
    status: 'ACTIVE',
    hero: 'We don\'t design logos — we architect brand empires. From identity systems to cinematic brand films, our studio output commands instant market authority.',
    services: [
      { name: 'Brand Identity Systems', desc: 'Logo, typography, color architecture, and complete brand guidelines.' },
      { name: 'UI/UX Product Design', desc: 'Web and mobile interfaces designed to convert and delight.' },
      { name: 'Pitch Architecture', desc: 'Investor decks and presentation systems that close deals.' },
      { name: 'Motion Design', desc: 'Brand films, animations, and content that moves audiences.' },
      { name: 'Content Production', desc: 'Photography, video, and editorial content at premium quality.' },
    ],
    packages: [
      { name: 'Brand Foundation', price: '$4,500', desc: 'Logo + identity system + guidelines', duration: '3 weeks' },
      { name: 'Full Brand Build', price: '$12,000', desc: 'Identity + web + pitch deck', duration: '6 weeks' },
      { name: 'Studio Retainer', price: '$3,500/mo', desc: 'Ongoing creative production', duration: 'Monthly' },
    ],
    roi: { attention: '3x', conversion: '+40%', trust: '+85%' },
  },
  'moguls-growth': {
    number: '04',
    title: 'Moguls Growth',
    tagline: 'Performance-Engineered Scaling',
    color: '#10B981',
    icon: TrendingUp,
    status: 'ACTIVE',
    hero: 'Growth without a system is just luck. We architect performance marketing machines and partnership ecosystems that generate compounding revenue velocity.',
    services: [
      { name: 'Performance Marketing', desc: 'Paid acquisition across Meta, Google, LinkedIn, and emerging platforms.' },
      { name: 'Lead Velocity Systems', desc: 'Automated outbound systems that fill pipelines without cold calling.' },
      { name: 'Partnership Mapping', desc: 'Strategic alliance identification and partnership development.' },
      { name: 'Funnel Architecture', desc: 'End-to-end conversion funnel design and optimization.' },
      { name: 'Growth Analytics', desc: 'Attribution modeling and growth experiment frameworks.' },
    ],
    packages: [
      { name: 'Growth Starter', price: '$3,000/mo', desc: 'One channel + funnel setup', duration: '3 months' },
      { name: 'Velocity Pack', price: '$7,500/mo', desc: 'Multi-channel + lead system', duration: '6 months' },
      { name: 'Empire Growth', price: 'Custom', desc: 'Full acquisition engine buildout', duration: 'Ongoing' },
    ],
    roi: { leads: '+320%', cac: '-42%', revenue: '+$1.2M avg' },
  },
  'moguls-academy': {
    number: '05',
    title: 'Moguls Academy',
    tagline: 'Elevating the Next Generation',
    color: '#F59E0B',
    icon: GraduationCap,
    status: 'BUILDING',
    hero: 'The next era of business requires operators who understand AI, capital, and digital leverage. Moguls Academy trains the leaders of tomorrow, today.',
    services: [
      { name: 'Corporate Training Tracks', desc: 'Custom team training on AI tools, digital strategy, and performance systems.' },
      { name: 'AI & Automation Courses', desc: 'Self-paced programs on building AI-powered workflows.' },
      { name: 'Creator Monetization', desc: 'Programs for content creators to build sustainable revenue empires.' },
      { name: 'Executive Coaching', desc: 'One-on-one strategic coaching for founders and C-suite operators.' },
      { name: 'Cohort Programs', desc: 'Intensive 8-week cohorts for high-potential operators.' },
    ],
    packages: [
      { name: 'Corporate Workshop', price: '$5,000', desc: 'Full-day team training session', duration: '1 day' },
      { name: 'AI Mastery Course', price: '$997', desc: 'Complete AI workflow program', duration: '8 weeks' },
      { name: 'Empire Cohort', price: '$4,500', desc: 'Intensive 8-week program', duration: '8 weeks' },
    ],
    roi: { efficiency: '+60%', skillUp: '4.8/5', retention: '+35%' },
  },
  'moguls-labs': {
    number: '06',
    title: 'Moguls Labs',
    tagline: 'Where the Future Gets Built',
    color: '#EC4899',
    icon: FlaskConical,
    status: 'DEVELOPMENT',
    hero: 'The most valuable companies of the next decade don\'t exist yet. Moguls Labs is where we build them — systematically, strategically, and with surgical speed.',
    services: [
      { name: 'SaaS Micro-App Incubation', desc: 'Rapid development and validation of SaaS concepts with built-in GTM.' },
      { name: 'Technology R&D', desc: 'Applied research into emerging technologies with commercial potential.' },
      { name: 'IP Creation', desc: 'Proprietary algorithm, data asset, and technology development.' },
      { name: 'Prototype Development', desc: 'MVPs built to investor-grade quality in compressed timelines.' },
      { name: 'Future Architecture', desc: 'Long-horizon thinking on where industries are heading.' },
    ],
    packages: [
      { name: 'Lab Access', price: 'Equity-based', desc: 'Co-founder-style partnership', duration: 'TBD' },
      { name: 'Prototype Sprint', price: '$15,000', desc: 'MVP in 4 weeks', duration: '4 weeks' },
      { name: 'Incubation Program', price: 'Revenue Share', desc: 'Full incubation from concept to launch', duration: '6 months' },
    ],
    roi: { speed: '4x faster', success: '72%', exits: '3 projected' },
  },
}

export default function DivisionDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const data = divisionData[slug || '']
  const [roiMultiplier, setRoiMultiplier] = useState(1)

  if (!data) {
    return (
      <div className="pt-24 text-center py-20">
        <h2 style={{ fontFamily: 'Space Grotesk', fontSize: '24px', color: '#0F172A' }}>Division not found</h2>
        <Link to="/divisions" className="btn-gold mt-6 inline-flex">Back to Divisions</Link>
      </div>
    )
  }

  const Icon = data.icon

  const roiEntries = Object.entries(data.roi) as [string, string][]

  return (
    <div className="page-enter pt-20">
      {/* Hero */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: `radial-gradient(ellipse 50% 40% at 50% 30%, ${data.color}04 0%, transparent 70%)`,
        }} />
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Link to="/divisions" className="inline-flex items-center gap-2 mb-8" style={{ fontFamily: 'JetBrains Mono', fontSize: '11px', color: '#94A3B8', letterSpacing: '0.1em' }}>
              ← BACK TO DIVISIONS
            </Link>
            <div className="flex items-start gap-6">
              <div style={{
                width: '72px', height: '72px', borderRadius: '18px',
                background: `${data.color}12`, border: `1.5px solid ${data.color}25`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <Icon size={32} color={data.color} />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#94A3B8', letterSpacing: '0.14em' }}>{data.number} / DIVISION</span>
                  <div className={data.status === 'ACTIVE' ? 'badge-active' : 'badge-building'}>{data.status}</div>
                </div>
                <h1 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 52px)', color: data.color, lineHeight: 1.1, marginBottom: '8px' }}>
                  {data.title}
                </h1>
                <p style={{ fontFamily: 'Inter', fontSize: '18px', color: '#475569', lineHeight: 1.7 }}>
                  {data.tagline}
                </p>
              </div>
            </div>

            <p className="mt-8 text-[#475569] text-base leading-relaxed max-w-3xl" style={{ fontFamily: 'Inter' }}>
              {data.hero}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-[#F8F9FC]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="section-label mb-8">CORE SERVICES</div>
          <div className="space-y-4">
            {data.services.map((service: any, i: number) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="glass-panel rounded-xl p-6 flex gap-4 items-start"
              >
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: data.color, marginTop: '6px', flexShrink: 0 }} />
                <div>
                  <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '16px', color: '#0F172A', marginBottom: '4px' }}>
                    {service.name}
                  </h3>
                  <p style={{ fontFamily: 'Inter', fontSize: '13px', color: '#64748B' }}>{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="section-label mb-8">ENGAGEMENT PACKAGES</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.packages.map((pkg: any, i: number) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-panel rounded-2xl p-7 text-center"
                style={i === 1 ? { border: `1.5px solid ${data.color}40`, boxShadow: `0 8px 40px ${data.color}12` } : {}}
              >
                {i === 1 && (
                  <div style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', color: data.color, letterSpacing: '0.12em', marginBottom: '12px' }}>
                    ★ MOST POPULAR
                  </div>
                )}
                <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '16px', color: '#0F172A', marginBottom: '8px' }}>
                  {pkg.name}
                </h3>
                <div style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '28px', color: data.color, marginBottom: '8px' }}>
                  {pkg.price}
                </div>
                <p style={{ fontFamily: 'Inter', fontSize: '13px', color: '#64748B', marginBottom: '8px' }}>{pkg.desc}</p>
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#94A3B8', letterSpacing: '0.1em', marginBottom: '20px' }}>
                  {pkg.duration}
                </div>
                <Link to="/contact" className={i === 1 ? "btn-gold w-full justify-center text-xs py-3 block text-center" : "btn-outline-gold w-full justify-center text-xs py-3 block text-center"} data-cursor-hover>
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 bg-[#F8F9FC]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="section-label mb-8">EXPECTED OUTCOMES</div>
          <div className="glass-panel rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {roiEntries.map(([key, value]) => (
                <div key={key} className="text-center">
                  <div style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '40px', color: data.color, marginBottom: '8px' }}>
                    {value}
                  </div>
                  <div style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#94A3B8', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '32px', color: '#0F172A', marginBottom: '16px' }}>
            Ready to deploy{' '}
            <span style={{ color: data.color }}>{data.title}?</span>
          </h2>
          <p className="text-[#64748B] text-sm mb-8" style={{ fontFamily: 'Inter' }}>
            Submit your launch request and we'll be in touch within 48 hours to discuss your project.
          </p>
          <Link to="/contact" className="btn-gold" data-cursor-hover>
            Submit Launch Request
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  )
}
