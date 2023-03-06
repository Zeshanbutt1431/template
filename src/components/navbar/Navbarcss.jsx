import './Navbarcss.css'
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { navItems } from '../../data'

const Navbarcss = () => {
    return (
        <div className='navbar'>
            <div className="navbar-wrapper">
                <ul className="navbar-items">
                    <li className='navbar-item'>SAFETY PRODUCTS
                        <ul className="menu">
                            <li className='menu-item'>Menu 1</li>
                            <li className='menu-item'>Menu 2</li>
                            <li className='menu-item'>Menu 3</li>
                            <li className='menu-item'>Menu 4 <IoIosArrowDroprightCircle />
                                <ul className="sub-menu">
                                    <li className='sub-menu-item'>Sub-Menu 1</li>
                                    <li className='sub-menu-item'>Sub-Menu 2</li>
                                    <li className='sub-menu-item'>Sub-Menu 3</li>
                                </ul>
                            </li>
                            <li className='menu-item'>Menu 5</li>
                        </ul>
                    </li>
                    {navItems.map(n => (
                        <li className='navbar-item' key={n.id}>
                            {n.title}
                        </li>
                    ))}
                </ul>

            </div>

        </div>
    )
}

export default Navbarcss