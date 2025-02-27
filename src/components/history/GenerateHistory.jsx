import { GENERATED_DATA } from "./constants";
import Header from '../../html/Header';
import Footer from '../../html/Footer';
import { Link } from "react-router-dom";

export const GenerateHistory = () => {
  const data = JSON.parse(localStorage.getItem(GENERATED_DATA) || '[]');

  return (
    <>
      <Header />
        <div className="app_Two">
          <div className="container">
          <h1 className="h1">
            Your QRcode History: 
          </h1>
          <div className="history">
            {data.map((text) => (
            <p className="p" key={text}>{text}
            </p>
          ))}

          </div>
          <Link className="return"
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

export default GenerateHistory;
