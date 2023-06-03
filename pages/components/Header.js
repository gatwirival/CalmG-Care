import Link from 'next/link';
import { useState } from 'react';
import Logout from './Logout';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav>
        <div className="mobile-menu-toggle" onClick={toggleMenu}>
          <span className={`menu-icon ${isMenuOpen ? 'open' : ''}`}></span>
        </div>
        <ul className={`horizontal-header ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <h1>G-Care</h1>
          </li>
          <li>
            <Link href="/" legacyBehavior>
              Home
            </Link>
          </li>
          <li>
            <Link href="/Sounds" legacyBehavior>
              CalmSounds
            </Link>
          </li>
          <li>
            <Link href="/Register" legacyBehavior>
              Register
            </Link>
          </li>
          <li>
            <Link href="/Login" legacyBehavior>
              Login
            </Link>
          </li>
          <Logout />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
