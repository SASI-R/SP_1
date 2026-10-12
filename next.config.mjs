// Security headers applied to every response (clickjacking, MIME sniffing protection).
// Content-Security-Policy is intentionally NOT set here — it's generated per-request
// in src/middleware.ts with a fresh nonce, because Next.js App Router needs to run
// its own inline hydration scripts and a static CSP here would block them.
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
