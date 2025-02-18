import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import qrcode from './qrCodeScanner.module.css';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
export const QrCodeScanner = () => {
  const [scanned, setScanned] = useState(null);
  const scanHandler = (result) => {
    setScanned(result[0].rawValue);
  }
  console.log(scanned);

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
      <p>{scanned}</p>
      <Scanner
      allowMultiple
      onScan={scanHandler}
      components={settings}
      styles={stylesSettings}
      /> 
    </div>
    <Link id='link'
        to='/'>return</Link>
    </div>
     <Footer />
     </>
  );
};


export default QrCodeScanner
