import './Deals.css';
import { deals } from '../../data/data'
import { Col, Row } from 'react-bootstrap';
const Deals = () => {
    return (
        <div className="deals-container">

        <Row className='deals'>
            {deals.map((deal,index) => (
                <Col md={12} className="banner">
                    <div className="banner-image">
                        <img src={deal.img} alt="deal" />
                        <div className="deal-overlay"></div>
                    </div>
                    <div className="banner-content">
                        <img src={deal.logo} alt="deal-logo"/>
                        <h1>{deal.heading}</h1>
                    </div>
                </Col>
            ))}

        </Row>
        </div>
    )
}

export default Deals