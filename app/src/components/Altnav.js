import '../styles/Altnav.css';
import { logOut } from '../backend/auth';

const Navbar = () => {
  return ( 
    <nav className="nav_bar">
      <h1>_codePocket</h1>
          {/*<Link to="/" onClick={logIn}>Log in</Link>*/}
          <div className='logoutContainer'>
            <button onClick={logOut}>Log out</button>
            <div className='userIcon'>
              <img src="https://www.indochinatravel.com/country/myanmar/images/gallery/bagan-1.jpg" alt=""/>
            </div>
          </div>
    </nav>
   );
}
 
export default Navbar;