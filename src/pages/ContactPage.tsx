import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'

type FormData = {
  name: string
  email: string
  company: string
  division: string
  budget: string
  message: string
}

type FormErrors = Partial<Record<keyof FormData, string>>

const divisions = [
  'Moguls AI — AI & Automation',
  'Oracle OS — Strategic Intelligence',
  'Moguls Studio — Brand & Creative',
  'Moguls Growth — Performance Marketing',
  'Moguls Academy — Training & Education',
  'Moguls Labs — R&D & Incubation',
  'Full Ecosystem Partnership',
]

const budgets = [
  '$2,500 – $5,000',
  '$5,000 – $15,000',
  '$15,000 – $50,000',
  '$50,000+',
  'Equity / Partnership',
]

const terminalLines = [
  '> [SYSTEM] Launch request received.',
  '> [SYSTEM] Initializing client routing sequence...',
  '> [SCAN] Verifying applicant profile...',
  '> [MATCH] Division assignment confirmed.',
  '> [SYSTEM] Request successfully pushed to Mansas Command Queue.',
  '> [STATUS] Response ETA: 24-48 hours. Welcome to the Empire.',
]

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: '', email: '', company: '', division: '', budget: '', message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [terminalActive, setTerminalActive] = useState(false)
  const [visibleLines, setVisibleLines] = useState(0)

  const handleChange = (key: keyof FormData, value: string) => {
    setForm(prev => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors(prev => ({ ...prev, [key]: '' }))
  }

  const validate = () => {
    const e: FormErrors = {}
    if (!form.name.trim()) e.name = 'Name required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required'
    if (!form.division) e.division = 'Select a division'
    if (!form.message.trim()) e.message = 'Message required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setTerminalActive(true)
    let i = 0
    const interval = setInterval(() => {
      i++
      setVisibleLines(i)
      if (i >= terminalLines.length) {
        clearInterval(interval)
        setTimeout(() => setSubmitted(true), 600)
      }
    }, 500)
  }

  const inputStyle = (field: keyof FormData) => ({
    width: '100%',
    padding: '12px 16px',
    background: 'rgba(255,255,255,0.6)',
    border: `1px solid ${errors[field] ? '#EF4444' : 'rgba(199,154,56,0.2)'}`,
    borderRadius: '8px',
    fontFamily: 'Inter',
    fontSize: '13px',
    color: '#0F172A',
    backdropFilter: 'blur(8px)',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  } as React.CSSProperties)

  const inputFocusStyle = {
    borderColor: 'rgba(199,154,56,0.5)',
    boxShadow: '0 0 0 3px rgba(199,154,56,0.08)',
  }

  return (
    <div className="page-enter pt-20">
      {/* Hero */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 50% 40% at 50% 20%, rgba(199,154,56,0.04) 0%, transparent 60%)',
        }} />
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-label mb-3">MANSAS COMMAND QUEUE — INTAKE PROTOCOL</div>
            <h1 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 52px)', color: '#0F172A', lineHeight: 1.1, marginBottom: '16px' }}>
              Submit Your{' '}
              <span style={{ background: 'linear-gradient(135deg, #F0D597, #C79A38)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Launch Request
              </span>
            </h1>
            <p className="text-[#64748B] text-sm max-w-md mx-auto" style={{ fontFamily: 'Inter', lineHeight: 1.8 }}>
              We are selective. Every engagement is strategic. If you're ready to operate at empire level, the intake form below is your first step.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form / Terminal */}
      <section className="py-12 bg-[#F8F9FC]">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                  {/* Form */}
                  <div className="lg:col-span-3">
                    <div className="glass-panel rounded-2xl p-8">
                      <div className="section-label mb-6">INITIATE CONTACT SEQUENCE</div>

                      {!terminalActive ? (
                        <form onSubmit={handleSubmit} className="space-y-5">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                              <label style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', color: '#94A3B8', letterSpacing: '0.14em', display: 'block', marginBottom: '6px' }}>
                                FULL NAME *
                              </label>
                              <input
                                type="text"
                                value={form.name}
                                onChange={e => handleChange('name', e.target.value)}
                                placeholder="Your name"
                                style={inputStyle('name')}
                                onFocus={e => Object.assign(e.target.style, inputFocusStyle)}
                                onBlur={e => {
                                  e.target.style.borderColor = errors.name ? '#EF4444' : 'rgba(199,154,56,0.2)'
                                  e.target.style.boxShadow = 'none'
                                }}
                                data-cursor-hover
                              />
                              {errors.name && <p style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#EF4444', marginTop: '4px' }}>{errors.name}</p>}
                            </div>
                            <div>
                              <label style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', color: '#94A3B8', letterSpacing: '0.14em', display: 'block', marginBottom: '6px' }}>
                                EMAIL ADDRESS *
                              </label>
                              <input
                                type="email"
                                value={form.email}
                                onChange={e => handleChange('email', e.target.value)}
                                placeholder="you@company.com"
                                style={inputStyle('email')}
                                onFocus={e => Object.assign(e.target.style, inputFocusStyle)}
                                onBlur={e => {
                                  e.target.style.borderColor = errors.email ? '#EF4444' : 'rgba(199,154,56,0.2)'
                                  e.target.style.boxShadow = 'none'
                                }}
                                data-cursor-hover
                              />
                              {errors.email && <p style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#EF4444', marginTop: '4px' }}>{errors.email}</p>}
                            </div>
                          </div>

                          <div>
                            <label style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', color: '#94A3B8', letterSpacing: '0.14em', display: 'block', marginBottom: '6px' }}>
                              COMPANY / PROJECT NAME
                            </label>
                            <input
                              type="text"
                              value={form.company}
                              onChange={e => handleChange('company', e.target.value)}
                              placeholder="Your company or project"
                              style={inputStyle('company')}
                              onFocus={e => Object.assign(e.target.style, inputFocusStyle)}
                              onBlur={e => {
                                e.target.style.borderColor = 'rgba(199,154,56,0.2)'
                                e.target.style.boxShadow = 'none'
                              }}
                              data-cursor-hover
                            />
                          </div>

                          <div>
                            <label style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', color: '#94A3B8', letterSpacing: '0.14em', display: 'block', marginBottom: '6px' }}>
                              DIVISION OF INTEREST *
                            </label>
                            <select
                              value={form.division}
                              onChange={e => handleChange('division', e.target.value)}
                              style={{ ...inputStyle('division'), cursor: 'pointer' }}
                              onFocus={e => Object.assign(e.target.style, inputFocusStyle)}
                              onBlur={e => {
                                e.target.style.borderColor = errors.division ? '#EF4444' : 'rgba(199,154,56,0.2)'
                                e.target.style.boxShadow = 'none'
                              }}
                              data-cursor-hover
                            >
                              <option value="">Select a division...</option>
                              {divisions.map(d => <option key={d} value={d}>{d}</option>)}
                            </select>
                            {errors.division && <p style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#EF4444', marginTop: '4px' }}>{errors.division}</p>}
                          </div>

                          <div>
                            <label style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', color: '#94A3B8', letterSpacing: '0.14em', display: 'block', marginBottom: '6px' }}>
                              BUDGET RANGE
                            </label>
                            <select
                              value={form.budget}
                              onChange={e => handleChange('budget', e.target.value)}
                              style={{ ...inputStyle('budget'), cursor: 'pointer' }}
                              onFocus={e => Object.assign(e.target.style, inputFocusStyle)}
                              onBlur={e => {
                                e.target.style.borderColor = 'rgba(199,154,56,0.2)'
                                e.target.style.boxShadow = 'none'
                              }}
                              data-cursor-hover
                            >
                              <option value="">Select budget range...</option>
                              {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                            </select>
                          </div>

                          <div>
                            <label style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', color: '#94A3B8', letterSpacing: '0.14em', display: 'block', marginBottom: '6px' }}>
                              YOUR MISSION *
                            </label>
                            <textarea
                              value={form.message}
                              onChange={e => handleChange('message', e.target.value)}
                              placeholder="Describe your project, goals, and what you're trying to build..."
                              rows={5}
                              style={{ ...inputStyle('message'), resize: 'vertical' }}
                              onFocus={e => Object.assign(e.target.style, inputFocusStyle)}
                              onBlur={e => {
                                e.target.style.borderColor = errors.message ? '#EF4444' : 'rgba(199,154,56,0.2)'
                                e.target.style.boxShadow = 'none'
                              }}
                              data-cursor-hover
                            />
                            {errors.message && <p style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#EF4444', marginTop: '4px' }}>{errors.message}</p>}
                          </div>

                          <button type="submit" className="btn-gold w-full justify-center py-4" data-cursor-hover>
                            Transmit Launch Request
                            <Send size={14} />
                          </button>
                        </form>
                      ) : (
                        /* Terminal animation */
                        <div className="terminal-screen min-h-[280px]">
                          {terminalLines.slice(0, visibleLines).map((line, i) => (
                            <div key={i} style={{ marginBottom: '8px', animation: 'fadeIn 0.3s ease forwards' }}>
                              <span style={{ color: '#94A3B8' }}>{line.split(']')[0]}]</span>
                              <span style={{ color: '#10B981' }}>{line.split(']').slice(1).join(']')}</span>
                            </div>
                          ))}
                          {visibleLines < terminalLines.length && (
                            <span className="animate-pulse" style={{ color: '#10B981' }}>▋</span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Side info */}
                  <div className="lg:col-span-2 space-y-5">
                    <div className="glass-panel rounded-2xl p-6">
                      <div className="section-label mb-4">WHAT HAPPENS NEXT</div>
                      <div className="space-y-4">
                        {[
                          { step: '01', text: 'Request enters the Mansas Command Queue' },
                          { step: '02', text: 'Strategic fit evaluation within 24 hours' },
                          { step: '03', text: 'Discovery call scheduled with the right operator' },
                          { step: '04', text: 'Custom engagement proposal delivered' },
                          { step: '05', text: 'Empire deployment begins' },
                        ].map(item => (
                          <div key={item.step} className="flex gap-3 items-start">
                            <span style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#C79A38', letterSpacing: '0.1em', marginTop: '2px', flexShrink: 0 }}>{item.step}</span>
                            <span style={{ fontFamily: 'Inter', fontSize: '12px', color: '#475569', lineHeight: 1.6 }}>{item.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="glass-panel rounded-2xl p-6">
                      <div className="section-label mb-4">SYSTEM STATUS</div>
                      <div className="space-y-3">
                        {[
                          { label: 'Command Queue', value: 'OPEN', color: '#10B981' },
                          { label: 'Response Time', value: '< 48 HRS', color: '#C79A38' },
                          { label: 'Capacity', value: 'LIMITED', color: '#F59E0B' },
                        ].map(s => (
                          <div key={s.label} className="flex justify-between items-center">
                            <span style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#94A3B8', letterSpacing: '0.1em' }}>{s.label}</span>
                            <span style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', color: s.color, fontWeight: 600, letterSpacing: '0.08em' }}>{s.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* Success State */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl mx-auto text-center"
              >
                <div className="glass-panel rounded-3xl p-16">
                  <div style={{ width: '72px', height: '72px', borderRadius: '20px', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                    <CheckCircle size={36} color="#10B981" />
                  </div>
                  <div className="section-label mb-4" style={{ color: '#10B981' }}>TRANSMISSION SUCCESSFUL</div>
                  <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '28px', color: '#0F172A', marginBottom: '16px' }}>
                    Your Request is in the Queue
                  </h2>
                  <p className="text-[#64748B] text-sm mb-8" style={{ fontFamily: 'Inter', lineHeight: 1.8 }}>
                    Welcome to the intake sequence. Your request has been received and will be reviewed within 24-48 hours. If there's a strategic fit, you'll receive a direct calendar invite.
                  </p>
                  <div className="terminal-screen text-left mb-8">
                    {terminalLines.map((line, i) => (
                      <div key={i} style={{ marginBottom: '6px', fontSize: '11px' }}>
                        {line}
                      </div>
                    ))}
                  </div>
                  <a href="/" className="btn-gold inline-flex" data-cursor-hover>
                    Return to Command Center
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}
