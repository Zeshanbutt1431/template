import './Home.css'
import Header from '../../components/header/Header';
import MainSliders from '../../components/mainSliders/MainSliders';
import Brands from '../../components/brands/Brands';
import MiniBanners from '../../components/miniBanners/MiniBanners';
import FeaturedProducts from '../../components/featuredProducts/FeaturedProducts';
import Deals from '../../components/deals/Deals';
import Deals2 from '../../components/deals2/Deals2';
import News from '../../components/news/News';
import Services from '../../components/services/Services';

const Home = (heading) => {
  return (
    <div className='home'>
      <MainSliders/>
      <Brands/>
      <MiniBanners/>
      <FeaturedProducts  heading={"Featured Products"}/>
      <Deals/>
      <FeaturedProducts heading={"Top selling"}/>
      <Deals2/>
      <News/>
      <Services/>
    </div>
  )
}

export default Home