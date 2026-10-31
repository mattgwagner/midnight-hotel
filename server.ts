// Local preview server. Defaults to localhost; set HOST to your Tailscale IP (or 0.0.0.0) to reach it from other devices.
const hostname = process.env.HOST ?? "127.0.0.1";
const port = Number(process.env.PORT ?? 4747);
const page = Bun.file(`${import.meta.dir}/public/index.html`);

const server = Bun.serve({
  hostname,
  port,
  fetch(req) {
    const { pathname } = new URL(req.url);
    if (pathname === "/" || pathname === "/index.html") {
      return new Response(page, { headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" } });
    }
    return new Response("Nothing behind this door.", { status: 404 });
  },
});

console.log(`Midnight Hotel open at http://${server.hostname}:${server.port}`);
