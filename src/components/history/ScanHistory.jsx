import { SCAN_DATA } from "./constants";
import { QRCodeSVG } from "qrcode.react";
import Header from '../Header';
import Footer from '../Footer';
import { Link } from "react-router-dom";
import { useMemo } from "react";
export const ScanHistory = () => {
 


  const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
  
  return (
    <>
      <Header />
        <div className="app">
          <h1>
            Generator History
          </h1>
          {data.map((text) => (
            <p
              className="p"
              key={text}>
                  {text}
                <QRCodeSVG
                  value={text}
                  size={100} />
              </p>
        ))
        };
        <Link className="return"
        tabIndex={3}
        id='link'
        to='/'>return
      </Link>
        </div>
        <Footer />
    </>
  );
};

export default ScanHistory;
