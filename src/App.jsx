import './styles/App.css';
import './styles/Appcssphone.css';
import Header from './html/Header';
import Footer from './html/Footer';
import Navigation from './html/Navigation';


function App() {

  return (
    <>
      <Header />
      <div className='app'>
      <Navigation />
      </div>
      <Footer />
    </>
  );
};

export default App
