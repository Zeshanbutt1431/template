import './Brand.css'

const Brand = ({brand}) => {
	return (
		<>
			<div className='brand link'>
				<img src={brand.img} alt='brand'/>
			</div>
		</>
	)
}

export default Brand