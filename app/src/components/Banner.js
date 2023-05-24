import '../styles/Banner.css';
import home_image from '../imgs/home_image.jpg'

const Banner = () => {
  return (
    <div id='top' className="banner">
      <div className='aboutText-container'>
        <p className='aboutText'><strong>Zneaker</strong> Step Up your sneaker game.</p>
        <button onClick={() => window.location.href = '/app'}></button>
      </div>
      <div className='bannerImage-container'>
      </div>
    </div>
   );
}

export default Banner;
