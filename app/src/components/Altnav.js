import '../styles/Navbar.css';
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
    </nav>
   );
}
 
export default Navbar;