import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
const QrCodeGenerator = () => {
const [value, setValue] = useState('');
const [result, setResult] = useState('');
  
const onClickHandler = (event) => {
      setResult(value);
      setValue('');
    };

const onChangeHandler = (event) => {
      setValue(event.target.value);
      setResult('');
  };

console.log('result: ', result);

  return (
    <>
    <Header />
    <div className='app'>
    <div>
      {result !== '' && (
        <QRCodeSVG  
          className='qr' 
          value={result} />
      )}
      <input 
        className='input' 
        type='text' 
        placeholder='Enter your text' 
        value={value} 
        onChange={onChangeHandler} />
      <button 
        className='button' 
        type='button' 
        onClick={onClickHandler}>
          Generatore your QR code
      </button>
      <Link id='link'
        to='/'>return</Link>
    </div>
    </div>
    <Footer />
    </>
  );
};

export default QrCodeGenerator