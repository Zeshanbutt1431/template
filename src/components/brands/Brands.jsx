import Slider from 'react-slick'
import { brands } from '../../data/data'
import Brand from '../brand/Brand';
import './Brands.css'
import { Link } from 'react-router-dom';

const Brands = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div className='brands'>
            <Slider {...settings}> 
                {brands.map((brand) => (
                  // <Link to={brand.url}>
                  <Brand brand={brand} key={brand.id}/>
                  // </Link>
                ))}
            </Slider>
        </div>
    )
}

export default Brands