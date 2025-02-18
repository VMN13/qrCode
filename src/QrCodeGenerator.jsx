import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

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
    <div>
      {result !== '' && (
        <QRCodeSVG  
          className='qr' 
          value={result} />
      )}
      <input 
        className='input' 
        type='text' 
        placeholder='Введите текст' 
        value={value} 
        onChange={onChangeHandler} />
      <button 
        className='button' 
        type='button' 
        onClick={onClickHandler}>
          Сгенерировать QR
      </button>
    </div>
  );
};

export default QrCodeGenerator