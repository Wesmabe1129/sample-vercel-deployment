import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import { createServer } from 'node:http';
import { createServer as createViteServer } from 'vite';

const IS_PRODUCTION = process.env.ENV === 'production';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

// For production: serve static client files
if (IS_PRODUCTION) {
  app.use(express.static(path.resolve(__dirname, './dist/client')));
} else {
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });
  app.use(vite.middlewares);
}

// Main SSR route
app.use('*', async (req, res, next) => {
  try {
    const url = req.originalUrl;
    const indexHtmlPath = path.resolve(
      __dirname,
      IS_PRODUCTION ? './dist/client/index.html' : './index.html'
    );
    const indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

    let template = indexHtml;
    let render;

    if (IS_PRODUCTION) {
      const mod = await import('./dist/server/server-entry.js');
      render = mod.render;
    } else {
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: 'custom',
      });
      template = await vite.transformIndexHtml(url, indexHtml);
      render = (await vite.ssrLoadModule('/src/server-entry.jsx')).render;
    }

    const appHtml = render(url, {});
    const html = template.replace('<!-- ssr -->', appHtml);

    res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
  } catch (e) {
    next(e);
  }
});

// Export for Vercel (do NOT call listen)
export default app;
