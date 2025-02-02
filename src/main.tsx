import '@/styles/global.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';

import '@fontsource-variable/inter';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
