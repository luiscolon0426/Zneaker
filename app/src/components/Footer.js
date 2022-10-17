import '../styles/Footer.css';
import logo from '../imgs/_codePocket.png'
import email from '../imgs/email.png';
import githubLogo from '../imgs/github.png'

const Footer = () => {
  return ( 
    <div className='footer'>
      <img src={logo} alt='_codePocket' className='logo'/>
      <div className='icons'>
        <div className='icon-1'>
          <img src={githubLogo} alt="Github logo" />
        </div>
        <div className='icon-2'>
          <img src={email} alt="email logo" />
        </div>
      </div>
    </div>
   );
}
 
export default Footer;