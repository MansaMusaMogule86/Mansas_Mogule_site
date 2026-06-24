import React from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink, Link2, Globe, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 bg-[#0A0B1A] text-white pt-16 pb-8">
      {/* Top gold border */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, #C79A38, transparent)', opacity: 0.4 }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '20px', letterSpacing: '0.12em', background: 'linear-gradient(135deg, #F0D597, #C79A38, #8B6914)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                MANSAS MOGULS
              </h3>
              <p style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', letterSpacing: '0.2em', color: '#475569', textTransform: 'uppercase', marginTop: '2px' }}>
                Empire Operating System
              </p>
            </div>
            <p className="text-[#64748B] text-sm leading-relaxed max-w-xs" style={{ fontFamily: 'Inter' }}>
              Building, acquiring, and scaling transformative businesses through capital intelligence, operational excellence, and strategic vision.
            </p>
            {/* Social */}
            <div className="flex gap-4 mt-6">
              {[
                { icon: Link2, href: '#', label: 'LinkedIn' },
                { icon: ExternalLink, href: '#', label: 'Twitter' },
                { icon: Globe, href: '#', label: 'Instagram' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded flex items-center justify-center transition-all duration-200"
                  style={{ border: '1px solid rgba(199,154,56,0.2)', color: '#C79A38' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(199,154,56,0.12)'
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(199,154,56,0.5)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'transparent'
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(199,154,56,0.2)'
                  }}
                  data-cursor-hover
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* System */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#C79A38] mb-6" style={{ fontFamily: 'JetBrains Mono' }}>
              The System
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Moguls AI', path: '/divisions/moguls-ai' },
                { label: 'Oracle OS', path: '/oracle-os' },
                { label: 'Moguls Studio', path: '/divisions/moguls-studio' },
                { label: 'Moguls Growth', path: '/divisions/moguls-growth' },
                { label: 'Moguls Academy', path: '/divisions/moguls-academy' },
                { label: 'Moguls Labs', path: '/divisions/moguls-labs' },
              ].map(item => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-[#64748B] hover:text-[#C79A38] transition-colors flex items-center gap-1"
                    style={{ fontFamily: 'Inter' }}
                    data-cursor-hover
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#C79A38] mb-6" style={{ fontFamily: 'JetBrains Mono' }}>
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'About', path: '/about' },
                { label: 'Contact', path: '/contact' },
                { label: 'Launch Request', path: '/contact' },
              ].map(item => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-sm text-[#64748B] hover:text-[#C79A38] transition-colors"
                    style={{ fontFamily: 'Inter' }}
                    data-cursor-hover
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Status indicator */}
            <div className="mt-8 p-3 rounded" style={{ background: 'rgba(10, 11, 26, 0.6)', border: '1px solid rgba(199,154,56,0.12)' }}>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-[#10B981]" style={{ animation: 'pulse-green 2s infinite' }} />
                <span style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#10B981', letterSpacing: '0.12em' }}>SYSTEMS OPERATIONAL</span>
              </div>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', color: '#475569', letterSpacing: '0.08em' }}>
                ECOSYSTEM v2.0 — ACTIVE
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p style={{ fontFamily: 'JetBrains Mono', fontSize: '11px', color: '#334155', letterSpacing: '0.08em' }}>
            © {year} Mansas Moguls. All rights reserved.
          </p>
          <p style={{ fontFamily: 'JetBrains Mono', fontSize: '11px', color: '#334155', letterSpacing: '0.08em' }}>
            DISCIPLINE · INTELLIGENCE · INNOVATION · IMPACT
          </p>
        </div>
      </div>
    </footer>
  )
}
