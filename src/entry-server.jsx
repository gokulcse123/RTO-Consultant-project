import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';
import { LanguageProvider } from './context/LanguageContext';

export function render(pathname = '/') {
  return renderToString(
    <React.StrictMode>
      <LanguageProvider pathname={pathname}>
        <App pathname={pathname} />
      </LanguageProvider>
    </React.StrictMode>
  );
}
