import { SCAN_DATA } from "./constants";
import { QRCodeSVG } from "qrcode.react";
import Header from '../../html/Header';
import Footer from '../../html/Footer';
import { Link } from "react-router-dom";

export const ScanHistory = () => {

const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

const stylesSettings = {
  container : {
  marginTop: 30
  },
  video: {
  width: '600px',
  height: '100%'
  }
}

  return (
    <>
      <Header />
      <div className="app_Two">
        <div className="container">
          <h1 className="h1">
            Generator History
          </h1>
          <div className="history">
          {data.map((text) => (
            <p
              className="p"
              key={text}>
                  {text}
              <QRCodeSVG
                value={text}
                size={100} 
                styles={stylesSettings}
                onClick={() => navigator.clipboard.writeText(text)} 
                />
            </p>
        ))
        };
        </div>
        <Link 
          className="return"
          tabIndex={3}
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

export default ScanHistory;
