'use client'

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--color-primary-900)',
        color: 'var(--color-primary-300)',
        padding: '4rem clamp(1rem, 4vw, 2rem) 2rem',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
        {/* Footer grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            gap: '3rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            marginBottom: '2rem',
          }}
          className="footer-grid-layout"
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(99,216,102,0.08)',
                border: '1px solid rgba(99,216,102,0.12)',
                borderRadius: '9999px',
                padding: '0.5rem 1rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--color-accent-500)',
                marginBottom: '1.5rem',
              }}
            >
              <div
                style={{
                  width: '6px',
                  height: '6px',
                  background: 'var(--color-accent-500)',
                  borderRadius: '50%',
                  animation: 'pulse 2s ease-in-out infinite',
                }}
              />
              Now Accepting New Clients
            </div>

            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                color: '#ffffff',
                marginBottom: '1rem',
              }}
            >
              Casa<span style={{ color: 'var(--color-accent-500)' }}>Fresh</span>
            </div>

            <p
              style={{
                fontSize: '0.875rem',
                color: 'var(--color-primary-400)',
                lineHeight: 1.75,
                maxWidth: '300px',
                marginBottom: '1.5rem',
              }}
            >
              Professional vacation home cleaning and AC maintenance across Central Florida. Fresh homes, happy guests.
            </p>

            {['📧 hello@dayoff.com', '📞 (407) 555-0100', '📍 Orlando, FL'].map((item) => (
              <div
                key={item}
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--color-primary-400)',
                  marginBottom: '0.5rem',
                }}
              >
                {item}
              </div>
            ))}
          </div>

          {/* Services */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--color-primary-400)',
                marginBottom: '1.25rem',
              }}
            >
              Services
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Vacation Cleaning', 'AC Maintenance', 'Premium Package', 'Linen Service', 'Property Inspection'].map(
                (item) => (
                  <a
                    key={item}
                    href="#services"
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--color-primary-300)',
                      textDecoration: 'none',
                      transition: 'all 150ms',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--color-accent-400)'
                      e.currentTarget.style.paddingLeft = '0.5rem'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--color-primary-300)'
                      e.currentTarget.style.paddingLeft = '0'
                    }}
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Areas */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--color-primary-400)',
                marginBottom: '1.25rem',
              }}
            >
              Service Areas
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Orlando', 'Kissimmee', 'Daytona Beach', 'Clearwater', 'Tampa'].map((item) => (
                <span key={item} style={{ fontSize: '0.875rem', color: 'var(--color-primary-300)' }}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--color-primary-400)',
                marginBottom: '1.25rem',
              }}
            >
              Company
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'About Us', href: '#about' },
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Contact', href: '#contact' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-primary-300)',
                    textDecoration: 'none',
                    transition: 'all 150ms',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-accent-400)'
                    e.currentTarget.style.paddingLeft = '0.5rem'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--color-primary-300)'
                    e.currentTarget.style.paddingLeft = '0'
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.75rem',
            color: 'var(--color-primary-500)',
          }}
          className="footer-bottom-layout"
        >
          <span>© 2026 DayOff. All rights reserved. Licensed & Insured in Florida.</span>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {['IG', 'FB', 'X'].map((social) => (
              <a
                key={social}
                href="#"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-primary-400)',
                  fontSize: '12px',
                  fontFamily: 'var(--font-mono)',
                  textDecoration: 'none',
                  transition: 'all 150ms',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(99,216,102,0.12)'
                  e.currentTarget.style.color = 'var(--color-accent-400)'
                  e.currentTarget.style.borderColor = 'rgba(99,216,102,0.2)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                  e.currentTarget.style.color = 'var(--color-primary-400)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                  e.currentTarget.style.transform = 'none'
                }}
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid-layout { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; }
        }
        @media (max-width: 640px) {
          .footer-grid-layout { grid-template-columns: 1fr !important; }
          .footer-bottom-layout { flex-direction: column; gap: 1rem; text-align: center; }
        }
      `}</style>
    </footer>
  )
}
