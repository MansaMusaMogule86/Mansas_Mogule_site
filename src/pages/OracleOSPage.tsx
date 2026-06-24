import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Monitor, BarChart3, Building2, Swords, Cpu, ChevronRight, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const layers = [
  {
    id: 'mission',
    number: '01',
    title: 'Mission Control',
    subtitle: 'Real-time command center for executive strategy',
    color: '#4338CA',
    icon: Monitor,
    features: ['KPI Tracking Dashboard', 'Capital Pulse Monitor', 'Executive Briefing Engine', 'Strategic Alignment Score', 'Performance Heat Maps'],
    detail: 'The nerve center of your empire. Mission Control gives executives a real-time, single-source-of-truth view of every KPI, capital movement, and strategic milestone — before others even open their laptops.',
    metrics: [
      { label: 'Avg. Decision Speed', value: '3.2x faster' },
      { label: 'KPIs Tracked', value: '240+' },
      { label: 'Alert Latency', value: '<100ms' },
    ],
  },
  {
    id: 'twin',
    number: '02',
    title: 'Company Twin',
    subtitle: 'Digital replica of your full organizational structure',
    color: '#8B5CF6',
    icon: Building2,
    features: ['Org Topology Map', 'Capacity Mapping', 'Dependency Chains', 'Performance Heatmap', 'Resource Allocation AI'],
    detail: 'A living, breathing digital replica of your company. The Company Twin models every team, process, and dependency — giving leadership the power to simulate restructures and spot bottlenecks before they cost millions.',
    metrics: [
      { label: 'Org Accuracy', value: '98.7%' },
      { label: 'Scenario Models', value: '1,200+' },
      { label: 'Update Frequency', value: 'Real-time' },
    ],
  },
  {
    id: 'competitor',
    number: '03',
    title: 'Competitor Matrix',
    subtitle: 'AI-powered competitive intelligence at scale',
    color: '#C79A38',
    icon: Swords,
    features: ['Benchmarking Engine', 'Competitor Intelligence', 'Market Gap Analysis', 'Strategic Gap Finder', 'Threat Detection Alerts'],
    detail: 'Know your competition better than they know themselves. The Competitor Matrix continuously scans markets, benchmarks performance, and identifies strategic gaps — so your next move is always five steps ahead.',
    metrics: [
      { label: 'Competitors Tracked', value: '500+' },
      { label: 'Signal Accuracy', value: '94.2%' },
      { label: 'Update Cycle', value: '24h' },
    ],
  },
  {
    id: 'simulation',
    number: '04',
    title: 'Simulation Engine',
    subtitle: 'Scenario modeling and decision intelligence',
    color: '#10B981',
    icon: Cpu,
    features: ['Scenario Builders', 'Predictive Analytics', 'Stabilization Reports', 'Risk Quantification', 'Monte Carlo Engine'],
    detail: "Don't make decisions in the dark. The Simulation Engine lets you run unlimited strategic scenarios — mergers, market expansions, pricing pivots — and receive AI-generated Stabilization Reports before committing a single dollar.",
    metrics: [
      { label: 'Scenarios/day', value: '10,000+' },
      { label: 'Prediction Accuracy', value: '89.4%' },
      { label: 'Report Generation', value: '< 3 min' },
    ],
  },
]

export default function OracleOSPage() {
  const [activeLayer, setActiveLayer] = useState('mission')
  const [simRunning, setSimRunning] = useState(false)
  const [simResult, setSimResult] = useState('')
  const active = layers.find(l => l.id === activeLayer)!

  const runSimulation = () => {
    setSimRunning(true)
    setSimResult('')
    setTimeout(() => {
      setSimResult(`> [ORACLE OS] Simulation initiated...
> [SCAN] Parsing 247 data streams...
> [ANALYSIS] Competitor vulnerability detected in Sector 4
> [MODEL] Running 10,000 Monte Carlo scenarios...
> [RESULT] Strategic pivot recommended: +34% revenue upside
> [REPORT] Stabilization Report generated — 98.2% confidence
> [STATUS] Decision Package ready for executive review.`)
      setSimRunning(false)
    }, 2800)
  }

  return (
    <div className="page-enter pt-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(160deg, #FFFFFF 0%, #F8F9FC 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 50% 40% at 50% 30%, rgba(139,92,246,0.05) 0%, transparent 70%)',
        }} />
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-label mb-3">ORACLE OS // STRATEGIC INTELLIGENCE LAYER</div>
            <h1 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 64px)', color: '#0F172A', letterSpacing: '0.02em', lineHeight: 1.1, marginBottom: '20px' }}>
              Centralize.{' '}
              <span style={{ background: 'linear-gradient(135deg, #F0D597, #C79A38)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Simulate.</span>
              {' '}Strategize.{' '}
              <span style={{ background: 'linear-gradient(135deg, #8B5CF6, #4338CA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Dominate.</span>
            </h1>
            <p className="text-[#475569] text-base max-w-xl mx-auto" style={{ fontFamily: 'Inter', lineHeight: 1.8 }}>
              Oracle OS is the AI-powered operating brain for elite business operators. Four intelligence layers. One unstoppable command center.
            </p>
            <div className="flex gap-4 justify-center mt-8 flex-wrap">
              <span className="badge-active">SYSTEM ACTIVE</span>
              <span style={{ fontFamily: 'JetBrains Mono', fontSize: '11px', color: '#8B5CF6', padding: '4px 14px', background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '999px', letterSpacing: '0.1em' }}>
                ENTERPRISE LICENSE
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stacked Drawer Interface */}
      <section className="py-16 bg-[#F8F9FC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left: Layer Selector */}
            <div className="lg:col-span-2 space-y-3">
              <div className="section-label mb-6">SELECT INTELLIGENCE LAYER</div>
              {layers.map((layer, i) => {
                const Icon = layer.icon
                const isActive = activeLayer === layer.id
                return (
                  <motion.button
                    key={layer.id}
                    onClick={() => setActiveLayer(layer.id)}
                    className="w-full text-left rounded-xl p-5 transition-all duration-300"
                    style={{
                      background: isActive ? `${layer.color}0E` : 'rgba(255,255,255,0.7)',
                      border: isActive ? `1.5px solid ${layer.color}40` : '1.5px solid rgba(199,154,56,0.12)',
                      backdropFilter: 'blur(16px)',
                      boxShadow: isActive ? `0 0 24px ${layer.color}20` : '0 2px 12px rgba(0,0,0,0.04)',
                    }}
                    whileHover={{ x: 4 }}
                    data-cursor-hover
                  >
                    <div className="flex items-center gap-4">
                      <div style={{
                        width: '40px', height: '40px', borderRadius: '10px',
                        background: isActive ? `${layer.color}18` : 'rgba(248,249,252,0.8)',
                        border: `1px solid ${isActive ? layer.color + '30' : 'rgba(199,154,56,0.15)'}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        <Icon size={18} color={isActive ? layer.color : '#94A3B8'} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', color: isActive ? layer.color : '#94A3B8', letterSpacing: '0.1em' }}>{layer.number}</span>
                          <span style={{ fontFamily: 'Space Grotesk', fontSize: '14px', fontWeight: 700, color: isActive ? layer.color : '#0F172A' }}>{layer.title}</span>
                        </div>
                        <p style={{ fontFamily: 'Inter', fontSize: '11px', color: '#94A3B8', marginTop: '2px', lineHeight: 1.4 }}>{layer.subtitle}</p>
                      </div>
                      <ChevronRight size={14} color={isActive ? layer.color : '#CBD5E1'} style={{ flexShrink: 0, transform: isActive ? 'rotate(90deg)' : 'none', transition: 'transform 0.3s' }} />
                    </div>
                  </motion.button>
                )
              })}
            </div>

            {/* Right: Active Layer Detail */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLayer}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-5"
                >
                  {/* Main detail card */}
                  <div className="glass-panel rounded-2xl p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="section-label mb-2">{active.number} / ORACLE OS MODULE</div>
                        <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '28px', color: active.color }}>
                          {active.title}
                        </h2>
                      </div>
                      <div style={{
                        width: '56px', height: '56px', borderRadius: '14px',
                        background: `${active.color}12`, border: `1.5px solid ${active.color}25`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <active.icon size={26} color={active.color} />
                      </div>
                    </div>

                    <p style={{ fontFamily: 'Inter', fontSize: '14px', color: '#475569', lineHeight: 1.8, marginBottom: '24px' }}>
                      {active.detail}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {active.metrics.map(m => (
                        <div key={m.label} className="hud-metric" style={{ borderLeftColor: `${active.color}40` }}>
                          <div style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', color: '#94A3B8', letterSpacing: '0.12em', marginBottom: '2px' }}>{m.label.toUpperCase()}</div>
                          <div style={{ fontFamily: 'Space Grotesk', fontSize: '15px', fontWeight: 700, color: active.color }}>{m.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2">
                      {active.features.map(f => (
                        <div key={f} className="flex items-center gap-2">
                          <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: active.color, flexShrink: 0 }} />
                          <span style={{ fontFamily: 'Inter', fontSize: '12px', color: '#475569' }}>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 3D Stack Visual */}
                  <div className="glass-panel rounded-2xl p-6 overflow-hidden relative">
                    <div className="section-label mb-4">SYSTEM ARCHITECTURE STACK</div>
                    <div className="flex flex-col gap-2" style={{ perspective: '800px' }}>
                      {layers.map((layer, i) => (
                        <motion.div
                          key={layer.id}
                          onClick={() => setActiveLayer(layer.id)}
                          className="stack-layer cursor-pointer rounded-xl px-5 py-3 flex items-center justify-between"
                          style={{
                            background: activeLayer === layer.id
                              ? `linear-gradient(90deg, ${layer.color}18, ${layer.color}08)`
                              : 'rgba(248,249,252,0.8)',
                            border: `1px solid ${activeLayer === layer.id ? layer.color + '40' : 'rgba(199,154,56,0.1)'}`,
                            transform: activeLayer === layer.id ? 'translateY(-4px)' : 'none',
                            boxShadow: activeLayer === layer.id ? `0 8px 24px ${layer.color}20` : 'none',
                          }}
                          data-cursor-hover
                        >
                          <div className="flex items-center gap-3">
                            <layer.icon size={14} color={activeLayer === layer.id ? layer.color : '#94A3B8'} />
                            <span style={{ fontFamily: 'Space Grotesk', fontSize: '12px', fontWeight: 600, color: activeLayer === layer.id ? layer.color : '#475569' }}>
                              {layer.title}
                            </span>
                          </div>
                          <span style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', color: activeLayer === layer.id ? layer.color : '#CBD5E1', letterSpacing: '0.08em' }}>
                            {activeLayer === layer.id ? '● ACTIVE' : '○ READY'}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Simulation Terminal */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-panel rounded-2xl p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="section-label mb-1">SIMULATION ENGINE — LIVE DEMO</div>
                <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '20px', color: '#0F172A' }}>
                  Decision Simulation Terminal
                </h3>
              </div>
              <button
                onClick={runSimulation}
                disabled={simRunning}
                className="btn-gold text-xs py-2.5 px-6 disabled:opacity-60"
                data-cursor-hover
              >
                {simRunning ? '⟳ Running...' : '▶ Run Simulation'}
              </button>
            </div>

            <div className="terminal-screen min-h-[200px] rounded-xl" style={{ fontFamily: 'JetBrains Mono' }}>
              {!simResult && !simRunning && (
                <div style={{ color: '#475569', fontSize: '12px' }}>
                  <span style={{ color: '#10B981' }}>oracle@moguls</span>
                  <span style={{ color: '#C79A38' }}>:~$ </span>
                  <span className="animate-pulse">_</span>
                  <div style={{ marginTop: '12px', color: '#334155', fontSize: '11px' }}>
                    Press "Run Simulation" to initiate a live strategic decision analysis...
                  </div>
                </div>
              )}
              {simRunning && (
                <div>
                  {['Connecting to Oracle OS...', 'Loading intelligence modules...', 'Parsing market signals...'].map((line, i) => (
                    <div key={i} className="terminal-line" style={{ color: '#10B981', fontSize: '12px' }}>
                      <span style={{ color: '#C79A38' }}>&gt; </span>{line}
                      <span className="animate-pulse">...</span>
                    </div>
                  ))}
                </div>
              )}
              {simResult && (
                <div>
                  {simResult.split('\n').map((line, i) => (
                    <div key={i} style={{ color: '#10B981', fontSize: '12px', marginBottom: '4px', fontFamily: 'JetBrains Mono' }}>
                      {line}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F8F9FC]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '32px', color: '#0F172A', marginBottom: '16px' }}>
            Ready for{' '}
            <span style={{ background: 'linear-gradient(135deg, #F0D597, #C79A38)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Oracle OS?
            </span>
          </h2>
          <p className="text-[#64748B] text-sm mb-8" style={{ fontFamily: 'Inter' }}>
            Get enterprise access to all four intelligence layers. Built for founders and executives who operate at the speed of markets.
          </p>
          <Link to="/contact" className="btn-gold" data-cursor-hover>
            Request Enterprise Access
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  )
}
