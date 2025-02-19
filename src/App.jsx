import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

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
