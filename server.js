addEventListener("fetch", (event) => {
  event.respondWith(
    new Response("pantek kau", {
      status: 200,
      headers: { "content-type": "text/plain" },
    }),
  );
});
