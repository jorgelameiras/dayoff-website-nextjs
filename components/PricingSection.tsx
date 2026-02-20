'use client'

import { useEffect, useRef } from 'react'

const plans = [
  {
    plan: 'Starter',
    name: 'Cleaning Only',
    price: '$149',
    period: 'per visit',
    features: [
      'Full turnover cleaning',
      'Bathroom & kitchen deep clean',
      'Linen change & bed making',
      'Floors vacuumed & mopped',
      'Photo completion report',
    ],
    featured: false,
    badge: null,
  },
  {
    plan: 'Most Popular',
    name: 'Cleaning + AC',
    price: '$249',
    period: 'per visit',
    features: [
      'Everything in Cleaning',
      'AC filter cleaning',
      'System performance check',
      'Coil & drainage inspection',
      'Priority scheduling',
      'Emergency support',
    ],
    featured: true,
    badge: 'Most Popular',
  },
  {
    plan: 'Premium',
    name: 'Full Care Package',
    price: '$349',
    period: 'per visit',
    features: [
      'Everything in Cleaning + AC',
      'Amenity restocking',
      'Full property inspection',
      'Dedicated account manager',
      'Same-day availability',
      'Monthly performance report',
    ],
    featured: false,
    badge: null,
  },
]

export default function PricingSection() {
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
      id="pricing"
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
            Transparent Pricing
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
            Simple, honest pricing
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-neutral-600)', lineHeight: 1.75 }}>
            No hidden fees. No long-term contracts. Just reliable service at a fair price.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            alignItems: 'start',
          }}
          className="pricing-grid-layout"
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="reveal"
              style={{
                background: plan.featured ? 'var(--color-primary-900)' : '#ffffff',
                color: plan.featured ? '#ffffff' : 'var(--color-neutral-900)',
                borderRadius: '1.5rem',
                padding: '2rem',
                border: plan.featured
                  ? '1.5px solid var(--color-primary-700)'
                  : '1.5px solid var(--color-neutral-200)',
                transform: plan.featured ? 'scale(1.04)' : 'none',
                boxShadow: plan.featured ? '0 20px 60px rgba(0,0,0,0.15)' : 'none',
                position: 'relative',
                transition: 'all 300ms',
              }}
            >
              {plan.badge && (
                <div
                  style={{
                    display: 'inline-block',
                    background: 'rgba(99,216,102,0.15)',
                    color: 'var(--color-accent-400)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                    marginBottom: '1rem',
                    border: '1px solid rgba(99,216,102,0.2)',
                  }}
                >
                  {plan.badge}
                </div>
              )}

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: plan.featured ? 'var(--color-primary-400)' : 'var(--color-neutral-500)',
                  fontWeight: 500,
                  marginBottom: '0.25rem',
                }}
              >
                {plan.plan}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
                  color: plan.featured ? '#ffffff' : 'var(--color-primary-900)',
                  marginBottom: '1rem',
                }}
              >
                {plan.name}
              </h3>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                  lineHeight: 1,
                  color: plan.featured ? 'var(--color-accent-400)' : 'var(--color-primary-900)',
                  marginBottom: '0.25rem',
                }}
              >
                {plan.price}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: plan.featured ? 'var(--color-primary-400)' : 'var(--color-neutral-500)',
                  marginBottom: '1.5rem',
                }}
              >
                {plan.period}
              </div>

              <div
                style={{
                  height: '1px',
                  background: plan.featured ? 'rgba(255,255,255,0.08)' : 'var(--color-neutral-100)',
                  marginBottom: '1.5rem',
                }}
              />

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  marginBottom: '2rem',
                }}
              >
                {plan.features.map((feat) => (
                  <div
                    key={feat}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                      fontSize: '0.875rem',
                      color: plan.featured ? 'var(--color-primary-200)' : 'var(--color-neutral-600)',
                      lineHeight: 1.25,
                    }}
                  >
                    <div
                      style={{
                        width: '18px',
                        height: '18px',
                        background: plan.featured ? 'rgba(99,216,102,0.2)' : 'var(--color-accent-50)',
                        color: plan.featured ? 'var(--color-accent-400)' : 'var(--color-accent-600)',
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

              <a
                href="#contact"
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'center',
                  padding: '1rem 1.5rem',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  fontFamily: 'var(--font-body)',
                  textDecoration: 'none',
                  transition: 'all 300ms',
                  background: plan.featured ? 'var(--color-accent-500)' : 'transparent',
                  color: plan.featured ? 'var(--color-primary-900)' : 'var(--color-neutral-700)',
                  border: plan.featured ? 'none' : '1.5px solid var(--color-neutral-200)',
                  boxShadow: plan.featured ? '0 4px 16px rgba(99,216,102,0.4)' : 'none',
                }}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        <p
          style={{
            textAlign: 'center',
            marginTop: '2rem',
            fontSize: '0.875rem',
            color: 'var(--color-neutral-500)',
          }}
        >
          All prices are starting rates. Final pricing depends on property size and specific requirements.{' '}
          <a
            href="#contact"
            style={{ color: 'var(--color-accent-600)', textDecoration: 'none', fontWeight: 500 }}
          >
            Get a custom quote →
          </a>
        </p>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .pricing-grid-layout { grid-template-columns: 1fr !important; max-width: 440px; margin: 0 auto; }
        }
      `}</style>
    </section>
  )
}
