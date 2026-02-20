export default function TrustBadges() {
  const badges = [
    { icon: '🔒', label: 'Licensed & Insured' },
    { icon: '🌿', label: 'Eco-Friendly Products' },
    { icon: '⭐', label: '4.9-Star Rated' },
    { icon: '⚡', label: '24-Hour Response' },
    { icon: '📸', label: 'Photo Reports Included' },
  ]

  return (
    <>
      {/* Marquee */}
      <div
        aria-hidden="true"
        style={{
          padding: '1.25rem 0',
          background: 'var(--color-primary-800)',
          overflow: 'hidden',
          borderTop: '1px solid rgba(255,255,255,0.04)',
          borderBottom: '1px solid rgba(255,255,255,0.04)',
        }}
      >
        <div
          className="marquee-track"
          style={{ display: 'flex', width: 'max-content' }}
        >
          {[
            'Fresh homes ✦ Happy guests',
            'Clean spaces ✦ Cool air',
            'Book today ✦ Relax tomorrow',
            'Trusted by 500+ owners ✦',
            'Central Florida ✦ Licensed & Insured',
            'Fresh homes ✦ Happy guests',
            'Clean spaces ✦ Cool air',
            'Book today ✦ Relax tomorrow',
            'Trusted by 500+ owners ✦',
            'Central Florida ✦ Licensed & Insured',
          ].map((text, i) => (
            <span
              key={i}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.25rem, 2.5vw, 2rem)',
                color: 'var(--color-primary-600)',
                whiteSpace: 'nowrap',
                padding: '0 2rem',
              }}
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Trust bar */}
      <div
        aria-label="Trust certifications"
        style={{
          background: 'var(--color-warm-100)',
          borderTop: '1px solid var(--color-warm-200)',
          borderBottom: '1px solid var(--color-warm-200)',
          padding: '1rem clamp(1rem, 4vw, 2rem)',
        }}
      >
        <div
          style={{
            maxWidth: 'var(--max-width)',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}
        >
          {badges.map((badge, i) => (
            <div key={badge.label} style={{ display: 'flex', alignItems: 'center' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: 'var(--color-primary-700)',
                  whiteSpace: 'nowrap',
                }}
              >
                <span>{badge.icon}</span>
                <span>{badge.label}</span>
              </div>
              {i < badges.length - 1 && (
                <div
                  className="trust-divider"
                  style={{
                    width: '1px',
                    height: '20px',
                    background: 'var(--color-warm-300)',
                    flexShrink: 0,
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .trust-divider { display: none; }
        }
      `}</style>
    </>
  )
}
