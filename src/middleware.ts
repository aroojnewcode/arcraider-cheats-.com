import { defineMiddleware } from 'astro:middleware';
import { resolveCheckoutPathRedirect } from './config/checkout-redirects.mjs';

export const onRequest = defineMiddleware((context, next) => {
  // Production checkout 302 is handled by the Cloudflare Worker; static /go/* pages keep on-site canonicals.
  if (!import.meta.env.DEV) {
    return next();
  }
  const destination = resolveCheckoutPathRedirect(new URL(context.request.url).pathname);
  if (destination) {
    return context.redirect(destination, 302);
  }
  return next();
});
