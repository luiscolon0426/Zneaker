import '../styles/Body.css';
import cloud from '../imgs/cloud.png';
import codeAnywhere from '../imgs/anywhere.png';
import atDisposal from '../imgs/disposal.png';
import eiden from '../imgs/Eiden.jpg';
import chris from '../imgs/chris.JPG';
import david from '../imgs/david.jpg';
import githubLogo from '../imgs/github.png'
import linkedInLogo from '../imgs/linkedin.png'

const Features = () => {
  return (
    <div className='container'>
      <h2>It's code... but in your pocket.</h2>
      <div className='feature-1'>
        <div className='feature-item-1'>
        <img src={codeAnywhere} alt="multiple people coding" border="0"/>
          <h2>Play with your code anywhere.</h2>
          <div>
            <p>
              With _codePocket we want you to have access to your code wherever you are. 
              On your phone, computer or tablet as long as you have internet connection and access to a browser,
              your code will be right there in your pocket.
              </p>
          </div>
        </div>
      </div>
      <div className='feature-2'>
        <div className="feature-item-2">
          <img src={cloud} alt="cloud" />
          <h2>Based on cloud technology.</h2>
          <div>
            <p align="right">
              _codePocket uses Firebase Cloud Firestore to store information on the cloud that is gathered after
              Firebase Authentication access's your GitHub when you log in. Through the GitHub REST API we can get public information from your GitHub profile
              and display it on our application.
            </p>
          </div>
        </div>
      </div>
      <div className='feature-3'>
        <div className='feature-item-3'>
          <img src={atDisposal} alt="likepicture" />
          <h2>All your code at your disposal.</h2>
          <div>
            <p>
              _codePocket can access your public repositories via the GitHub REST API.
              You will need to create a GitHub repository that ends in '.pocket' and store the '.js' files you want to keep in your pocket for quick access.
              For now _codePocket will only recognize '.js' files. We plan on implimenting other languages in the future.
            </p>
          </div>
        </div>
      </div>
      <h2 id='teamLabel'>Meet the team</h2>
      <div className='team'>
        <div>
          <div className='member-1-container'>
            <img className='member-1-image' src={david} alt="team-member-1" />
          </div>
          <p id='member-name'>David Rodriguez Jimenez</p>
          <p id='member-position'>Full-Stack Developer</p>
          <div className="contact-links">
            <a href="https://github.com/DavidDaniel1996"><img src={githubLogo} alt="" /></a>
            <a href="https://www.linkedin.com/in/david-rodr%C3%ADguez-6810b6199/"><img src={linkedInLogo} alt="" /></a>
          </div>
        </div>
        <div>
          <div className='member-2-container'>
            <img className='member-2-image' src={chris} alt="team-member-2" />
          </div>
          <p id='member-name'>Christopher Lind</p>
          <p id='member-position'>Full-Stack Developer</p>
          <div className="contact-links">
            <a href="https://github.com/ChrissLind"><img src={githubLogo} alt="" /></a>
            <a href="https://www.linkedin.com/in/chris-lind-749883230/"><img src={linkedInLogo} alt="" /></a>
          </div>
        </div>
        <div>
          <div className='member-3-container'>
            <img className='member-3-image' src={eiden} alt="team-member-3" />
          </div>
          <p id='member-name'>Eiden Martinez Davila</p>
          <p id='member-position'>Front-End Developer</p>
          <div className="contact-links">
            <a href="https://github.com/EGabriel-bot"><img src={githubLogo} alt="" /></a>
            <a href="www.linkedin.com/in/emd07"><img src={linkedInLogo} alt="" /></a>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Features;