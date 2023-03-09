import './Header.css'
import { useState } from 'react';
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from 'react-icons/io';
import { GoSearch } from 'react-icons/go';
import { IoCartSharp, IoPersonSharp } from 'react-icons/io5'
import {AiFillClockCircle} from 'react-icons/ai'
import {HiBuildingOffice} from 'react-icons/hi2'
import {FiPhoneCall} from 'react-icons/fi'
import {BsEnvelopeFill} from 'react-icons/bs'

const Header = () => {
    const [open, setOpen] = useState(false);
    console.log(open);
    return (
        <div className='header-section'>
            <div className='header'>
                <div className="header-container">
                    <div className="logo">
                        <img src="assets/images/logo.svg" alt="logo" />
                        {open ?
                            <IoIosArrowDropupCircle className='arrowdown' onClick={() => setOpen(!open)} /> :
                            <IoIosArrowDropdownCircle className='arrowdown' onClick={() => setOpen(!open)} />
                        }
                    </div>
                    <div className="notification">
                        <p>Notification / Discount offer text goes here.</p>
                    </div>
                    <div className="header-actions">
                        <div className="search">
                            <input type="text" className='search-input' />
                            <button className="btn-search"><GoSearch className='search-icon' /></button>

                        </div>
                        <div className="cart">
                            <div className="cart-icon-container">
                                <IoCartSharp className='cart-icon' />
                            </div>
                            <div className="cart-count">0</div>

                        </div>
                        <div className="account">
                            <IoPersonSharp className='account-icon' />
                        </div>
                    </div>
                </div>
            </div>
            {open && (<div className="header-info">
                <div className="info-container">
                    <div className="info">
                        <AiFillClockCircle className='info-icon'/>
                        <span>Working Hours: Mon - Fri: 9am to 6pm</span>
                    </div>
                    <div className="info">
                        <HiBuildingOffice className='info-icon'/>
                        <span>Asterisk Solutions (Pvt) Ltd </span>
                    </div>
                    <div className="info">
                        <FiPhoneCall className='info-icon'/>
                       <span>+ (123) 456 678</span>
                    </div>
                    <div className="info">
                        <BsEnvelopeFill className='info-icon'/>
                        <span>info@firearmsshop.com</span>
                         
                    </div>
                    
                </div>
            </div>)}
        </div>
    )
}

export default Header