self.addEventListener('fetch', event => {
  const ip = event.request.headers.get("x-forwarded-for");
  event.respondWith(new Response(`Hello ${ip}`, { 
    headers: [['content-type', 'text/plain']],
  }));
});
