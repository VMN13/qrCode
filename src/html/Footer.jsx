import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
    <div className='footer'>
      <Link className="headerLink" to={"/"}>
      <h1 className='year'>
        All rights reserved 2025 ©
      </h1>
      </Link>
    </div>
    </>
  );
};