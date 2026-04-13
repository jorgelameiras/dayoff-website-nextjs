'use client'

import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 'var(--nav-height)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 clamp(1rem, 4vw, 2rem)',
          transition: 'all 300ms cubic-bezier(0.16, 1, 0.3, 1)',
          background: scrolled ? 'rgba(10, 31, 26, 0.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          boxShadow: scrolled ? '0 1px 0 rgba(255,255,255,0.05), 0 4px 24px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        <a
          href="#hero"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
            color: '#ffffff',
            textDecoration: 'none',
            flexShrink: 0,
            zIndex: 10,
          }}
        >
          Casa<span style={{ color: 'var(--color-accent-500)' }}>Fresh</span>
        </a>

        {/* Desktop links */}
        <ul
          style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
            listStyle: 'none',
          }}
          className="nav-links-desktop"
        >
          {['Services', 'How It Works', 'Why Us', 'Pricing', 'Contact'].map((item) => {
            const href = `#${item.toLowerCase().replace(/ /g, '-').replace('why-us', 'about').replace('how-it-works', 'how-it-works')}`
            return (
              <li key={item}>
                <a
                  href={href === '#services' ? '#services' : href}
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: 'var(--color-primary-300)',
                    textDecoration: 'none',
                    transition: 'color 150ms',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-primary-300)')}
                >
                  {item}
                </a>
              </li>
            )
          })}
        </ul>

        <a
          href="#contact"
          className="nav-cta-desktop"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontWeight: 600,
            fontSize: '0.875rem',
            padding: '0.5rem 1.25rem',
            borderRadius: '9999px',
            background: 'var(--color-accent-500)',
            color: 'var(--color-primary-900)',
            textDecoration: 'none',
            transition: 'all 300ms',
            flexShrink: 0,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--color-accent-400)'
            e.currentTarget.style.transform = 'translateY(-1px)'
            e.currentTarget.style.boxShadow = '0 4px 14px rgba(99,216,102,0.4)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--color-accent-500)'
            e.currentTarget.style.transform = 'none'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          Book Now
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-toggle-mobile"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            zIndex: 1010,
            padding: '0.5rem',
            minWidth: '44px',
            minHeight: '44px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              display: 'block',
              width: '24px',
              height: '2px',
              background: '#ffffff',
              borderRadius: '2px',
              transition: 'all 300ms',
              transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
            }}
          />
          <span
            style={{
              display: 'block',
              width: '24px',
              height: '2px',
              background: '#ffffff',
              borderRadius: '2px',
              transition: 'all 300ms',
              opacity: menuOpen ? 0 : 1,
              transform: menuOpen ? 'scaleX(0)' : 'none',
            }}
          />
          <span
            style={{
              display: 'block',
              width: '24px',
              height: '2px',
              background: '#ffffff',
              borderRadius: '2px',
              transition: 'all 300ms',
              transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'var(--color-primary-900)',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
          }}
        >
          {[
            { label: 'Services', href: '#services' },
            { label: 'How It Works', href: '#how-it-works' },
            { label: 'Why Us', href: '#about' },
            { label: 'Pricing', href: '#pricing' },
            { label: 'Contact', href: '#contact' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
                color: '#ffffff',
                textDecoration: 'none',
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            style={{
              marginTop: '1rem',
              display: 'inline-flex',
              alignItems: 'center',
              fontWeight: 600,
              fontSize: '1rem',
              padding: '1rem 2rem',
              borderRadius: '9999px',
              background: 'var(--color-accent-500)',
              color: 'var(--color-primary-900)',
              textDecoration: 'none',
            }}
          >
            Book Now
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-cta-desktop { display: none !important; }
          .nav-toggle-mobile { display: flex !important; }
        }
      `}</style>
    </>
  )
}
