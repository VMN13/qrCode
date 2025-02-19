import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import qrcode from './qrCodeScanner.module.css';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { SCAN_DATA } from '../constants.js';

export const QrCodeScanner = () => {
  const [scanned, setScanned] = useState(null);
  
  const scanHandler = (result) => {
    setScanned(result[0].rawValue);

      const prevData =  
        JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

      localStorage.setItem(
        SCAN_DATA,
        JSON.stringify([...prevData, result[0].rawValue])
      );
  };

  const settings = {
    audio: false,
    finder: false,
  }

  const stylesSettings = {
    container : {
    marginTop: 30
    }
  }

  return (
    <>
    <Header />
    <div className='app'>
    <div className={qrcode.container} >
      <p>
        {scanned}
      </p>
      <Scanner
        onScan={scanHandler}
        components={settings}
        styles={stylesSettings}
      /> 
    </div>
    <Link id='link'
          to='/'>
          return
    </Link>
    </div>
    <Footer />
    </>
  );
};

export default QrCodeScanner
