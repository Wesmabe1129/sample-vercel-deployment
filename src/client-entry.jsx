/* eslint no-restricted-globals: ["error", "event"] */
/* global document */

import { StrictMode } from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App'

// Get the root element
const container = document.getElementById('root');

// Create the app with BrowserRouter
const AppWithRouter = () => (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Check if we're doing SSR or client-side rendering
if (container.hasChildNodes()) {
  // Hydrate the existing server-rendered markup
  hydrateRoot(container, <AppWithRouter />);
} else {
  // Fallback for client-side only rendering
  const root = createRoot(container);
  root.render(<AppWithRouter />);
}
