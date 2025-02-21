import { GENERATED_DATA } from "./constants";
import Header from '../Header';
import Footer from '../Footer';
import { Link } from "react-router-dom";
export const GenerateHistory = () => {
  const data = JSON.parse(localStorage.getItem(GENERATED_DATA) || '[]' );
  console.log(data);

  return (
    <>
      <Header />
        <div className="app">
          <h1>
            Your QRcode History: 
          </h1>
            {data.map((text) => (
            <p key={text}>{text}
            </p>
          ))}
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

export default GenerateHistory;
