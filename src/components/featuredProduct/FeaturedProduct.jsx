import "./FeauredProduct.css"
import { IoCartSharp } from 'react-icons/io5'
import { AiFillHeart, AiOutlineStar } from 'react-icons/ai'
import { BiMenuAltLeft } from 'react-icons/bi'
import { useState } from "react"
import {FaStar, FaStarHalfAlt} from 'react-icons/fa'



const FeaturedProduct = ({featured}) => {
    const ratingStar = Array.from({length:5}, (elem, index) =>{
        let numbers = index + 0.5;
        return <span key={index}>
            {
                featured.star >= index + 1 
                ? <FaStar className="star-icon"/> : featured.star >= numbers 
                ? <FaStarHalfAlt className="star-icon"/> : <AiOutlineStar className="star-icon"/> 
            }
        </span>
    })
    const[fav, setFav] = useState(false)
    return (
        
            <div className="featuredproduct">
                <div className="featured-img-container">
                    <img src={featured.img} alt="featured" />
                    {featured.new ? <span className="new">New</span>: " "}
                </div>
                <div className="featured-name-price">
                    <p>{featured.name}</p>
                    <span>$ {featured.price}</span>
                </div>
                <div className="featured-rating">
                    {ratingStar}
                </div>
                <div className="featured-product-action">
                    <div className="featured-cart">
                        <IoCartSharp />
                    </div>
                    <div className="featured-heart">
                        <AiFillHeart onClick={()=>setFav(!fav)} style={fav ? {color:'red'} : {color: 'gray'}} />
                    </div>
                    <div className="featured-heart">
                    <BiMenuAltLeft />
                    </div>
                </div>
            </div>
    )
}

export default FeaturedProduct