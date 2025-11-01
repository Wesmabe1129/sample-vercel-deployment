/* eslint no-restricted-globals: ["error", "event"] */
/* global process */

import fs from 'node:fs';
import path from 'node:path';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import express from 'express';
import { createServer as createViteServer } from 'vite';
import { Server } from 'socket.io';

const IS_PRODUCTION = process.env.NODE_ENV === 'production' || process.env.VERCEL === '1';
const PORT = process.env.PORT || 3000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const server = createServer(app);
const io = new Server(server);

// Serve static files from the Vite build output in production
if (IS_PRODUCTION) {
  // Serve all static files from dist/client
  app.use(express.static(path.join(__dirname, 'dist/client'), { 
    index: false,
    fallthrough: true // Allow the request to continue to the next handler if file not found
  }));
  
  // Explicitly serve assets from the assets directory
  app.use('/assets', express.static(path.join(__dirname, 'dist/client/assets'), {
    immutable: true,
    maxAge: '1y'
  }));
}

// Create Vite server in development
let vite;
if (!IS_PRODUCTION) {
  vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });
  app.use(vite.middlewares);
}

// API routes can be added here
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Vercel!' });
});

// Handle all routes with SSR
app.use('*', async (req, res, next) => {
  const url = req.originalUrl;
  
  try {
    // Read the HTML template
    let template;
    if (IS_PRODUCTION) {
      try {
        template = fs.readFileSync(
          path.resolve(__dirname, 'dist/client/index.html'),
          'utf-8'
        );
      } catch (e) {
        console.error('Error reading template file:', e);
        return res.status(500).send('Template file not found');
      }
    } else {
      template = await vite.transformIndexHtml(
        url,
        fs.readFileSync(path.resolve('./index.html'), 'utf-8')
      );
    }

    // Get the render function
    let render;
    try {
      const serverEntry = IS_PRODUCTION
        ? await import('./dist/server/server-entry.js')
        : await vite.ssrLoadModule('/src/server-entry.jsx');
      
      if (typeof serverEntry.render !== 'function') {
        throw new Error('No render function exported from server-entry.jsx');
      }
      
      // Render the app with just the URL
      const appHtml = await serverEntry.render(url);
      
      // Inject the rendered app into the template
      const html = template.replace('<!--ssr-outlet-->', appHtml);
      
      // Send the response
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      console.error('Error in request handler:', e);
      if (!IS_PRODUCTION && vite) {
        vite.ssrFixStacktrace(e);
      }
      next(e);
    }
  } catch (e) {
    console.error('Error in request handler:', e);
    if (!IS_PRODUCTION && vite) {
      vite.ssrFixStacktrace(e);
    }
    next(e);
  }
});

// Socket.io connection handler
io.on('connection', (socket) => {
  console.log('user connected');
  socket.emit('welcome', 'A message from the server');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server if not in Vercel environment
if (process.env.VERCEL !== '1') {
  server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

// Export the Express app for Vercel
export default app;
