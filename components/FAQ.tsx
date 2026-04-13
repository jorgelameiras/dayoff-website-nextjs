'use client'

import { useState, useEffect, useRef } from 'react'

const faqs = [
  {
    question: 'How quickly can you schedule a cleaning after a guest checks out?',
    answer:
      "We typically offer same-day and next-day turnover cleanings for properties in our service area. When you sign up, we sync with your booking calendar so we're ready to go the moment a guest checks out — usually within 2–4 hours.",
  },
  {
    question: 'Are your cleaning products safe for guests with allergies?',
    answer:
      'Yes. We use non-toxic, biodegradable, and hypoallergenic cleaning products. All products are free of harsh chemical residues and safe for children, pets, and guests with sensitivities. We can also accommodate specific product preferences on request.',
  },
  {
    question: 'How often should I have my AC serviced?',
    answer:
      "In Florida's climate, we recommend AC maintenance every 3–6 months. For vacation rentals with high guest turnover, quarterly servicing prevents breakdowns and keeps your energy bills down. We offer scheduled maintenance plans that work around your booking calendar.",
  },
  {
    question: 'What areas of Central Florida do you serve?',
    answer:
      'We serve Orlando, Kissimmee, Daytona Beach, Clearwater, and Tampa, plus surrounding areas including Celebration, Champions Gate, and Reunion. If you\'re not sure if we cover your area, just ask — we\'re expanding regularly.',
  },
  {
    question: 'Do I get a report after each cleaning or service?',
    answer:
      'Yes. After every visit, you receive a photo completion report via email or text. The report includes photos of all key areas, a checklist of completed tasks, and notes on anything that needs your attention (like supplies running low or minor maintenance issues).',
  },
  {
    question: 'Can I lock in recurring service at a discounted rate?',
    answer:
      'Absolutely. Our monthly plans offer 15–20% savings compared to one-off bookings. You get priority scheduling, a dedicated team that knows your property, and we handle the coordination so you never have to think about it.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
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
      id="faq"
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
            FAQ
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
            Common questions
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-neutral-600)', lineHeight: 1.75 }}>
            Everything you need to know about our vacation home care services.
          </p>
        </div>

        <div
          className="reveal"
          style={{
            maxWidth: '760px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
          }}
        >
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                style={{
                  background: '#ffffff',
                  borderRadius: '1.5rem',
                  border: `1.5px solid ${isOpen ? 'var(--color-primary-100)' : 'var(--color-neutral-100)'}`,
                  overflow: 'hidden',
                  boxShadow: isOpen ? '0 4px 12px rgba(0,0,0,0.08)' : 'none',
                  transition: 'border-color 300ms, box-shadow 300ms',
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    padding: '1.25rem 1.5rem',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--color-primary-900)',
                    lineHeight: 1.25,
                    transition: 'color 150ms',
                  }}
                >
                  {faq.question}
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: isOpen ? 'var(--color-accent-500)' : 'var(--color-primary-50)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      fontSize: '1rem',
                      color: isOpen ? 'var(--color-primary-900)' : 'var(--color-accent-600)',
                      transition: 'all 300ms',
                      transform: isOpen ? 'rotate(45deg)' : 'none',
                      fontWeight: 700,
                      lineHeight: 1,
                    }}
                  >
                    +
                  </div>
                </button>

                <div
                  style={{
                    maxHeight: isOpen ? '500px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <div
                    style={{
                      padding: '0 1.5rem 1.25rem',
                      fontSize: '0.875rem',
                      color: 'var(--color-neutral-600)',
                      lineHeight: 1.75,
                      borderTop: '1px solid var(--color-neutral-100)',
                      paddingTop: '1rem',
                    }}
                  >
                    {faq.answer}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
