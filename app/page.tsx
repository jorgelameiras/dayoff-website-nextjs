'use client'

import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import TrustBadges from '@/components/TrustBadges'
import Services from '@/components/Services'
import HowItWorks from '@/components/HowItWorks'
import QuoteCalculator from '@/components/QuoteCalculator'
import AboutSection from '@/components/AboutSection'
import PricingSection from '@/components/PricingSection'
import FAQ from '@/components/FAQ'
import RegistrationForm from '@/components/RegistrationForm'
import Footer from '@/components/Footer'

const contactDetails = [
  { icon: '📧', label: 'Email', value: 'hello@casafresh.com', href: 'mailto:hello@casafresh.com' },
  { icon: '📞', label: 'Phone', value: '(407) 555-0100', href: 'tel:+14075550100' },
  { icon: '📍', label: 'Location', value: 'Central Florida', href: undefined },
  { icon: '🕐', label: 'Hours', value: 'Mon–Sun, 7am–8pm EST', href: undefined },
]

const serviceAreas = ['📍 Orlando', '📍 Kissimmee', '📍 Daytona Beach', '📍 Clearwater', '📍 Tampa']

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <TrustBadges />
      <Services />
      <HowItWorks />
      <QuoteCalculator />
      <AboutSection />
      <PricingSection />
      <FAQ />

      {/* Contact / Registration Section */}
      <section
        id="contact"
        style={{
          padding: '8rem clamp(1rem, 4vw, 2rem)',
          background: 'var(--color-warm-50)',
          position: 'relative',
        }}
      >
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.2fr',
              gap: '4rem',
              alignItems: 'start',
            }}
            className="contact-layout-grid"
          >
            {/* Left: info */}
            <div>
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
                Get in Touch
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  color: 'var(--color-primary-900)',
                  marginBottom: '1rem',
                  lineHeight: 1.25,
                }}
              >
                Ready for a fresher property?
              </h2>
              <p
                style={{
                  fontSize: '1.125rem',
                  color: 'var(--color-neutral-600)',
                  lineHeight: 1.75,
                  marginBottom: '2.5rem',
                }}
              >
                Fill out the form and we&apos;ll send you a custom quote within 24 hours. No commitment required.
              </p>

              {/* Contact details */}
              {contactDetails.map((detail) => (
                <div
                  key={detail.label}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    padding: '1rem 0',
                    borderBottom: '1px solid var(--color-neutral-200)',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '1rem',
                      background: 'var(--color-primary-50)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.2rem',
                      flexShrink: 0,
                    }}
                  >
                    {detail.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6875rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: 'var(--color-neutral-500)',
                        marginBottom: '0.25rem',
                      }}
                    >
                      {detail.label}
                    </div>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        style={{
                          fontWeight: 500,
                          color: 'var(--color-primary-900)',
                          fontSize: '0.875rem',
                          textDecoration: 'none',
                        }}
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <span style={{ fontWeight: 500, color: 'var(--color-primary-900)', fontSize: '0.875rem' }}>
                        {detail.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}

              {/* Area pills */}
              <div style={{ marginTop: '1.5rem' }}>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-neutral-600)',
                    marginBottom: '0.75rem',
                    fontWeight: 500,
                  }}
                >
                  Service Areas:
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {serviceAreas.map((area) => (
                    <span
                      key={area}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '0.25rem 0.75rem',
                        background: 'var(--color-accent-50)',
                        color: 'var(--color-accent-700)',
                        border: '1px solid var(--color-accent-100)',
                        borderRadius: '9999px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                      }}
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: form */}
            <RegistrationForm />
          </div>
        </div>

        <style>{`
          @media (max-width: 1024px) {
            .contact-layout-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Final CTA */}
      <section
        style={{
          background: 'var(--color-primary-900)',
          padding: '8rem clamp(1rem, 4vw, 2rem)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            bottom: '-40%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '1000px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99,216,102,0.09) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              color: '#ffffff',
              marginBottom: '1rem',
              lineHeight: 1.1,
            }}
          >
            Your guests deserve{' '}
            <span style={{ color: 'var(--color-accent-500)' }}>the best.</span>
          </h2>
          <p
            style={{
              fontSize: '1.125rem',
              color: 'var(--color-primary-300)',
              maxWidth: '520px',
              margin: '0 auto 2.5rem',
              lineHeight: 1.75,
            }}
          >
            Join 500+ vacation property owners who trust CasaFresh to keep their homes spotless and cool.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
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
              }}
            >
              Get My Free Quote
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
              }}
            >
              View Services
            </a>
          </div>
          <p
            style={{
              marginTop: '1.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--color-primary-500)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            No contract required · Cancel anytime · 100% satisfaction guarantee
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
