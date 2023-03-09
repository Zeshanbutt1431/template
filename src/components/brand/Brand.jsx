import './Brand.css'

const Brand = ({brand}) => {
	return (
		<>
			<div className='brand'>
				<img src={brand.img} alt="brand" />
			</div>
		</>
	)
}

export default Brand