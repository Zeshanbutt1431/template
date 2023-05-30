import './Navbarcss.css'
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { navItems } from '../../data/taxonomycontent'
import { Link } from 'react-router-dom';


const Navbarcss = () => {

    return (
        <div className='navbarcss'>
            <div className="navbar-wrapper">
                <ul className="navbar-items">
                    {navItems.map((nav) => (
                        <Link to={nav.DEPTURL} className='link'>
                            <li className='navbar-item' key={nav.id}>{nav.DEPT}
                                <ul className="menu">
                                    {nav.Type?.map((t) => (
                                        <Link to={t.TYPURL} className='link'>
                                            <li className='menu-item' key={t.id}>{t.TYPE} {t.SubType ? <IoIosArrowDroprightCircle /> : ""}
                                                <ul className="sub-menu">
                                                    {t.SubType?.map((st) => (
                                                        <Link to={st.TYPURL} className='link'>
                                                        <li className='sub-menu-item' key={st.id}>{st.SUBTYPE}</li>
                                                        </Link>
                                                    ))}
                                                </ul>
                                            </li>
                                        </Link>
                                    ))}
                                </ul>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>

    )
}

export default Navbarcss

