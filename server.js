self.addEventListener('fetch', event => {
  const ip = event.request.headers.get("x-forwarded-for");
  event.respondWith(new Response({"ip":ip}, { 
    headers: [['content-type', 'text/json']],
  }));
});
