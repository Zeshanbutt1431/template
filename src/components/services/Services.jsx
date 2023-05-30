import './Services.css'
import { HiOutlineArrowUturnLeft } from 'react-icons/hi2'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { Col, Row } from 'react-bootstrap'
import { services } from "../../data/IndexServicesContent"

const Services = () => {
	return (
		<div className="services-container">
			<Row className='services'>
				{services.map((service) => (
					<>
						<Col lg={3} md={6} sm={12} className="service-container logo-img">{service.img}</Col>
						<Col lg={3} md={6} sm={12} className="service-container"><BsFillTelephoneFill className='service-icon' /><span className='service-info'>{service.phone}</span></Col>
						<Col lg={3} md={6} sm={12} className="service-container"><HiOutlineArrowUturnLeft className='service-icon' /><span className='service-info'>{service.Description1}</span> </Col>
						<Col lg={3} md={6} sm={12} className="service-container"><TbTruckDelivery className='service-icon' /><span className='service-info'>{service.Description2}</span></Col>
					</>
				))}
			</Row>
		</div>
	)
}

export default Services