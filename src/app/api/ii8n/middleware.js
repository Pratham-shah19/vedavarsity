import { NextResponse } from 'next/server';

export async function middleware(request) {
  const institutionBundleID = request.headers.get('X-IBI');

  // Indian IP for fallback and testing
  const clientIP = request.ip || '143.110.253.73';

  const fetchPrice = await fetch(
    `${process.env.API_URL}/organization/bundles/${institutionBundleID}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-REQUEST-USERINFO': clientIP
      }
    }
  );

  const getPrice = await fetchPrice.json();

  return NextResponse.json({
    ip: clientIP,
    country: request.geo.country,
    cost: getPrice.bundle.cost,
    position: getPrice.bundle.position,
    currency_symbol: getPrice.bundle.currency_symbol
  });
}