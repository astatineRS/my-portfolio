import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Raunak Shukla — Founder, Product, Trust Systems and AI-enabled execution';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          color: '#f8fafc',
          background: 'linear-gradient(135deg, #081226 0%, #111c36 55%, #1e1b4b 100%)',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, fontSize: 28, color: '#a5b4fc' }}>
          <div style={{ width: 18, height: 18, borderRadius: 999, background: '#34d399' }} />
          Co-Founder & CEO, SYINQ
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ fontSize: 82, fontWeight: 800, letterSpacing: '-3px' }}>Raunak Shukla</div>
          <div style={{ fontSize: 38, color: '#cbd5e1' }}>Product · Trust Systems · AI-enabled Execution</div>
          <div style={{ width: 180, height: 8, borderRadius: 999, background: '#4f46e5' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 24, color: '#94a3b8' }}>
          <span>Founder profile · 2026</span>
          <span>raunakshukla.netlify.app</span>
        </div>
      </div>
    ),
    size,
  );
}
