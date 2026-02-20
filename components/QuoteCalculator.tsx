'use client'

import { useEffect, useRef, useState } from 'react'

const BEDROOM_OPTIONS = [
  { value: 1, label: '1 BR' },
  { value: 2, label: '2 BR' },
  { value: 3, label: '3 BR' },
  { value: 4, label: '4 BR' },
  { value: 5, label: '5 BR' },
  { value: 6, label: '6+ BR' },
]

const SERVICE_OPTIONS = [
  { value: 'cleaning', label: '🧹 Cleaning Only' },
  { value: 'ac', label: '❄️ AC Maintenance Only' },
  { value: 'bundle', label: '✨ Cleaning + AC Bundle' },
]

const FREQUENCY_OPTIONS = [
  { value: 'once', label: 'One-time', visitsPerMonth: null, discount: 0 },
  { value: 'monthly', label: 'Monthly', visitsPerMonth: 1, discount: 0.05 },
  { value: 'biweekly', label: 'Bi-weekly', visitsPerMonth: 2, discount: 0.1 },
  { value: 'weekly', label: 'Weekly', visitsPerMonth: 4.3, discount: 0.15 },
]

const BASE_CLEANING_PRICES: Record<number, number> = {
  1: 90,
  2: 110,
  3: 140,
  4: 170,
  5: 210,
  6: 260,
}

function calcPrice(
  bedrooms: number,
  service: string,
  frequency: string
): { perVisit: number; perMonth: number | null; savingsMsg: string | null } {
  const freq = FREQUENCY_OPTIONS.find(f => f.value === frequency)!
  const baseClean = BASE_CLEANING_PRICES[bedrooms] ?? 260

  let perVisit = 0
  let savingsMsg: string | null = null

  if (service === 'cleaning') {
    perVisit = baseClean
  } else if (service === 'ac') {
    perVisit = 35
  } else if (service === 'bundle') {
    perVisit = baseClean + 25
    savingsMsg = 'You save $10 vs. booking separately'
  }

  // Apply frequency discount
  perVisit = perVisit * (1 - freq.discount)

  const perMonth = freq.visitsPerMonth ? Math.round(perVisit * freq.visitsPerMonth) : null

  return { perVisit: Math.round(perVisit), perMonth, savingsMsg }
}

export default function QuoteCalculator() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [bedrooms, setBedrooms] = useState(3)
  const [service, setService] = useState('bundle')
  const [frequency, setFrequency] = useState('biweekly')

  const { perVisit, perMonth, savingsMsg } = calcPrice(bedrooms, service, frequency)
  const freqLabel = FREQUENCY_OPTIONS.find(f => f.value === frequency)?.label ?? ''
  const discountPct = FREQUENCY_OPTIONS.find(f => f.value === frequency)?.discount ?? 0

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

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="quote"
      ref={sectionRef}
      style={{
        padding: '8rem clamp(1rem, 4vw, 2rem)',
        background: 'var(--color-primary-50)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background decoration */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,216,102,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Heading */}
        <div
          className="reveal"
          style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3.5rem' }}
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
            Instant Pricing
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'var(--color-primary-900)',
              marginBottom: '1rem',
            }}
          >
            Get an Instant Estimate
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-neutral-600)', lineHeight: 1.75 }}>
            Pick your property and see real pricing instantly — no forms, no waiting.
          </p>
        </div>

        {/* Calculator Card */}
        <div
          className="reveal"
          style={{
            maxWidth: '780px',
            margin: '0 auto',
            background: '#ffffff',
            borderRadius: '2rem',
            border: '1.5px solid var(--color-neutral-200)',
            boxShadow: '0 24px 80px rgba(10,31,26,0.08)',
            overflow: 'hidden',
          }}
        >
          {/* Inputs */}
          <div style={{ padding: '2.5rem 2.5rem 0' }}>

            {/* Bedrooms */}
            <div style={{ marginBottom: '2rem' }}>
              <label
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--color-neutral-500)',
                  fontWeight: 500,
                  marginBottom: '0.875rem',
                }}
              >
                Bedrooms
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {BEDROOM_OPTIONS.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => setBedrooms(opt.value)}
                    style={{
                      padding: '0.625rem 1.125rem',
                      borderRadius: '9999px',
                      border: bedrooms === opt.value
                        ? '1.5px solid var(--color-accent-500)'
                        : '1.5px solid var(--color-neutral-200)',
                      background: bedrooms === opt.value
                        ? 'var(--color-accent-50)'
                        : '#ffffff',
                      color: bedrooms === opt.value
                        ? 'var(--color-accent-700)'
                        : 'var(--color-neutral-600)',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      cursor: 'pointer',
                      transition: 'all 200ms',
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Service Type */}
            <div style={{ marginBottom: '2rem' }}>
              <label
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--color-neutral-500)',
                  fontWeight: 500,
                  marginBottom: '0.875rem',
                }}
              >
                Service Type
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {SERVICE_OPTIONS.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => setService(opt.value)}
                    style={{
                      flex: '1',
                      minWidth: '160px',
                      padding: '0.875rem 1.25rem',
                      borderRadius: '1rem',
                      border: service === opt.value
                        ? '1.5px solid var(--color-accent-500)'
                        : '1.5px solid var(--color-neutral-200)',
                      background: service === opt.value
                        ? 'var(--color-accent-50)'
                        : '#ffffff',
                      color: service === opt.value
                        ? 'var(--color-accent-700)'
                        : 'var(--color-neutral-600)',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      cursor: 'pointer',
                      transition: 'all 200ms',
                      textAlign: 'center',
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Frequency */}
            <div style={{ marginBottom: '0' }}>
              <label
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--color-neutral-500)',
                  fontWeight: 500,
                  marginBottom: '0.875rem',
                }}
              >
                Frequency
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {FREQUENCY_OPTIONS.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => setFrequency(opt.value)}
                    style={{
                      flex: '1',
                      minWidth: '110px',
                      padding: '0.625rem 1rem',
                      borderRadius: '9999px',
                      border: frequency === opt.value
                        ? '1.5px solid var(--color-accent-500)'
                        : '1.5px solid var(--color-neutral-200)',
                      background: frequency === opt.value
                        ? 'var(--color-accent-50)'
                        : '#ffffff',
                      color: frequency === opt.value
                        ? 'var(--color-accent-700)'
                        : 'var(--color-neutral-600)',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      cursor: 'pointer',
                      transition: 'all 200ms',
                      textAlign: 'center',
                      position: 'relative',
                    }}
                  >
                    {opt.label}
                    {opt.discount > 0 && (
                      <span
                        style={{
                          display: 'inline-block',
                          marginLeft: '0.375rem',
                          fontSize: '0.6875rem',
                          color: frequency === opt.value ? 'var(--color-accent-600)' : 'var(--color-accent-600)',
                          fontWeight: 700,
                        }}
                      >
                        -{Math.round(opt.discount * 100)}%
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Price Result */}
          <div
            style={{
              margin: '2rem 2.5rem 0',
              padding: '1.75rem 2rem',
              borderRadius: '1.25rem',
              background: 'var(--color-primary-900)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--color-primary-400)',
                  fontWeight: 500,
                  marginBottom: '0.375rem',
                }}
              >
                Estimated Price
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                    lineHeight: 1,
                    color: 'var(--color-accent-400)',
                  }}
                >
                  ${perVisit}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.875rem',
                    color: 'var(--color-primary-400)',
                  }}
                >
                  per visit
                </span>
              </div>
              {perMonth !== null && (
                <div
                  style={{
                    marginTop: '0.375rem',
                    fontSize: '0.9375rem',
                    color: 'var(--color-primary-300)',
                  }}
                >
                  ~${perMonth}/month
                </div>
              )}
              {savingsMsg && (
                <div
                  style={{
                    marginTop: '0.5rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.375rem',
                    background: 'rgba(99,216,102,0.1)',
                    border: '1px solid rgba(99,216,102,0.2)',
                    borderRadius: '9999px',
                    padding: '0.25rem 0.75rem',
                    fontSize: '0.75rem',
                    color: 'var(--color-accent-400)',
                    fontWeight: 600,
                  }}
                >
                  🎉 {savingsMsg}
                </div>
              )}
              {discountPct > 0 && (
                <div
                  style={{
                    marginTop: savingsMsg ? '0.375rem' : '0.5rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.375rem',
                    background: 'rgba(99,216,102,0.08)',
                    border: '1px solid rgba(99,216,102,0.15)',
                    borderRadius: '9999px',
                    padding: '0.25rem 0.75rem',
                    fontSize: '0.75rem',
                    color: 'var(--color-accent-400)',
                    fontWeight: 600,
                    marginLeft: savingsMsg ? '0.5rem' : '0',
                  }}
                >
                  {Math.round(discountPct * 100)}% {freqLabel.toLowerCase()} discount applied
                </div>
              )}
            </div>

            <button
              onClick={scrollToContact}
              style={{
                padding: '1rem 1.75rem',
                background: 'var(--color-accent-500)',
                color: 'var(--color-primary-900)',
                borderRadius: '9999px',
                fontWeight: 700,
                fontSize: '0.9375rem',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(99,216,102,0.35)',
                transition: 'all 200ms',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.background = 'var(--color-accent-400)'
                ;(e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.background = 'var(--color-accent-500)'
                ;(e.currentTarget as HTMLButtonElement).style.transform = 'none'
              }}
            >
              Get this exact quote →
            </button>
          </div>

          {/* Disclaimer */}
          <div
            style={{
              padding: '1.25rem 2.5rem 2rem',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6875rem',
                color: 'var(--color-neutral-400)',
                letterSpacing: '0.02em',
              }}
            >
              Final quote may vary based on property size. No hidden fees. No commitment required.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        #quote button:focus-visible {
          outline: 2px solid var(--color-accent-500);
          outline-offset: 2px;
        }
      `}</style>
    </section>
  )
}
