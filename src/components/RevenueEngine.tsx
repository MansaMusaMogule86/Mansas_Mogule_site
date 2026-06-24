import React, { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const channels = [
  { id: 'ai', label: 'Moguls AI', color: '#4338CA', width: 30, revenue: '$420K ARR' },
  { id: 'studio', label: 'Studio', color: '#C79A38', width: 20, revenue: '$180K ARR' },
  { id: 'saas', label: 'SaaS / Oracle', color: '#8B5CF6', width: 25, revenue: '$360K ARR' },
  { id: 'growth', label: 'Growth', color: '#10B981', width: 15, revenue: '$140K ARR' },
  { id: 'academy', label: 'Academy', color: '#F59E0B', width: 10, revenue: '$80K ARR' },
]

export default function RevenueEngine() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-28 overflow-hidden bg-[#0A0B1A]" ref={ref}>
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(199,154,56,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(199,154,56,0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{
        width: '600px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(67,56,202,0.12) 0%, transparent 70%)',
      }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-label mb-3" style={{ color: '#C79A38' }}>MULTI-CHANNEL REVENUE ARCHITECTURE</div>
          <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 'clamp(24px, 3.5vw, 42px)', color: '#F8F9FC', letterSpacing: '0.02em' }}>
            The{' '}
            <span style={{ background: 'linear-gradient(135deg, #F0D597, #C79A38)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Empire Revenue Engine
            </span>
          </h2>
          <p className="mt-4 text-[#64748B] text-sm max-w-lg mx-auto" style={{ fontFamily: 'Inter' }}>
            One client entry point. Multiple perpetual revenue streams. The flywheel that builds empires.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Sankey Diagram */}
          <div className="relative">
            <svg viewBox="0 0 500 400" className="w-full" style={{ maxHeight: '400px' }}>
              <defs>
                {channels.map(ch => (
                  <linearGradient key={ch.id} id={`sg-${ch.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#C79A38" stopOpacity="0.9" />
                    <stop offset="100%" stopColor={ch.color} stopOpacity="0.9" />
                  </linearGradient>
                ))}
                <filter id="glow-filter">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>

              {/* Client Node */}
              <rect x="20" y="160" width="90" height="80" rx="8"
                fill="rgba(199,154,56,0.12)"
                stroke="rgba(199,154,56,0.4)"
                strokeWidth="1.5"
              />
              <text x="65" y="194" textAnchor="middle" fill="#C79A38" fontSize="10" fontFamily="Space Grotesk" fontWeight="700" letterSpacing="1">CLIENT</text>
              <text x="65" y="210" textAnchor="middle" fill="#C79A38" fontSize="8" fontFamily="JetBrains Mono" letterSpacing="1">ENTRY</text>
              <text x="65" y="226" textAnchor="middle" fill="#94A3B8" fontSize="7" fontFamily="JetBrains Mono">NODE</text>

              {/* Sankey paths */}
              {channels.map((ch, i) => {
                const totalH = 300
                const startY = 50
                const h = (ch.width / 100) * totalH
                const yCenter = startY + channels.slice(0, i).reduce((acc, c) => acc + (c.width / 100) * totalH, 0) + h / 2
                const clientY = 200
                const destX = 380
                const destY = yCenter

                const cp1x = 200, cp1y = clientY, cp2x = 280, cp2y = destY

                return (
                  <g key={ch.id}>
                    {/* Path */}
                    <motion.path
                      d={`M 110 ${clientY} C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${destX} ${destY}`}
                      fill="none"
                      stroke={`url(#sg-${ch.id})`}
                      strokeWidth={h * 0.6}
                      strokeLinecap="round"
                      opacity="0.7"
                      style={{ filter: 'url(#glow-filter)' }}
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={inView ? { pathLength: 1, opacity: 0.7 } : { pathLength: 0, opacity: 0 }}
                      transition={{ duration: 1.2, delay: 0.3 + i * 0.15, ease: 'easeOut' }}
                    />
                    {/* Destination node */}
                    <motion.rect
                      x={destX}
                      y={destY - h * 0.3}
                      width="110"
                      height={h * 0.6 + 16}
                      rx="6"
                      fill={`${ch.color}18`}
                      stroke={`${ch.color}50`}
                      strokeWidth="1"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                    />
                    <motion.text
                      x={destX + 55}
                      y={destY + 3}
                      textAnchor="middle"
                      fill={ch.color}
                      fontSize="9"
                      fontFamily="Space Grotesk"
                      fontWeight="600"
                      letterSpacing="0.5"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
                    >
                      {ch.label}
                    </motion.text>
                    <motion.text
                      x={destX + 55}
                      y={destY + 15}
                      textAnchor="middle"
                      fill="#94A3B8"
                      fontSize="7.5"
                      fontFamily="JetBrains Mono"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                    >
                      {ch.revenue}
                    </motion.text>
                  </g>
                )
              })}
            </svg>
          </div>

          {/* Revenue Breakdown */}
          <div className="space-y-5">
            <div className="section-label mb-6" style={{ color: '#C79A38' }}>ANNUAL RECURRING REVENUE BREAKDOWN</div>
            {channels.map((ch, i) => (
              <motion.div
                key={ch.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-panel-dark rounded-xl p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: ch.color }} />
                    <span style={{ fontFamily: 'Space Grotesk', fontSize: '13px', fontWeight: 600, color: '#F8F9FC' }}>{ch.label}</span>
                  </div>
                  <span style={{ fontFamily: 'JetBrains Mono', fontSize: '12px', color: ch.color, fontWeight: 600 }}>{ch.revenue}</span>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '4px', height: '4px', overflow: 'hidden' }}>
                  <motion.div
                    style={{ height: '100%', background: `linear-gradient(90deg, ${ch.color}80, ${ch.color})`, borderRadius: '4px' }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${ch.width}%` }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.1, ease: 'easeOut' }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}

            {/* Total */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="glass-panel-dark rounded-xl p-5"
              style={{ border: '1px solid rgba(199,154,56,0.3)' }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="section-label mb-1" style={{ color: '#C79A38' }}>TOTAL PROJECTED ARR</div>
                  <div style={{ fontFamily: 'Space Grotesk', fontSize: '28px', fontWeight: 800, background: 'linear-gradient(135deg, #F0D597, #C79A38)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    $1.18M+
                  </div>
                </div>
                <div className="text-right">
                  <div style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', color: '#10B981', letterSpacing: '0.12em' }}>↑ EXPONENTIAL GROWTH</div>
                  <div style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', color: '#64748B', letterSpacing: '0.1em' }}>PORTFOLIO YEAR 2</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
