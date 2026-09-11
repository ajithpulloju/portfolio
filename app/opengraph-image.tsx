import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Pulloju Ajith Portfolio';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#f8f9fa',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          fontFamily: '"Inter", sans-serif',
          backgroundImage: 'linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          padding: '60px 80px',
          position: 'relative',
        }}
      >
        {/* Top Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <div style={{ display: 'flex', fontSize: 40, fontWeight: 800 }}>
            <span style={{ color: '#000' }}>&lt;/&gt;</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ color: '#dc2626', fontWeight: 900, fontSize: 32 }}>((o))</span>
            <span style={{ fontSize: 16, fontWeight: 700, letterSpacing: '0.1em' }}>ACTIVE</span>
          </div>
        </div>

        {/* Main Title */}
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: 'auto', marginBottom: 'auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', fontSize: 160, fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.05em', color: '#000' }}>
            <span>PULLOJU.</span>
            <span>AJITH</span>
          </div>
          <div style={{ display: 'flex', fontSize: 42, fontWeight: 500, marginTop: 40, color: '#374151', letterSpacing: '-0.02em' }}>
            Full Stack Developer & AI Enthusiast
          </div>
        </div>

        {/* Bottom Footer */}
        <div style={{ display: 'flex', alignItems: 'flex-end', width: '100%' }}>
          <div style={{ display: 'flex', fontSize: 24, fontWeight: 700, letterSpacing: '0.2em' }}>
            [ v . 2026 ]
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
