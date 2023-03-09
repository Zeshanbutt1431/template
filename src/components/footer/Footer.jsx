import { footer } from '../../data'
import './Footer.css'
import { HiArrowRight } from 'react-icons/hi'
const Footer = () => {
	return (
		<div className="footer-container">

			<div className='footer'>
				{footer.map((foot) => (
					<div className="information">
						<h5 className="heading">{foot.heading}</h5>
						<div className="footer-menu">
							{foot.menu.map((m) => (
								<span>{m.menu}</span>
							))}
						</div>
					</div>
				))}
				<div className="information footer-newsletter">
					<h5 className="heading">SIGN UP FOR OUR NEWSLETTER</h5>
					<p>Stay up-to-date with our latest promotions, discounts, sales, and special offers.</p>
					<div className="newsletter">
						<input type="text" />
						<button><HiArrowRight className='newsletter-icon' /></button>
					</div>
				</div>
			</div>
		</div>

	)
}

export default Footer