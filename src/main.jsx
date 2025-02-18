import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotFound from './pageNotFound';
import App from './App.jsx'
import QrCodeGenerator from './QrCodeGenerator.jsx';
import QrCodeScanner from './qrCodeScanner.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/qrCodeGenerator" element={<QrCodeGenerator />} />
        <Route path="/qrCodeScanner" element={<QrCodeScanner />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
