import '../styles/Navbar.css';
import { logIn } from '../backend/auth';
import { Link } from 'react-scroll';


const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="mainLogo" to='top' smooth={true} spy={true}>_codePocket</Link>
      <div className="links">
        <Link to="anywhere" smooth={true} spy={true}>Features</Link>
        <Link className='center' spy={true} smooth={true} to='teamLabel'>Team</Link>
      </div>
      <div className="login">
          {/*<Link to="/" onClick={logIn}>Log in</Link>*/}
          <button id='getIn' onClick={logIn}>Log in</button>
        </div>
    </nav>
   );
}
 
export default Navbar;