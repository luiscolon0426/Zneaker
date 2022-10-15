import '../styles/Navbar.css';
import { logIn } from '/home/egabriel/Final/CodePocket/app/src/backend/auth.js';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1>_codePocket</h1>
      <div className="links">
        <Link to="/">About</Link>
        <Link to="/">Features</Link>
        <Link to="/">Team</Link>
      </div>
      <div className="login">
          {/*<Link to="/" onClick={logIn}>Log in</Link>*/}
          <button id='getIn' onClick={logIn}>Log in</button>
          <button>Sign up</button>
        </div>
    </nav>
   );
}
 
export default Navbar;