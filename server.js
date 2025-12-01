// server.js
// Custom server for Next.js (works on localhost + GoDaddy cPanel)

(async () => {
  // Import core modules
  const { createServer } = await import("http");
  const { parse } = await import("url");
  const next = await import("next");

  // Port (cPanel/Passenger sets PORT env var in production)
  const port = parseInt(process.env.PORT || "3000", 10);

  // true in dev, false in production (GoDaddy)
  const dev = process.env.NODE_ENV !== "production";

  // Host name (localhost for dev, 0.0.0.0 for server)
  const hostname = dev ? "localhost" : "0.0.0.0";

  // Create Next app
  const app = next.default({ dev, hostname, port });
  const handle = app.getRequestHandler();

  // Prepare Next app and then start HTTP server
  await app.prepare();

  createServer((req, res) => {
    try {
      const parsedUrl = parse(req.url || "", true);
      handle(req, res, parsedUrl);
    } catch (err) {
      console.error("Error handling request:", err);
      res.statusCode = 500;
      res.end("internal server error");
    }
  }).listen(port, () => {
    console.log(`> Ready on http://${hostname}:${port} (NODE_ENV=${process.env.NODE_ENV})`);
  });
})();
