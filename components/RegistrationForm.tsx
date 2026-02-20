'use client'

import { useState, FormEvent } from 'react'

interface FormData {
  full_name: string
  email: string
  phone: string
  property_address: string
  service_type: string
  frequency: string
  message: string
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.75rem 1rem',
  fontFamily: 'var(--font-body)',
  fontSize: '0.875rem',
  border: '1.5px solid var(--color-neutral-200)',
  borderRadius: '0.75rem',
  background: 'var(--color-neutral-50)',
  color: 'var(--color-neutral-900)',
  outline: 'none',
  transition: 'all 150ms',
  appearance: 'none',
  WebkitAppearance: 'none',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.875rem',
  fontWeight: 600,
  color: 'var(--color-neutral-800)',
  marginBottom: '0.5rem',
}

export default function RegistrationForm() {
  const [form, setForm] = useState<FormData>({
    full_name: '',
    email: '',
    phone: '',
    property_address: '',
    service_type: '',
    frequency: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [focused, setFocused] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setError('')
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json() as { success?: boolean; error?: string }

      if (!res.ok) {
        setError(data.error ?? 'Something went wrong. Please try again.')
      } else {
        setSuccess(true)
      }
    } catch {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  const focusStyle = (field: string): React.CSSProperties =>
    focused === field
      ? {
          borderColor: 'var(--color-accent-500)',
          boxShadow: '0 0 0 3px rgba(99,216,102,0.12)',
          background: '#ffffff',
        }
      : {}

  if (success) {
    return (
      <div
        style={{
          textAlign: 'center',
          padding: '3rem 2rem',
          animation: 'successPop 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div
          style={{
            width: '72px',
            height: '72px',
            background: 'var(--color-accent-50)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
            margin: '0 auto 1.5rem',
          }}
        >
          ✅
        </div>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
            color: 'var(--color-primary-900)',
            marginBottom: '0.75rem',
          }}
        >
          We&apos;ll be in touch!
        </h3>
        <p style={{ color: 'var(--color-neutral-600)', fontSize: '0.875rem', lineHeight: 1.75 }}>
          Thanks for reaching out. Our team will review your request and get back to you within 24 hours with a custom quote.
        </p>
      </div>
    )
  }

  return (
    <div
      style={{
        background: '#ffffff',
        padding: 'clamp(1.5rem, 4vw, 2.5rem)',
        borderRadius: '2rem',
        boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
        border: '1px solid var(--color-neutral-100)',
      }}
    >
      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
          color: 'var(--color-primary-900)',
          marginBottom: '0.5rem',
        }}
      >
        Get Your Free Quote
      </h3>
      <p style={{ fontSize: '0.875rem', color: 'var(--color-neutral-500)', marginBottom: '2rem' }}>
        Tell us about your property and we&apos;ll send a custom quote within 24 hours.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        {/* Name + Email */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }} className="form-two-col">
          <div>
            <label htmlFor="full_name" style={labelStyle}>
              Full Name <span style={{ color: 'var(--color-accent-600)' }}>*</span>
            </label>
            <input
              id="full_name"
              name="full_name"
              type="text"
              required
              placeholder="Maria Rodriguez"
              value={form.full_name}
              onChange={handleChange}
              onFocus={() => setFocused('full_name')}
              onBlur={() => setFocused(null)}
              style={{ ...inputStyle, ...focusStyle('full_name') }}
            />
          </div>
          <div>
            <label htmlFor="email" style={labelStyle}>
              Email <span style={{ color: 'var(--color-accent-600)' }}>*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="maria@example.com"
              value={form.email}
              onChange={handleChange}
              onFocus={() => setFocused('email')}
              onBlur={() => setFocused(null)}
              style={{ ...inputStyle, ...focusStyle('email') }}
            />
          </div>
        </div>

        {/* Phone + Address */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }} className="form-two-col">
          <div>
            <label htmlFor="phone" style={labelStyle}>
              Phone <span style={{ color: 'var(--color-accent-600)' }}>*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="(407) 555-0100"
              value={form.phone}
              onChange={handleChange}
              onFocus={() => setFocused('phone')}
              onBlur={() => setFocused(null)}
              style={{ ...inputStyle, ...focusStyle('phone') }}
            />
          </div>
          <div>
            <label htmlFor="property_address" style={labelStyle}>
              Property Address <span style={{ color: 'var(--color-accent-600)' }}>*</span>
            </label>
            <input
              id="property_address"
              name="property_address"
              type="text"
              required
              placeholder="123 Vacation Dr, Orlando FL"
              value={form.property_address}
              onChange={handleChange}
              onFocus={() => setFocused('property_address')}
              onBlur={() => setFocused(null)}
              style={{ ...inputStyle, ...focusStyle('property_address') }}
            />
          </div>
        </div>

        {/* Service Type + Frequency */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }} className="form-two-col">
          <div>
            <label htmlFor="service_type" style={labelStyle}>
              Service Type <span style={{ color: 'var(--color-accent-600)' }}>*</span>
            </label>
            <select
              id="service_type"
              name="service_type"
              required
              value={form.service_type}
              onChange={handleChange}
              onFocus={() => setFocused('service_type')}
              onBlur={() => setFocused(null)}
              style={{
                ...inputStyle,
                ...focusStyle('service_type'),
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23787878' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 1rem center',
                paddingRight: '2.5rem',
                cursor: 'pointer',
              }}
            >
              <option value="">Select service...</option>
              <option value="Cleaning">Cleaning</option>
              <option value="AC Maintenance">AC Maintenance</option>
              <option value="Both">Both (Premium Package)</option>
            </select>
          </div>
          <div>
            <label htmlFor="frequency" style={labelStyle}>
              Frequency <span style={{ color: 'var(--color-accent-600)' }}>*</span>
            </label>
            <select
              id="frequency"
              name="frequency"
              required
              value={form.frequency}
              onChange={handleChange}
              onFocus={() => setFocused('frequency')}
              onBlur={() => setFocused(null)}
              style={{
                ...inputStyle,
                ...focusStyle('frequency'),
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23787878' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 1rem center',
                paddingRight: '2.5rem',
                cursor: 'pointer',
              }}
            >
              <option value="">Select frequency...</option>
              <option value="One-time">One-time</option>
              <option value="Weekly">Weekly</option>
              <option value="Bi-weekly">Bi-weekly</option>
              <option value="Monthly">Monthly</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="message" style={labelStyle}>
            Message <span style={{ color: 'var(--color-neutral-400)', fontWeight: 400 }}>(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us more about your property — number of bedrooms, specific needs, or any questions..."
            value={form.message}
            onChange={handleChange}
            onFocus={() => setFocused('message')}
            onBlur={() => setFocused(null)}
            style={{
              ...inputStyle,
              ...focusStyle('message'),
              resize: 'vertical',
              minHeight: '100px',
              lineHeight: 1.75,
            }}
          />
        </div>

        {/* Error */}
        {error && (
          <div
            style={{
              marginBottom: '1rem',
              padding: '0.75rem 1rem',
              background: '#fff5f5',
              border: '1px solid #fed7d7',
              borderRadius: '0.75rem',
              fontSize: '0.875rem',
              color: '#c53030',
            }}
          >
            ⚠️ {error}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          style={{
            width: '100%',
            padding: '1rem 2rem',
            fontSize: '1rem',
            fontWeight: 600,
            fontFamily: 'var(--font-body)',
            borderRadius: '9999px',
            border: 'none',
            background: loading ? 'var(--color-accent-300)' : 'var(--color-accent-500)',
            color: 'var(--color-primary-900)',
            cursor: loading ? 'not-allowed' : 'pointer',
            transition: 'all 300ms',
            boxShadow: '0 4px 16px rgba(99,216,102,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
          }}
        >
          {loading ? (
            <>
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  border: '2px solid rgba(10, 31, 26, 0.2)',
                  borderTopColor: 'var(--color-primary-900)',
                  borderRadius: '50%',
                  animation: 'spin 0.7s linear infinite',
                }}
              />
              Sending...
            </>
          ) : (
            'Get My Free Quote →'
          )}
        </button>

        <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--color-neutral-400)', marginTop: '0.75rem' }}>
          No spam. We&apos;ll only use this to send your quote.
        </p>
      </form>

      <style>{`
        @media (max-width: 600px) {
          .form-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
