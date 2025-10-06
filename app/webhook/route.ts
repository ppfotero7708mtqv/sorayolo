import { NextResponse } from 'next/server';

// The base URL of the remote API you want to proxy to.
// It's recommended to store this in an environment variable.
const REMOTE_API_URL =
  'https://api.phoenixpay.net/channel/pay/mrphper/callback';

/**
 * A generic handler that proxies requests to the remote API.
 * It handles GET, POST, PUT, DELETE, PATCH, etc.
 * @param req The incoming request from the client.
 * @param params The dynamic route parameters.
 * @returns A response from the remote API.
 */
async function handler(req: Request) {
  try {
    // 1. Reconstruct the full remote URL.
    // - `params.slug` is an array of the path segments (e.g., ['users', '123']).
    // - We join them to form the path: 'users/123'.
    // - We get the search parameters (e.g., '?name=test') from the original request.
    const searchParams = new URL(req.url).search;
    const remoteUrl = `${REMOTE_API_URL}${searchParams}`;

    // 2. Make the request to the remote API using the Fetch API.
    // We pass along the method, headers, and body from the original request.
    const response = await fetch(remoteUrl, {
      method: req.method,
      headers: req.headers,
      body: req.body,
      // This setting is required to stream the request body.
      // @ts-ignore
      duplex: 'half',
    });

    // 3. Return the response from the remote API directly to the client.
    // Next.js will automatically stream the body.
    return response;
  } catch (error) {
    // Log the error for debugging purposes.
    console.error('[API_PROXY_ERROR]', error);

    // Return a generic server error response to the client.
    return new NextResponse('An error occurred while proxying the request.', {
      status: 500,
    });
  }
}

export const runtime = 'edge';

// Export the handler for all common HTTP methods.
export {
  handler as DELETE,
  handler as GET,
  handler as PATCH,
  handler as POST,
  handler as PUT,
};
