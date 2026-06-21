import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'rn-shadcn — shadcn/ui, made for touch';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#09090B',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 14,
              background: 'linear-gradient(135deg, #6366F1, #818CF8)',
              color: '#09090B',
              fontFamily: 'monospace',
              fontWeight: 700,
              fontSize: 36,
            }}
          >
            {'</>'}
          </div>
          <span
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: '#FAFAFA',
              letterSpacing: '-0.02em',
            }}
          >
            rn-shadcn
          </span>
        </div>
        <div
          style={{
            fontSize: 26,
            color: '#A1A1AA',
            marginTop: 20,
          }}
        >
          shadcn/ui, made for touch
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
