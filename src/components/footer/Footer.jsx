import { Col, Row } from 'react-bootstrap'
import { footer } from '../../data/FooterContent'
import './Footer.css'
import { HiArrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'
const Footer = () => {
	return (
		<div className="footer-container">

			<Row className='footer'>
				{footer.map((foot) => (
					<Col lg={3} md={6} sm={6} className="information mt-3">
						<h5 className="heading">{foot.heading}</h5>
						<div className="footer-menu">
							{foot?.menu.map((m) => (
								<Link to={m.URL} className='link'><span>{m.LINKTITLE}</span></Link>
							))}
						</div>
					</Col>
				))}
				<Col lg={3} md={6} sm={6}  className="information footer-newsletter mt-3">
					<h5 className="heading">SIGN UP FOR OUR NEWSLETTER</h5>
					<p>Stay up-to-date with our latest promotions, discounts, sales, and special offers.</p>
					<div className="newsletter">
						<input type="text" />
						<button><HiArrowRight className='newsletter-icon' /></button>
					</div>
				</Col>
			</Row>
		</div>

	)
}

export default Footer