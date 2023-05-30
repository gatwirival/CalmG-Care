// Header.js

import Link from 'next/link';

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
          <li>
            <Link href="/Logout" legacyBehavior>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
