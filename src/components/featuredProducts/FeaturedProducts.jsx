import './FeaturedProducts.css'
import Slider from "react-slick";
import { featuredProducts } from '../../data/data';
import FeaturedProduct from '../featuredProduct/FeaturedProduct';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import {GrNext, GrPrevious} from 'react-icons/gr'
import { useRef } from 'react';
const FeaturedProducts = ({heading}) => {
    const featureSlide = useRef(null);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows:true,
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='featuredproducts'>
            <div className="featured-heading">
                <h3>{heading}</h3>
                <div className="slider-buttons">
                    <button onClick={()=>{featureSlide.current.slickPrev()}}><GrPrevious className='slider-btn'/></button>
                    <button onClick={()=>{featureSlide.current.slickNext()}}><GrNext className='slider-btn'/></button>
                </div>
            </div>
            <Slider ref={featureSlide} {...settings}>
                {featuredProducts.map((featured) => (
                    <FeaturedProduct featured={featured} key={featured.id} />
                ))}
            </Slider>
        </div>
    )
}

export default FeaturedProducts