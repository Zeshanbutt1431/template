import Slider from 'react-slick'
import { brands } from '../../data'
import Brand from '../brand/Brand';
import './Brands.css'

const Brands = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 4,
        initialSlide: 0,

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
                  <Brand brand={brand} key={brand.id}/>
                ))}
            </Slider>
        </div>
    )
}

export default Brands