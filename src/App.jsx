import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/Footer';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home';
import NotFound from './pages/notFound/NotFound';
import './app.scss'
import Header from './components/header/Header';
import Navbar from './components/navbar/NavbarTop';
import Info from './pages/Info/Info';
const App = () => {
  const baseUrl = window.location.origin;
  let baseName = process.env.REACT_APP_LOCAL_NAME;
  {
    baseUrl === "http://localhost:3000" ?
      baseName = process.env.REACT_APP_LOCAL_NAME :
      baseName = process.env.REACT_APP_BUILD_NAME;
  }
  console.log(baseName);
  let path=(window.location.pathname.split("/"));
  console.log(path[2]);

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <Header />
        <Outlet />
        <Footer />
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />

        },
        {
          path: "/info/:id",
          element: <Info/>
        },
        {
          path: "/*",
          element: <NotFound />
        },

      ]
    }
  ],
  {basename:baseName}
  )

  return (
    <RouterProvider router={router} />
  )
}
export default App