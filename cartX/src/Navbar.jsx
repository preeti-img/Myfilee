import './Head.css'
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img src="https://cart.com/hubfs/raw_assets/public/website-theme/images/default/logo.svg" alt="" /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Solutions</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/industry">Industries</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Contact">Contact</NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink className="nav-link" to="/resourse">Resourse</NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About us</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
