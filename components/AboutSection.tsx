'use client'

import { useEffect, useRef } from 'react'

const features = [
  {
    icon: '🛡️',
    title: 'Licensed & Insured',
    text: 'Fully licensed, bonded, and insured. Your property and your guests are always protected.',
  },
  {
    icon: '🌿',
    title: 'Eco-Friendly Products',
    text: 'Non-toxic, biodegradable cleaning products safe for guests, children, and the planet.',
  },
  {
    icon: '⚡',
    title: '24h Response',
    text: 'Emergency? We respond within 24 hours — often same-day for our premium clients.',
  },
  {
    icon: '📸',
    title: 'Photo Reports',
    text: 'Detailed photo reports after every visit so you always know your property is perfect.',
  },
]

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    const elements = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        padding: '8rem clamp(1rem, 4vw, 2rem)',
        background: 'var(--color-primary-900)',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glows */}
      <div
        style={{
          position: 'absolute',
          top: '-30%',
          right: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,216,102,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-20%',
          left: '-5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(58,123,200,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
          }}
          className="about-grid-layout"
        >
          {/* Left text */}
          <div className="reveal-left">
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--color-accent-400)',
                fontWeight: 500,
                marginBottom: '1rem',
              }}
            >
              Why CasaFresh
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: '#ffffff',
                marginBottom: '1rem',
              }}
            >
              Built for vacation property owners
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-primary-300)', lineHeight: 1.75 }}>
              We&apos;re not a generic cleaning service. Every process, product, and checklist is designed specifically for the unique demands of vacation rental properties — where guest experience is everything.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.25rem',
                marginTop: '2.5rem',
              }}
              className="about-features-grid"
            >
              {features.map((feat) => (
                <div
                  key={feat.title}
                  style={{
                    padding: '1.5rem',
                    background: 'rgba(255,255,255,0.03)',
                    borderRadius: '1.5rem',
                    border: '1px solid rgba(255,255,255,0.06)',
                    transition: 'all 300ms',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.borderColor = 'rgba(99,216,102,0.15)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                    e.currentTarget.style.transform = 'none'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                  }}
                >
                  <span style={{ fontSize: '1.75rem', marginBottom: '0.75rem', display: 'block' }}>
                    {feat.icon}
                  </span>
                  <h4 style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '0.5rem', color: '#ffffff' }}>
                    {feat.title}
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-primary-300)', lineHeight: 1.75 }}>
                    {feat.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="reveal-right" style={{ position: 'relative' }}>
            <div
              style={{
                width: '100%',
                aspectRatio: '5/4',
                background: 'linear-gradient(135deg, var(--color-primary-800) 0%, var(--color-primary-700) 100%)',
                borderRadius: '2rem',
                border: '1px solid rgba(255,255,255,0.07)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-40%',
                  right: '-20%',
                  width: '300px',
                  height: '300px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(99,216,102,0.08) 0%, transparent 70%)',
                }}
              />
              <div style={{ fontSize: '5rem', textAlign: 'center', lineHeight: 1 }}>🏡</div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6875rem',
                  color: 'var(--color-primary-400)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  textAlign: 'center',
                  marginTop: '0.75rem',
                }}
              >
                Your vacation home
              </div>

              {/* Stats row */}
              <div
                style={{
                  display: 'flex',
                  gap: '1rem',
                  marginTop: '2rem',
                  width: '100%',
                  padding: '0 1.5rem',
                }}
              >
                {[
                  { num: '500+', label: 'Properties' },
                  { num: '4.9★', label: 'Rating' },
                  { num: '24h', label: 'Response' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    style={{
                      flex: 1,
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: '1rem',
                      padding: '1rem',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
                        color: 'var(--color-accent-400)',
                        lineHeight: 1,
                      }}
                    >
                      {stat.num}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '10px',
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

            {/* Badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '-16px',
                right: '-16px',
                background: 'var(--color-accent-500)',
                color: 'var(--color-primary-900)',
                padding: '1rem 1.5rem',
                borderRadius: '1.5rem',
                fontWeight: 700,
                boxShadow: '0 8px 24px rgba(99,216,102,0.3)',
                textAlign: 'center',
              }}
            >
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1 }}>
                100%
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginTop: '2px',
                }}
              >
                Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .about-grid-layout { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .about-features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
