import './Services.css'
import { HiOutlineArrowUturnLeft } from 'react-icons/hi2'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'

const Services = () => {
	return (
		<div className="services-container">
			<div className='services'>
				<div className="service-container"><img src="assets/images/logo.png" alt="logo" className='logo-img' /></div>
				<div className="service-container"><BsFillTelephoneFill className='service-icon' /><span className='service-info'>+(123) 456 789</span></div>
				<div className="service-container"><HiOutlineArrowUturnLeft className='service-icon' /><span className='service-info'>HUSTLE FREE RETURNS</span> </div>
				<div className="service-container"><TbTruckDelivery className='service-icon' /><span className='service-info'>HUSTLE FREE RETURNS</span></div>
			</div>
		</div>
	)
}

export default Services