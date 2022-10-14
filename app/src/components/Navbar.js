import '../styles/Navbar.css';
import { logIn } from '../backend/auth'

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1>_codePocket</h1>
      <div className="links">
        <a href="/">About</a>
        <a href="/">Features</a>
        <a href="/">Team</a>
      </div>
      <div className="login">
          <a href="/">Log in</a>
          <button onClick={logIn}>Get started</button>
        </div>
    </nav>
   );
}
 
export default Navbar;