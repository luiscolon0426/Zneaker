import '../styles/Body.css';
import cloud from '../imgs/cloud.png';
import codeAnywhere from '../imgs/anywhere.png';
import atDisposal from '../imgs/disposal.png';
import eiden from '../imgs/Eiden.jpg'

const Features = () => {
  return (
    <div className='container'>
      <h2>It's code... but in your pocket.</h2>
      <div className='feature-1'>
        <div className='feature-item-1'>
        <img src={codeAnywhere} alt="multiple people coding" border="0"/>
          <h2>Play with your code anywhere.</h2>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
      <div className='feature-2'>
        <div className="feature-item-2">
          <img src={cloud} alt="cloud" />
          <h2>Based on cloud technology.</h2>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
      <div className='feature-3'>
        <div className='feature-item-3'>
          <img src={atDisposal} alt="likepicture" />
          <h2>All your code at your disposal.</h2>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
      <h2 id='teamLabel'>Meet the team</h2>
      <div className='team'>
        <div>
          <div className='member-1-container'>
            <img className='member-1-image' src="" alt="" />
          </div>
          <p id='member-name'>David Rodriguez Jimenez</p>
          <p id='member-position'>Full-Stack Developer</p>
        </div>
        <div>
          <div className='member-2-container'>
            <img className='member-2-image' src="" alt="" />
          </div>
          <p id='member-name'>Christopher Lind</p>
          <p id='member-position'>Full-Stack Developer</p>
        </div>
        <div>
          <div className='member-3-container'>
            <img className='member-3-image' src={eiden} alt="team-member-3" />
          </div>
          <p id='member-name'>Eiden Martinez Davila</p>
          <p id='member-position'>Front-End Developer</p>
        </div>
      </div>
    </div>
   );
}
 
export default Features;