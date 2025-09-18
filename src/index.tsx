import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../tailwind.css'; // Import the main Tailwind CSS file

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
