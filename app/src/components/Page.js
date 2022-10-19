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
            <select className='repoContainer'>
              <option value="">Select your repo</option>
              <option value="0x0Thisproject suck">0x0 Thisproject suck</option>
              <option value="0x0Thisproject suck">0x1 Other project</option>
              <option value="0x0Thisproject suck">0x2 Other project that suck</option>
            </select>
            <div className='fileContainer'>
            <select className='repoContainer'>
              <option value="">Select your file</option>
              <option value="0x0Thisproject suck">Task 0</option>
              <option value="0x0Thisproject suck">Task 1</option>
              <option value="0x0Thisproject suck">Task 2</option>
            </select>
            </div>
          </div>
          <div className='codeContainer'>
            <div className='codeBox1'></div>
            <div className='codeBox2'></div>
          </div>
        </div>
    </div>
   );
}
 
export default Page;