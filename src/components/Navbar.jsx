import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = ({ isLoggedIn, username }) => {
  isLoggedIn =false;
  return (
    <>
      <header className="fw-bold">
        <div className="container">
          <div className="logo-brand">
            <NavLink to="/">LOGO</NavLink>
          </div>

          <nav>
            <ul>
              <li>
                {" "}
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/about">About</NavLink>
              </li>
              {isLoggedIn ? (
                <li>
                  {" "}
                  <span>Hi {username}</span>
                </li>
              ) : (
                <>
                  <li>
                    {" "}
                    <NavLink to="/login">Login</NavLink>
                  </li>
                  <li>
                    {" "}
                    <NavLink to="/register">Register</NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
