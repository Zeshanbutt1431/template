import { Col, Row } from 'react-bootstrap'
import { news } from '../../data/data'
import './News.css'
import Button from '../button/Button'

const News = () => {
	return (
		<div className='news'>
			<h4 className='news-heading'>LATEST NEWS</h4>
			<Row className="news-card-container">
				{news.map((n) => (
					<Col lg={4} md={12} className="news-card p-4">
						<div className="news-image-container">
						<img src={n.img} alt="news" className='news-image' />
						<div className="news-overlay"></div>
						</div>
						<div className="headline"><h1>{n.headline}</h1></div>
						<p className="news-detail">{n.newsDetail}</p>
						<span className="news-date"> {n.date}</span>
					</Col>
				))
				}
			</Row>

			<div className="news-show-more">
				<Button>Show More</Button>
			</div>

		</div>
	)
}

export default News  