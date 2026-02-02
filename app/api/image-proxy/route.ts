import { NextRequest } from 'next/server'

const ALLOWED_ORIGINS = ['https://upload.wikimedia.org']

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get('url')
  if (!url) {
    return new Response('Missing url', { status: 400 })
  }
  let parsed: URL
  try {
    parsed = new URL(url)
  } catch {
    return new Response('Invalid url', { status: 400 })
  }
  if (!ALLOWED_ORIGINS.some((origin) => parsed.origin === origin)) {
    return new Response('Forbidden', { status: 403 })
  }
  try {
    const res = await fetch(parsed.href, {
      headers: {
        Accept: 'image/*',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
      next: { revalidate: 86400 },
    })
    if (!res.ok) {
      return new Response('Upstream error', { status: res.status })
    }
    const contentType = res.headers.get('content-type') || 'image/png'
    const body = await res.arrayBuffer()
    return new Response(body, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400, s-maxage=86400',
      },
    })
  } catch {
    return new Response('Proxy error', { status: 502 })
  }
}
