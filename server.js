import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server);

// For Vercel serverless, we need to handle both HTTP and WebSocket connections
app.use(express.static('dist/client'));

// Socket.io connection handler
io.on('connection', (socket) => {
  console.log('user connected');
  socket.emit('welcome', 'A message from the server');
});

// Export as Vercel serverless function
export default async (req, res) => {
  // For Socket.io, we need to handle upgrade requests
  if (req.url.includes('socket.io')) {
    // Let Socket.io handle the request
    return;
  }
  
  // Handle SSR requests
  try {
    const { render } = await import('../dist/server/server-entry.js');
    const context = {};
    const appHtml = render(req.url, context);
    
    const template = `<!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Vite App</title>
        </head>
        <body>
          <div id="root">${appHtml}</div>
          <script type="module" src="/client/assets/index.js"></script>
        </body>
      </html>`;
    
    res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
  } catch (error) {
    console.error('SSR Error:', error);
    res.status(500).end('Internal Server Error');
  }
};