import { Col } from 'react-bootstrap'
import './MiniBanner.css'
import Button from '../button/Button'
import { Link } from 'react-router-dom'
const MiniBanner = ({minibanner}) => {
  return (
    <Col lg={4} md={6} sm={6} className='minibanner p-0 m-0'>
        <img src={minibanner.img} alt='minibanner'/>
        <div className="mb-overlay">
            <div className="mb-content">
                <h1>{minibanner.heading}</h1>
                <Link className='link' to={minibanner.URL}><Button>Shop now</Button></Link>
            </div>
        </div>
    </Col>
  )
}

export default MiniBanner 