import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <>
    <div className='container_one'>
      <h1 className='title'>
        Navigate
      </h1>
    <div className='main'>
      <div>
      <h1 id='navigate'>
        Navigate 
      </h1>
    <iframe 
      className='video' 
      width="560" 
      height="315" 
      src="https://www.youtube.com/embed/k09ip9Z6TCk?si=b2qkfnj3qt6FRjfC&amp;controls=1&amp;start=0;&autoplay=1;&loop=1;&mute=1;"
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
      gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" 
      allowfullscreen
      loading="lazy" 
      
      >

    </iframe>
    </div>
    <nav className="nav">
      <Link 
        className='link' 
        to="/qrCodeGenerator">
          Code Generator
      </Link>
      <br />
      <Link 
        className='link' 
        to={"/qrCodeScanner"}>
          Scanner Generator
      </Link>
      <br />
      <Link 
        className='link' 
        to="/scanHistory">
          History Scan
      </Link>
      <br />
      <Link 
        className='link'
        to="./generateHistory">
          History Generator
      </Link>
    </nav>
    </div>
    </div>
    </>
);
};


export default Navigation;

