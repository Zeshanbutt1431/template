import './Deals.css';
import { deals } from '../../data'

const Deals = () => {
    return (
        <div className="deals-container">

        <div className='deals'>
            {deals.map((deal) => (
                <div className="banner">
                    <div className="banner-image">
                        <img src={deal.img} />
                    </div>
                    <div className="banner-content">
                        <img src={deal.logo} alt="" />
                        <h1>{deal.heading}</h1>
                    </div>
                </div>
            ))}

        </div>
        </div>
    )
}

export default Deals