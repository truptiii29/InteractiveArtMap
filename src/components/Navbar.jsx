import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      
      {/* LOGO */}
      <NavLink to="/" className="brand">
        <div className="brand-icon">✦</div>

        <div className="brand-text">
          <h1>INDIAN ART HERITAGE</h1>
          <p>EXPLORE • LEARN • PRESERVE</p>
        </div>
      </NavLink>

      {/* NAVIGATION */}
      <nav className="nav-links">

        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/interactive-map"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Interactive Map
        </NavLink>

      </nav>

    </header>
  );
}

export default Navbar;