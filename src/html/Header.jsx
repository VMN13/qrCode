import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
    <div className='header'>
      <Link className='headerLink' to="/">
      <div className="TwoHeader">
      <h1 className='QRcode'>
        QRcode Generator
      </h1>
      <div className='line'>
      </div>
      <p className='description'>
        Scan the QR code to visit a website
      </p>
      </div>
      </Link>
    </div>
    </>
  );
};