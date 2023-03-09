import './Deals2.css';
import { deals2 } from '../../data'

const Deals = () => {
    return (
        <div className="deals-container">

        <div className='deals2'>
            {deals2.map((deal) => (
                <div className="banner2">
                    <div className="banner-image">
                        <img src={deal.img} alt="deals"/>
                    </div>
                    <div className="banner-content2">
                        <h1>{deal.heading}</h1>
                        <button>Learn more</button>
                    </div>
                </div>
            ))}

        </div>
        </div>
    )
}

export default Deals