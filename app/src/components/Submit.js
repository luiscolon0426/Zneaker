import '../styles/Submit.css';

const Submit = () => {
  return ( 
    <div>
      <div className="submitContainer">
        <h2 className='submitLabel'>Submit your token here.</h2>
        <div className='inputLayer1'>
          <input type="text" className='inputLayer2'></input>
        </div>
        <div className='submitButton'>
          <button type='submit'>Submit</button>
        </div>
      </div>
    </div>
   );
}
 
export default Submit;