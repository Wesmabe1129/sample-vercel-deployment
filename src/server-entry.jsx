import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Routes, Route } from 'react-router-dom';
import App from './App';

// Server-side rendering function
export async function render(url) {
  try {
    // Create the app with StaticRouter
    const app = (
      <React.StrictMode>
        <StaticRouter location={url}>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </StaticRouter>
      </React.StrictMode>
    );

    // Render the app to a string
    const html = renderToString(app);
    
    // Return the rendered HTML
    return html;
  } catch (error) {
    console.error('Error during server-side rendering:', error);
    // Return a simple error message in production
    if (process.env.NODE_ENV === 'production') {
      return '<div>An error occurred while rendering the page.</div>';
    }
    throw error;
  }
}
