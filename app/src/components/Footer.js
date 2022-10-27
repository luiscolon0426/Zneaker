import '../styles/Footer.css';
import logo from '../imgs/_codePocket.png'
import email from '../imgs/email.png';


const Footer = () => {
  return (
    <div className='footer'>
      <img src={logo} alt='_codePocket' className='logo'/>
      <div className='icons'>
        <div className='icon-2'>
          <a href="mailto:codepocket.co@gmail.com"><img src={email} alt="email logo" /></a>
        </div>
      </div>
    </div>
   );
}
 
export default Footer;