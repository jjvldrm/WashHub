import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';

const Header = () => {
  const location = useLocation();
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <header className={`header ${location.pathname !== '/' && 'scroll-header'}`}>
      <div>
        <Link to="/" className="nav__logo">
          WashHub
        </Link>
      </div>
      <nav className="nav container grid">
        <div className={`nav__menu ${toggle && 'show-menu'}`}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <Link
                to="/"
                onClick={handleToggle}
                className={`nav__link ${location.pathname === '/' && 'active-link'}`}
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/about"
                onClick={handleToggle}
                className={`nav__link ${location.pathname === '/about' && 'active-link'}`}
              >
                <i className="uil uil-user nav__icon"></i> About
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/services"
                onClick={handleToggle}
                className={`nav__link ${location.pathname === '/services' && 'active-link'}`}
              >
                <i className="uil uil-briefcase-alt nav__icon"></i> Services
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/book"
                onClick={handleToggle}
                className={`nav__link ${location.pathname === '/book' && 'active-link'}`}
              >
                <i className="uil uil-scenery nav__icon"></i> Book Online
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/reviews"
                onClick={handleToggle}
                className={`nav__link ${location.pathname === '/reviews' && 'active-link'}`}
              >
                <i className="uil uil-message nav__icon"></i> Reviews
              </Link>
            </li>
          </ul>
          <i className="uil uil-times nav__close" onClick={handleToggle}></i>
        </div>
        <div className="nav__toggle" onClick={handleToggle}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
