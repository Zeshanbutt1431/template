import './MiniBanners.css'
import { minibanners } from '../../data'
import MiniBanner from '../miniBanner/MiniBanner'


const MiniBanners = () => {
  return (
    <div className='minibanners'>
      {
        minibanners.map((minibanner)=>(
          <MiniBanner minibanner={minibanner} key={minibanner.id} />
        ))
      }
    </div>
  )
}

export default MiniBanners