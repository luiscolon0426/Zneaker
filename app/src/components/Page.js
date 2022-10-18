import { logOut } from '../backend/auth';
import '../styles/Page.css';

const Page = () => {
  return ( 
    <div>
      <div className='logoutContainer'>
        <button className='logout' onClick={logOut}>Log out</button>
        <div className='userIcon'></div>
      </div>
        <div className='pageContainer'>
          {/*<div className='UserIcon'></div>*/}
          <div className='dataContainer'>
            <div className='repoContainer'>
            </div>
            <div className='fileContainer'></div>
          </div>
          <div className='codeContainer'></div>
        </div>
    </div>
   );
}
 
export default Page;