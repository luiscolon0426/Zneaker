import '../styles/Banner.css';
import home_image from '../imgs/home_image.jpg'

const Banner = () => {
  return (
    <div className="banner">
      <div className='aboutText-container'>
        <p className='aboutText'><strong>_codePocket</strong> will help you bring your ideas on the go.</p>
      </div>
      <div className='bannerImage-container'>
        <img className='bannerImage' src={home_image} alt="working in a mobile app" />
      </div>
      <button>Into pocket</button>
    </div>
   );
}
 
export default Banner;