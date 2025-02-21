import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { Link } from 'react-router-dom';
import { GENERATED_DATA } from './history/constants.js';

const QrCodeGenerator = () => {
const [value, setValue] = useState('');
const [result, setResult] = useState('');

const onClickHandler = (event) => {
      setResult(value);
      setValue('');

      const prevData =  (JSON.parse(localStorage.getItem(GENERATED_DATA))) || [];
      console.log(prevData);
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
        tabIndex={1}
        className='input' 
        type='text' 
        placeholder='Enter your text' 
        value={value} 
        onChange={onChangeHandler} />

      <button 
        tabIndex={2}
        className='button' 
        type='button' 
        onClick={onClickHandler}>
          Generatore your QR code
      </button>

      <Link
        tabIndex={3}
        id='link'
        to='/'>return
      </Link>
    </div>
    </div>
    <Footer />
    </>
  );
};

export default QrCodeGenerator