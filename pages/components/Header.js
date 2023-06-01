// Header.js

import Link from 'next/link';
import Logout from './Logout';

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="horizontal-header">
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
          <Logout/>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
