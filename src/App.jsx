import QrCodeGenerator from './QrCodeGenerator';
import './App.css';
import { Layout } from './Layout';
import Header from './Header';
import Footer from './Footer';
function App() {
  return (
    <>
      <Header />
      <div className='app'>
      <QrCodeGenerator />
        <Layout />
        
        </div>
      <Footer />
     
    </>
  )
}

export default App
