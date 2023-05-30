import './Deals2.css';
import { deals2 } from '../../data/data'
import { Col, Row } from 'react-bootstrap';
import Button from '../button/Button';

const Deals = () => {
    return (
        <div className="deals-container">
            <Row className='deals2'>
                {deals2.map((deal) => (
                    <Col md={12} className="banner2">
                        <div className="banner-image">
                        <img src={deal.img} alt="deal" />
                            <div className="deal-overlay"></div>
                        </div>
                        <div className="banner-content2">
                            <h1>{deal.heading}</h1>
                            <Button>Learn more</Button>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Deals