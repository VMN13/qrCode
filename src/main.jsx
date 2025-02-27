import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotFound from './html/pageNotFound.jsx';
import App from './App.jsx'
import QrCodeGenerator from './components/generators/QrCodeGenerator.jsx';
import QrCodeScanner from './components/generators/qrCodeScanner.jsx';
import GenerateHistory from './components/history/GenerateHistory.jsx';  
import ScanHistory from './components/history/ScanHistory.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/qrCodeGenerator" element={<QrCodeGenerator />} />
        <Route path="/qrCodeScanner" element={<QrCodeScanner />} />
        <Route path="/generateHistory" element={<GenerateHistory />} />
        <Route path='/scanHistory' element={<ScanHistory />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
