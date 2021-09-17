import 'https://deno.land/x/fetch_event_adapter/listen.ts';

if (typeof FetchEvent !== 'undefined') console.log(true);

self.addEventListener('fetch', event => {
  const ip = event.request.headers.get("x-forwarded-for");
  event.respondWith(new Response(`Hello ${ip}`, { 
    headers: [['content-type', 'text/plain']],
  }));
});
