import './MainSliders.css'
import { sliders } from '../../data'
import MainSlider from '../mainSlider/MainSlider'
import Slider from 'react-slick'
import './slider_theme.css'
import "slick-carousel/slick/slick.css";

const MainSliders = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
      };
  return (
    <div>
        <Slider {...settings} >
        {sliders.map(slide => (
          <MainSlider slide={slide} key={slide.id} {...slide} />
        ))}
      </Slider>
    </div>
  )
}

export default MainSliders