'use client'

import { useEffect, useRef } from 'react'

const steps = [
  {
    number: '1',
    icon: '📋',
    title: 'Request a Quote',
    text: 'Tell us about your property — size, location, how often guests stay.',
  },
  {
    number: '2',
    icon: '📅',
    title: 'We Schedule',
    text: 'We sync with your booking calendar and confirm turnover windows.',
  },
  {
    number: '3',
    icon: '🧹',
    title: 'We Clean & Service',
    text: 'Our team arrives, cleans top to bottom, and services your AC.',
  },
  {
    number: '4',
    icon: '⭐',
    title: 'You Review',
    text: 'You get a photo report and your guests arrive to a perfect home.',
  },
]

export default function HowItWorks() {
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
      id="how-it-works"
      ref={sectionRef}
      style={{
        padding: '8rem clamp(1rem, 4vw, 2rem)',
        background: '#ffffff',
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
            Simple Process
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
            Up and running in 4 steps
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-neutral-600)', lineHeight: 1.75 }}>
            Getting started is effortless. Four simple steps to a perfectly maintained vacation property.
          </p>
        </div>

        <div
          className="reveal steps-grid-layout"
          style={{ position: 'relative' }}
        >
          {/* Connector line */}
          <div
            className="steps-line"
            style={{
              position: 'absolute',
              top: '40px',
              left: 'calc(12.5% + 40px)',
              right: 'calc(12.5% + 40px)',
              height: '2px',
              background: 'linear-gradient(90deg, var(--color-accent-200), var(--color-cool-200), var(--color-accent-200))',
              zIndex: 0,
            }}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '2rem',
              position: 'relative',
            }}
            className="steps-inner-grid"
          >
            {steps.map((step) => (
              <div
                key={step.number}
                style={{
                  textAlign: 'center',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'var(--color-primary-900)',
                    color: 'var(--color-accent-500)',
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    position: 'relative',
                    zIndex: 1,
                    boxShadow: '0 8px 24px rgba(10, 31, 26, 0.25)',
                    border: '2px solid var(--color-primary-700)',
                  }}
                >
                  {step.number}
                </div>
                <span style={{ fontSize: '1.5rem', marginBottom: '0.5rem', display: 'block' }}>
                  {step.icon}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    color: 'var(--color-primary-900)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-neutral-600)',
                    lineHeight: 1.75,
                    maxWidth: '180px',
                    margin: '0 auto',
                  }}
                >
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .steps-inner-grid { grid-template-columns: 1fr 1fr !important; }
          .steps-line { display: none; }
        }
        @media (max-width: 768px) {
          .steps-inner-grid { grid-template-columns: 1fr !important; max-width: 320px; margin: 0 auto; }
        }
      `}</style>
    </section>
  )
}
