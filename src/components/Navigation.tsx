import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'The System', path: '/divisions' },
  { label: 'Oracle OS', path: '/oracle-os' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(248, 249, 252, 0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(199, 154, 56, 0.12)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group" data-cursor-hover>
          {/* MM Crown Logo */}
          <div className="relative w-9 h-9">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <polygon points="20,2 38,12 38,28 20,38 2,28 2,12" fill="#1E1B4B" stroke="url(#goldGrad)" strokeWidth="1.5" />
              <defs>
                <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F0D597" />
                  <stop offset="50%" stopColor="#C79A38" />
                  <stop offset="100%" stopColor="#8B6914" />
                </linearGradient>
              </defs>
              {/* Crown */}
              <path d="M12 26 L14 18 L17 22 L20 15 L23 22 L26 18 L28 26 Z" fill="url(#goldGrad)" />
              {/* M M Letters */}
              <text x="50%" y="34" textAnchor="middle" fill="url(#goldGrad)" fontSize="7" fontFamily="Space Grotesk" fontWeight="700" letterSpacing="0.5">MM</text>
            </svg>
          </div>
          <div>
            <div className="text-gold-gradient font-display font-700 text-sm tracking-widest uppercase" style={{ fontFamily: 'Space Grotesk', fontWeight: 700, letterSpacing: '0.15em', background: 'linear-gradient(135deg, #F0D597 0%, #C79A38 50%, #8B6914 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Mansas Moguls
            </div>
            <div className="text-[9px] tracking-widest uppercase text-[#94A3B8]" style={{ fontFamily: 'JetBrains Mono', letterSpacing: '0.2em' }}>
              Empire Operating System
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className="nav-link"
              style={{
                color: location.pathname === link.path ? 'var(--gold-primary)' : undefined,
              }}
              data-cursor-hover
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/contact" className="btn-gold text-xs py-2.5 px-6" data-cursor-hover>
            Launch Request
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#475569]"
          onClick={() => setMenuOpen(!menuOpen)}
          data-cursor-hover
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden glass-panel mx-4 mb-4 rounded-lg overflow-hidden">
          <nav className="flex flex-col p-4 gap-2">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className="px-4 py-3 rounded-md text-sm font-medium tracking-wide uppercase hover:bg-[rgba(199,154,56,0.08)] transition-colors"
                style={{
                  color: location.pathname === link.path ? 'var(--gold-primary)' : 'var(--text-secondary)',
                  fontFamily: 'Space Grotesk',
                  letterSpacing: '0.06em',
                }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 pt-2" style={{ borderTop: '1px solid rgba(199,154,56,0.12)' }}>
              <Link to="/contact" className="btn-gold w-full justify-center text-xs py-2.5" onClick={() => setMenuOpen(false)}>
                Launch Request
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
