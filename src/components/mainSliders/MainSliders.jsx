import './MainSliders.css'
import { sliders } from '../../data/data'
import MainSlider from '../mainSlider/MainSlider'
import Slider from 'react-slick'
import './mainslider_theme.css'
import "slick-carousel/slick/slick.css";

const MainSliders = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay:true,
        autoplaySpeed:2000,
        fade:false
      };
  return (
    <div>
        <Slider {...settings} >
        {sliders.map(slide => (
          <MainSlider slide={slide} key={slide.id} {...slide} className={slide.class} />
        ))}
      </Slider>
    </div>
  )
}

export default MainSliders