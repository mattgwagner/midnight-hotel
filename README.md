# Midnight Hotel

A small spooky browser game in one HTML file. Explore numbered hotel rooms with a flashlight, search drawers for keys and batteries, hide in a wardrobe when the lights flicker, and keep your light on Bolt the Bear before he creeps too close. Somewhere past room 30, eyes open on the walls… and then the Watcher comes. Survive until 6 AM and find Door 100.

Other guests check in as you go deeper: Giggles (hide-and-seek), the Pocket Imps (coin thieves), Dusty the Moth (battery eater), Dangle (don't wake him), Jinx in the Box (keep it wound), Stillwell the Bellhop (Freeze Dance) and Mortimer the Mummy, who runs the shop. Everyone you meet goes in the Guest Book.

All art and sound are drawn and synthesized in code (Canvas 2D + Web Audio), no assets.

## Run locally

```sh
bun server.ts                # http://127.0.0.1:4747
HOST=0.0.0.0 bun server.ts   # reachable from other devices on your network
```

Or just open `public/index.html` in a browser.

## Deploy

Static assets on Cloudflare Workers:

```sh
npm install
npm run deploy
```

Add `?debug` to the URL to expose game state as `window.__mh` in the console. `?debug&test=<giggles|imps|moth|dangle|jinx|bellhop>` puts that guest in room 2; Mortimer shows up in rooms 9, 21, 33…
