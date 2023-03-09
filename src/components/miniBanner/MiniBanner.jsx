import './MiniBanner.css'

const MiniBanner = ({minibanner}) => {
  return (
    <div className='minibanner'>
        <img src={minibanner.img} alt="minibannner" className="mb-img" />
        <div className="mb-overlay">
            <div className="mb-content">
                <h1>{minibanner.heading}</h1>
                <button>Shop now</button>
            </div>
        </div>
    </div>
  )
}

export default MiniBanner