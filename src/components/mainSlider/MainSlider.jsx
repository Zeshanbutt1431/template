import './MainSlider.css'
import { Link } from 'react-router-dom';

const MainSlider = (slider) => {
    return (
        <>
            {/* <Link to="/error" className='link'> */}
                <div className='mainSlider'>
                    <img src={slider.img} className="slideImage" alt="slider" />
                    <div className="sliderContent">
                        <h1>{slider.heading}</h1>
                        <p className='sliderDesc'>{slider.desc}</p>
                        <button>Learn more</button>
                    </div>
                </div>
            {/* </Link> */}

        </>


    )
}

export default MainSlider
