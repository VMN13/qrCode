import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import Header from '../../html/Header.jsx';
import Footer from '../../html/Footer.jsx';
import { Link } from 'react-router-dom';
import { GENERATED_DATA } from '../history/constants.js';
import UseClipboardCopy from  '../hooks/useClipboardCopy.jsx';
const QrCodeGenerator = () => {
const [value, setValue] = useState('');
const [result, setResult] = useState('');

const onClickHandler = () => {
  setResult(value);
  setValue('');

const prevData =  (JSON.parse(localStorage.getItem(GENERATED_DATA))) || [];
      localStorage.setItem(
      GENERATED_DATA,
        JSON.stringify([...prevData, value])
      );
      setResult(value);
      setValue('');
    };

const onChangeHandler = (event) => {
      setValue(event.target.value);
      setResult('');
  };

  const stylesSettings = {
    container : {
    marginTop: 30
    },
    video: {
    width: '200px',
    height: '100%'
    }
  }

  const copyToClipboard = UseClipboardCopy();

  return (
    <>
    <Header />
    <div className="app_Two">
    <div className='container'>
      <div className='history_generator'>
      {result !== '' && (
        <QRCodeSVG  
          className='qr' 
          value={result}
          styles={stylesSettings}
          />
      )}
      </div>
      <div className='form_generator'>
      <input 
        tabIndex={1}
        className='input' 
        type='text' 
        placeholder='Enter your text' 
        value={value} 
        onChange={onChangeHandler} />


<div className='buttons'>
      <button 
        tabIndex={2}
        className='GeneratoreyourQRcode' 
        type='button' 
        onClick={onClickHandler}>
          Generatore your QR code
      </button>

      <Link
        tabIndex={3}
        to='/'>
        <button id='copy' onClick={() => copyToClipboard(result)}>Copy to Clipboard and return</button>
      </Link>
      </div>

    </div>
    </div>
    </div>
    <Footer />
    </>
  );
};

export default QrCodeGenerator