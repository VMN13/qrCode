import { Link } from 'react-router-dom';


export const Navigation = () => {
  return (
    <nav className="nav">
      <h1 id='navigate'>
        Navigate
      </h1>
      <Link className='link' to="/qrCodeGenerator">CodeGenerator</Link>
      <br />
      <Link className='link' to={"/qrCodeScanner"}>ScannerGenerator</Link>
      <br />
      <Link className='link' to="/scanHistory">History Scan</Link>
      <br />
      <Link className='link' to="./generateHistory">History Generator</Link>
    </nav>
);
};

export default Navigation;

