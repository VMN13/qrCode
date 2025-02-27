import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import qrcode from '../../styles/qrCodeScanner.module.css';  
import Header from '../../html/Header.jsx';
import Footer from '../../html/Footer.jsx';
import { Link } from 'react-router-dom';
import { SCAN_DATA } from '../history/constants.js';

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


  return (
    <>
    <Header />
    
      <div className='container_scan'>
    <div className='qr_scan'>
      <p>
        {scanned}
      </p>
      <div className='qr_scan'>
      <Scanner 
        onScan={scanHandler}
        components={settings}
      /> 
      </div>
    </div>
    <div className='return_scan' >
    <Link 
      id='link'
      to='/'>
        return
    </Link>
    </div>
    </div>
 
    <Footer />
    </>
  );
};

export default QrCodeScanner
