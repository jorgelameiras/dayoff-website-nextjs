'use client'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        background: 'var(--color-primary-900)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse at 20% 40%, rgba(99,216,102,0.07) 0%, transparent 55%),
            radial-gradient(ellipse at 75% 75%, rgba(58,123,200,0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 10%, rgba(99,216,102,0.04) 0%, transparent 40%)
          `,
          pointerEvents: 'none',
        }}
      />
      {/* Grid overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: 'var(--max-width)',
          margin: '0 auto',
          padding: 'calc(var(--nav-height) + 4rem) clamp(1rem, 4vw, 2rem) 4rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'center',
        }}
        className="hero-content-grid"
      >
        {/* Text */}
        <div style={{ maxWidth: '580px' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6875rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--color-accent-500)',
              fontWeight: 500,
              marginBottom: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}
          >
            <span style={{ width: '28px', height: '1.5px', background: 'var(--color-accent-500)', flexShrink: 0 }} />
            Vacation Property Care · Central Florida
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3.5rem, 8vw, 7rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#ffffff',
              marginBottom: '1.5rem',
            }}
          >
            Fresh homes,<br />
            <span style={{ color: 'var(--color-accent-400)', fontStyle: 'italic' }}>happy guests.</span>
          </h1>

          <p
            style={{
              fontSize: '1.125rem',
              color: 'var(--color-primary-300)',
              lineHeight: 1.75,
              marginBottom: '2rem',
              maxWidth: '460px',
            }}
          >
            Professional cleaning and AC maintenance for vacation rentals across Central Florida. Keep your property spotless and perfectly cooled — every single turnover.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                fontWeight: 600,
                fontSize: '1rem',
                padding: '1rem 2rem',
                borderRadius: '9999px',
                background: 'var(--color-accent-500)',
                color: 'var(--color-primary-900)',
                textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(99,216,102,0.4)',
                transition: 'all 300ms',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--color-accent-400)'
                e.currentTarget.style.boxShadow = '0 6px 24px rgba(99,216,102,0.55)'
                e.currentTarget.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--color-accent-500)'
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(99,216,102,0.4)'
                e.currentTarget.style.transform = 'none'
              }}
            >
              Book a Cleaning
            </a>
            <a
              href="#services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                fontWeight: 600,
                fontSize: '1rem',
                padding: '1rem 2rem',
                borderRadius: '9999px',
                background: 'transparent',
                color: '#ffffff',
                border: '1.5px solid rgba(255,255,255,0.3)',
                textDecoration: 'none',
                transition: 'all 300ms',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              Our Services ↓
            </a>
          </div>

          {/* Stats */}
          <div
            style={{
              display: 'flex',
              gap: '2.5rem',
              marginTop: '3rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(255,255,255,0.07)',
            }}
            className="hero-stats"
          >
            {[
              { number: '500+', label: 'Properties Served' },
              { number: '4.9★', label: 'Avg. Guest Rating' },
              { number: '24h', label: 'Response Time' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                    color: 'var(--color-accent-400)',
                    lineHeight: 1,
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--color-primary-400)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginTop: '0.25rem',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* House illustration */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            perspective: '1200px',
          }}
          className="hero-scene"
        >
          <div
            style={{
              position: 'absolute',
              bottom: '8%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '340px',
              height: '36px',
              background: 'radial-gradient(ellipse, rgba(99,216,102,0.18) 0%, transparent 70%)',
              borderRadius: '50%',
              animation: 'pulseGlow 3s ease-in-out infinite',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              width: '480px',
              height: '480px',
              position: 'relative',
              transformStyle: 'preserve-3d',
              animation: 'floatHouse 6s ease-in-out infinite',
            }}
          >
            <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.4))' }}>
              <ellipse cx="250" cy="458" rx="190" ry="20" fill="rgba(0,0,0,0.18)"/>
              <rect x="110" y="218" width="280" height="200" rx="8" fill="#132E26"/>
              <rect x="114" y="222" width="272" height="196" rx="6" fill="#1B3D32"/>
              <polygon points="390,218 420,195 420,390 390,418" fill="#0A1F1A" opacity="0.8"/>
              <polygon points="95,222 250,108 405,222" fill="#0A1F1A"/>
              <polygon points="100,222 250,113 400,222" fill="#132E26"/>
              <polygon points="400,222 420,195 280,95 250,113" fill="#0A1F1A" opacity="0.6"/>
              <rect x="318" y="130" width="28" height="66" rx="3" fill="#0A1F1A"/>
              <rect x="314" y="127" width="36" height="8" rx="2" fill="#132E26"/>
              <rect x="212" y="308" width="76" height="110" rx="7" fill="#0A1F1A"/>
              <rect x="216" y="312" width="68" height="102" rx="5" fill="#132E26"/>
              <circle cx="272" cy="368" r="4.5" fill="#63D866" opacity="0.9"/>
              <rect x="138" y="256" width="54" height="58" rx="5" fill="#0A1F1A"/>
              <rect x="141" y="259" width="48" height="52" rx="4" fill="#1E4066" opacity="0.6"/>
              <line x1="165" y1="259" x2="165" y2="311" stroke="#132E26" strokeWidth="1.5"/>
              <line x1="141" y1="288" x2="189" y2="288" stroke="#132E26" strokeWidth="1.5"/>
              <rect x="138" y="256" width="54" height="58" rx="5" fill="none" stroke="#234C3E" strokeWidth="1.5"/>
              <rect x="308" y="256" width="54" height="58" rx="5" fill="#0A1F1A"/>
              <rect x="311" y="259" width="48" height="52" rx="4" fill="#1E4066" opacity="0.6"/>
              <line x1="335" y1="259" x2="335" y2="311" stroke="#132E26" strokeWidth="1.5"/>
              <line x1="311" y1="288" x2="359" y2="288" stroke="#132E26" strokeWidth="1.5"/>
              <rect x="308" y="256" width="54" height="58" rx="5" fill="none" stroke="#234C3E" strokeWidth="1.5"/>
              <rect x="303" y="235" width="68" height="18" rx="5" fill="#285382"/>
              <rect x="305" y="237" width="64" height="14" rx="4" fill="#3A7BC8"/>
              <rect x="200" y="416" width="100" height="10" rx="2" fill="#0A1F1A"/>
              <rect x="195" y="422" width="110" height="8" rx="2" fill="#132E26"/>
              <rect x="90" y="418" width="320" height="8" rx="4" fill="#2C5B4A" opacity="0.4"/>
              <line x1="128" y1="418" x2="132" y2="340" stroke="#234C3E" strokeWidth="5" strokeLinecap="round"/>
              <path d="M132,340 Q115,320 100,328" stroke="#4A7D6A" fill="none" strokeWidth="3" strokeLinecap="round"/>
              <path d="M132,340 Q118,328 115,312" stroke="#4A7D6A" fill="none" strokeWidth="3" strokeLinecap="round"/>
              <path d="M132,340 Q130,325 140,315" stroke="#63D866" fill="none" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
              <path d="M132,340 Q145,330 150,320" stroke="#4A7D6A" fill="none" strokeWidth="3" strokeLinecap="round"/>
              <circle cx="165" cy="418" r="16" fill="#2C5B4A" opacity="0.8"/>
              <circle cx="178" cy="414" r="12" fill="#4A7D6A" opacity="0.7"/>
              <circle cx="156" cy="414" r="10" fill="#63D866" opacity="0.25"/>
              <circle cx="340" cy="418" r="14" fill="#2C5B4A" opacity="0.8"/>
              <circle cx="328" cy="414" r="11" fill="#4A7D6A" opacity="0.7"/>
            </svg>

            {/* Floating items */}
            {[
              { emoji: '🧹', style: { top: '4%', right: '-12%', fontSize: '2.4rem', animationDelay: '0s' } },
              { emoji: '🧽', style: { top: '28%', left: '-14%', fontSize: '2rem', animationDelay: '-1.2s' } },
              { emoji: '🧴', style: { bottom: '22%', right: '-18%', fontSize: '1.9rem', animationDelay: '-2.1s' } },
              { emoji: '✨', style: { top: '12%', left: '6%', fontSize: '1.7rem', animationDelay: '-0.6s' } },
              { emoji: '❄️', style: { bottom: '32%', left: '-10%', fontSize: '2.1rem', animationDelay: '-1.8s' } },
              { emoji: '💨', style: { top: '52%', right: '-6%', fontSize: '1.5rem', animationDelay: '-2.7s' } },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  animation: `floatItem 4s ease-in-out infinite`,
                  filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.25))',
                  userSelect: 'none',
                  pointerEvents: 'none',
                  ...item.style,
                }}
              >
                {item.emoji}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .hero-content-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-scene { display: none !important; }
          .hero-stats { justify-content: center; }
        }
        @media (max-width: 480px) {
          .hero-stats { flex-wrap: wrap; justify-content: space-around; gap: 1rem; }
        }
      `}</style>
    </section>
  )
}
