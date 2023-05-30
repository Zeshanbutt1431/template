import './MiniBanners.css'
import { minibanners } from '../../data/data'
import MiniBanner from '../miniBanner/MiniBanner'
import { Row } from 'react-bootstrap'


const MiniBanners = () => {
  return (
    <Row className='minibanners'>
      {
        minibanners.map((minibanner)=>(
          <MiniBanner minibanner={minibanner} key={minibanner.id} />
        ))
      }
    </Row>
  )
}

export default MiniBanners