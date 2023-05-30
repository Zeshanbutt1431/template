import { Link } from 'react-router-dom';
import Button from '../button/Button';
import './MainSlider.css'
const MainSlider = (slide) => {
    return (
        <>
            {/* <Link to="/error" className='link'> */}
                <div className='mainSlider'>
                    <img src={slide.img} alt='slider'/>
                    <div className={`sliderContent slide${slide.id}` }>
                        <span className='sliderHeadingSpan'>{slide.headingSpan}</span>
                        <h1>{slide.heading}</h1>
                        <p className='sliderDesc'>{slide.desc}</p>
                        <Link to={slide.ShopNow}><Button>Learn more</Button></Link>
                    </div>
                </div>
            {/* </Link> */}
        </>


    )
}
  
export default MainSlider
