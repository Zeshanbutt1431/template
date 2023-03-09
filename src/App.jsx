import 'bootstrap/dist/css/bootstrap.min.css';
// import "slick-carousel/slick/slick-theme.css";
import Footer from './components/footer/Footer';
import Navbarcss from './components/navbar/Navbarcss';
// import Topheader from "./components/topheader/Navbar";
import {createBrowserRouter,Outlet,RouterProvider} from 'react-router-dom';
import Home from './pages/home/Home';
import NotFound from './pages/notFound/NotFound';

function App() {
  const Layout = () =>{
    return(
      <div>
        <Navbarcss/>
        <Outlet/>
        <Footer/>
      </div>
    )
  }
  const router  = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>

        },
        {
          path:"/error",
          element:<NotFound/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
