import './Home.css'
import MainSlider from '../../components/mainSlider/MainSlider'
// import Slide from '../../components/slide/Slide'
import { sliders } from '../../data'
import Slider from "react-slick";
import Header from '../../components/header/Header';
// import {BiTargetLock} from 'react-icons/bi';
// import icon from


const Home = () => {
  const sliderIcons = [
    {
      img: "assets/images/active.svg",
      id:1
    },
    {
      img: "assets/images/non-active.svg",
      id:2
    }

  ]
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    arrows: true,
    adaptiveHeight: true,
    appendDots: dots => <ul className='slider-icons'>{sliderIcons.map(n => <img src={n.img} /> )}</ul>,
    customPaging: i => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    )
  };

  return (
    <div className='home'>
      <Header/>
      <Slider {...settings} >
        {sliders.map(slide => (
          <MainSlider slide={slide} key={slide.id} {...slide} />
        ))}

      </Slider>
    </div>
  )
}

export default Home