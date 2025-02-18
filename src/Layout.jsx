import  QrCodeGenerator  from './QrCodeGenerator';
import { QrCodeScanner } from './qrCodeScanner';


const Layout = () => {
  return (
    <div>
      {/* <QrCodeGenerator />  */}
      <QrCodeScanner />
    </div>
  )
}

export { Layout }