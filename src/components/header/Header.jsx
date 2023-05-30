import './Header.css'
import { useState } from 'react';
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from 'react-icons/io';
import { GoSearch } from 'react-icons/go';
import { IoCartSharp, IoPersonSharp } from 'react-icons/io5'
import { AiFillClockCircle, AiOutlineClose } from 'react-icons/ai'
import { HiBuildingOffice } from 'react-icons/hi2'
import { FiPhoneCall } from 'react-icons/fi'
import { BsEnvelopeFill } from 'react-icons/bs'
import Cart from '../cart/Cart';
import ScrollTop from '../scrollTop/ScrollTop'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Logo } from '../../data/HeaderContent';
import { Notification } from '../../data/HeaderContent';
import { HeaderBottomContent } from '../../data/HeaderContent';
const Header = () => {
    const [open, setOpen] = useState(false);
    const [showCart, setShowCart] = useState(false)
    return (
        <div className='header-section'>
            <div className='header'>
                <Row className="header-container">
                    <Col lg={4} md={12} className="logo">
                        {Logo.map((logo) => (

                                <Link to="/" key={logo.id}>{logo.logopath}</Link>
                            ))
                        }
                        {open ?
                            <IoIosArrowDropupCircle className='arrowdown' onClick={() => setOpen(!open)} /> :
                            <IoIosArrowDropdownCircle className='arrowdown' onClick={() => setOpen(!open)} />
                        }
                    </Col>
                    <Col lg={4} md={12} className="notification">
                        {Notification.map((notification) => (
                            <p key={notification.id}>{notification.desc}</p>
                        ))}
                    </Col>
                    <Col lg={4} md={12} className="header-actions p-0">
                        <Row>
                            <Col xs={8}>
                                <div className="search 'd-flex justify-content-center w-100">
                                    <input type="text" className='search-input' />
                                    <button className="btn-search"><GoSearch className='search-icon' /></button>
                                </div>
                            </Col>
                            <Col xs={4}  className='d-flex justify-content-center gap-2'>
                                <div className="cart" onClick={() => setShowCart(!showCart)}>
                                    <div className="cart-icon-container">
                                        {showCart ? <AiOutlineClose className='cart-icon' /> : <IoCartSharp className='cart-icon' />}
                                    </div>
                                    <div className="cart-count">0</div>
                                    {showCart && <Cart />}
                                </div>
                                <div className="account">
                                    <IoPersonSharp className='account-icon' />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            {open && (
                <div className="header-info">
                    <Row className="info-container">
                        {HeaderBottomContent.map((msg,index) => (
                            <>
                                <Col lg={3} md={12} className="info">
                                    <AiFillClockCircle className='info-icon' />
                                    <span key={index}>{msg.Companyhours}</span>
                                </Col>
                                <Col lg={3} md={12} className="info">
                                    <HiBuildingOffice className='info-icon' />
                                    <span key={index}>{msg.CompanyName}</span>
                                </Col>
                                <Col lg={3} md={12} className="info">
                                    <FiPhoneCall className='info-icon' />
                                    <span key={index}>{msg.CompanyPhone}</span>
                                </Col>
                                <Col lg={3} md={12} className="info">
                                    <BsEnvelopeFill className='info-icon' />
                                    <span key={index}>{msg.CompanyEmail}</span>
                                </Col>
                            </>
                        ))}
                    </Row>
                </div>
            )}
            <ScrollTop />
        </div>
    )
}

export default Header