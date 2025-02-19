import { SCAN_DATA } from "../constants";
import { QRCodeSVG } from "qrcode.react";
import Header from './Header';
import Footer from './Footer';

export const ScanHistory = () => {
  const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
  
  return (
    <>
      <Header />
        <div className="app">
          <h1>
            GeneratorHistory
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
        </div>
        <Footer />
    </>
  );
};

export default ScanHistory;
