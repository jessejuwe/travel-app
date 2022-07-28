import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button/Button';
import { MenuItems } from '../helpers/MenuItems';
import './Navbar.css';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const clickHandler = () => setClicked(!clicked);

  const closeHandler = () => setClicked(false);

  // prettier-ignore
  const showButtonHandler = () => window.innerWidth <= 960 ? setShowButton(false) : setShowButton(true);

  //   rendering the button one time, only once page loads
  useEffect(() => {
    showButtonHandler();
  });

  // Event Listener for resizing window
  window.addEventListener('resize', showButtonHandler);

  const navbarBackgroundHandler = () => {
    if (window.scrollY >= 80) setNavbar(true);
    else setNavbar(false);
  };

  // Event Listener for scroll
  window.addEventListener('scroll', navbarBackgroundHandler);

  return (
    <nav className={navbar ? 'navbar active' : 'navbar'}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeHandler}>
          TRVL <i className="fa fa-plane" />
        </Link>
        <div className="menu-icon" onClick={clickHandler}>
          <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => (
            <li key={index} className={'nav-item'}>
              <Link to={item.to} className={item.cName} onClick={closeHandler}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        {showButton && (
          <Button to="/sign-up" buttonStyle="btn--outline">
            SIGN UP
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
