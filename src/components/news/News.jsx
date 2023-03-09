import { news } from '../../data'
import './News.css'

const News = () => {
	return (
		<div className='news'>
			<h4 className='news-heading'>LATEST NEWS</h4>
			<div className="news-card-container">
				{news.map((n) => (
					<div className="news-card">
						<img src={n.img} alt="news" className='news-image' />
						<div className="headline"><h1>{n.headline}</h1></div>
						<p className="news-detail">{n.detail}</p>
						<span className="news-date"> {n.date}</span>
					</div>
				))
				}
			</div>

			<div className="news-show-more">
				<button>Show More</button>
			</div>

		</div>
	)
}

export default News  