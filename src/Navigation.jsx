import { Link } from 'react-router-dom';


export const Navigation = () => {
  return (
    <nav className="nav">
      <Link className='link' to="/qrCodeGenerator">CodeGenerator</Link>
      <br />
      <Link className='link' to={"/qrCodeScanner"}>ScannerGenerator</Link>
      <br />
      <Link className='link' to="/history">History Scan</Link>
    </nav>
);
};

export default Navigation;

