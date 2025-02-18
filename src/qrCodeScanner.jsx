import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
export const QrCodeScanner = () => {

  const [scanned, setScanned] = useState(null);
  const scanHandler = (result) => {
    console.log(result[0].rawValue);
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
    <div className='scanner' >
      <p>{scanned}</p>
      <Scanner
      allowMultiple
      onScan={scanHandler}
      components={settings}
      styles={stylesSettings}
      /> 
    </div>
  );
};