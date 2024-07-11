import * as React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand mr-auto" to="/">
            Relaxation SPA
          </Link>
          <img src={require('../assets/img/logo.png')} alt="Logo" style={{ height: '60px' }} />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Packages">Packages</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/BookAppointment">Book Appointment</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
