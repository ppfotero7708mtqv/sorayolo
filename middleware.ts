import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const url = new URL(request.url);
  const forwardedHost = request.headers.get('host')!;
  if (url.pathname.startsWith('/blogs')) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('host', forwardedHost);
    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
    let proxyUrl = new URL(request.url);
    proxyUrl.host = '54.226.154.150';
    proxyUrl.protocol = 'http';
    proxyUrl.port = '';
    console.log('url', proxyUrl.toString());
    return NextResponse.rewrite(proxyUrl.toString(), response);
  }
  if (url.pathname.startsWith('/pay')) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('host', forwardedHost);
    requestHeaders.set('x-forwarded-host', forwardedHost);
    requestHeaders.set('x-forwarded-proto', 'https');
    const realip = requestHeaders.get('x-real-ip');
    if (realip) {
      requestHeaders.set('x-forwarded-for', realip);
    }
    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
    let proxyUrl = new URL(request.url);
    proxyUrl.host = 'payment-web-dv4.pages.dev';
    proxyUrl.protocol = 'https';
    proxyUrl.port = '';
    if (proxyUrl.pathname.endsWith('/')) {
      proxyUrl.pathname = proxyUrl.pathname.substring(
        0,
        proxyUrl.pathname.length - 1
      );
    }
    return NextResponse.rewrite(proxyUrl.toString(), response);
  }
  // get the country for other requests
  const country = request.headers.get('CF-IPCountry') || 'US';
  //continue with the normal response for other paths
  const response = NextResponse.next();
  response.cookies.set('country', country);
  return response;
}

// push
export const config = {
  matcher: '/((?!api|static|_next|checkout.html|webhook|favicon.ico).*)',
};
