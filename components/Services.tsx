'use client'

import { useEffect, useRef } from 'react'

interface ServiceCard {
  icon: string
  overline: string
  title: string
  description: string
  features: string[]
  type: 'clean' | 'ac' | 'premium'
}

const services: ServiceCard[] = [
  {
    icon: '🧹',
    overline: 'Cleaning',
    title: 'Vacation Home Cleaning',
    description:
      'Fast, thorough turnover cleaning between guest stays. Your property is guest-ready within hours, not days — every time.',
    features: [
      'Full kitchen deep clean & sanitize',
      'Bathroom scrub & disinfect',
      'Fresh linen change & bed making',
      'Floors vacuumed & mopped',
      'Photo completion report',
    ],
    type: 'clean',
  },
  {
    icon: '❄️',
    overline: 'Maintenance',
    title: 'AC Maintenance',
    description:
      "Keep your AC running perfectly through Florida's brutal summers. No mid-stay breakdowns, no angry guests, no emergency bills.",
    features: [
      'Filter cleaning & replacement',
      'System performance diagnostic',
      'Refrigerant level inspection',
      'Coil cleaning & drainage check',
      'Emergency repair coordination',
    ],
    type: 'ac',
  },
  {
    icon: '✨',
    overline: 'Premium',
    title: 'Premium Package',
    description:
      'The complete property care solution. Cleaning, AC, restocking, and inspection — one call handles it all. Set it and forget it.',
    features: [
      'Everything in Cleaning + AC',
      'Amenity restocking service',
      'Full property inspection report',
      'Dedicated account manager',
      'Priority same-day scheduling',
    ],
    type: 'premium',
  },
]

const typeStyles = {
  clean: {
    iconBg: 'var(--color-accent-50)',
    overlineColor: 'var(--color-accent-600)',
    checkBg: 'var(--color-accent-50)',
    checkColor: 'var(--color-accent-600)',
    topBar: 'linear-gradient(90deg, var(--color-accent-500), var(--color-accent-400))',
  },
  ac: {
    iconBg: 'var(--color-cool-50)',
    overlineColor: 'var(--color-cool-600)',
    checkBg: 'var(--color-cool-50)',
    checkColor: 'var(--color-cool-600)',
    topBar: 'linear-gradient(90deg, var(--color-cool-500), var(--color-cool-400))',
  },
  premium: {
    iconBg: 'var(--color-warm-100)',
    overlineColor: 'var(--color-warm-600)',
    checkBg: 'var(--color-warm-100)',
    checkColor: 'var(--color-warm-700)',
    topBar: 'linear-gradient(90deg, var(--color-warm-500), var(--color-accent-500))',
  },
}

export default function Services() {
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
    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="services"
      ref={sectionRef}
      style={{
        padding: '8rem clamp(1rem, 4vw, 2rem)',
        background: 'var(--color-warm-50)',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
        <div
          className="reveal"
          style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 4rem' }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6875rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--color-accent-600)',
              fontWeight: 500,
              marginBottom: '1rem',
            }}
          >
            What We Do
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
              color: 'var(--color-primary-900)',
            }}
          >
            Services built for vacation properties
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-neutral-600)', lineHeight: 1.75 }}>
            From lightning-fast turnovers to full AC maintenance, we handle everything so your guests always arrive to a perfect home.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
          }}
          className="services-grid-layout"
        >
          {services.map((service) => {
            const styles = typeStyles[service.type]
            return (
              <div
                key={service.title}
                className="reveal service-card-hover"
                style={{
                  background: '#ffffff',
                  borderRadius: '1.5rem',
                  padding: '2rem',
                  border: '1px solid var(--color-neutral-100)',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'default',
                  transition: 'all 300ms cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                {/* Top accent bar */}
                <div
                  className="service-top-bar"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: styles.topBar,
                    opacity: 0,
                    transition: 'opacity 300ms',
                  }}
                />

                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.75rem',
                    marginBottom: '1.5rem',
                    background: styles.iconBg,
                  }}
                >
                  {service.icon}
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: styles.overlineColor,
                    fontWeight: 500,
                    marginBottom: '0.5rem',
                  }}
                >
                  {service.overline}
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
                    color: 'var(--color-primary-900)',
                    marginBottom: '0.75rem',
                    lineHeight: 1.25,
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-neutral-600)',
                    lineHeight: 1.75,
                    marginBottom: '1.5rem',
                  }}
                >
                  {service.description}
                </p>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    borderTop: '1px solid var(--color-neutral-100)',
                    paddingTop: '1.25rem',
                  }}
                >
                  {service.features.map((feat) => (
                    <div
                      key={feat}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.5rem',
                        fontSize: '0.875rem',
                        color: 'var(--color-neutral-700)',
                      }}
                    >
                      <div
                        style={{
                          width: '16px',
                          height: '16px',
                          background: styles.checkBg,
                          color: styles.checkColor,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '9px',
                          fontWeight: 700,
                          flexShrink: 0,
                          marginTop: '1px',
                        }}
                      >
                        ✓
                      </div>
                      {feat}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        .service-card-hover:hover {
          box-shadow: 0 8px 30px rgba(0,0,0,0.12);
          transform: translateY(-6px);
          border-color: var(--color-neutral-200);
        }
        .service-card-hover:hover .service-top-bar {
          opacity: 1;
        }
        @media (max-width: 1024px) {
          .services-grid-layout { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 768px) {
          .services-grid-layout { grid-template-columns: 1fr !important; max-width: 440px; margin: 0 auto; }
        }
      `}</style>
    </section>
  )
}
