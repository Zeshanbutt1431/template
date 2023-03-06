import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'

function Navigationbar() {
	return (
		<Navbar className='topheader' expand="lg">
			<Container fluid>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav className="me-auto my-2 my-lg-0 m-auto" navbarScroll >
						<NavDropdown title="SAFETY PRODUCTS" id="navbarScrollingDropdown" className='nav-link' >
							<NavDropdown.Item href="#action3">Menu 1</NavDropdown.Item>
							<NavDropdown.Item href="#action4">Menu 2</NavDropdown.Item>
							<NavDropdown.Item href="#action5">Menu 3</NavDropdown.Item>
							<NavDropdown.Item href="#action5">Menu 4</NavDropdown.Item>
							<NavDropdown title="SAFETY PRODUCTS &raquo;" id="navbarScrollingDropdown">
								<div className='sub-menu'>
									<NavDropdown.Item href="#action3">Sub-Menu 1</NavDropdown.Item >
									<NavDropdown.Item href="#action4">Sub-Menu 2</NavDropdown.Item>
									<NavDropdown.Item href="#action5">Sub-Menu 3</NavDropdown.Item>
									<NavDropdown.Item href="#action5">Sub-Menu 4</NavDropdown.Item>
									<NavDropdown.Item href="#action5">Sub-Menu 5</NavDropdown.Item>
								</div>
							</NavDropdown>
						</NavDropdown>
						<NavDropdown title="SUPPLIES" id="navbarScrollingDropdown" className='nav-link' >
							<NavDropdown.Item href="#action3">Sub-Menu 1</NavDropdown.Item>
							<NavDropdown.Item href="#action4">Sub-Menu 2</NavDropdown.Item>
							<NavDropdown.Item href="#action5">Sub-Menu 3</NavDropdown.Item>
							<NavDropdown.Item href="#action5">Sub-Menu 4</NavDropdown.Item>
							<NavDropdown.Item href="#action5">Sub-Menu 5</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="APPAREL" id="navbarScrollingDropdown" className='nav-link' >
							<NavDropdown.Item href="#action3">Sub-Menu 1</NavDropdown.Item>
							<NavDropdown.Item href="#action4">Sub-Menu 2</NavDropdown.Item>
							<NavDropdown.Item href="#action5">Sub-Menu 3</NavDropdown.Item>
							<NavDropdown.Item href="#action5">Sub-Menu 4</NavDropdown.Item>
							<NavDropdown.Item href="#action5">Sub-Menu 5</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="ARCHERY" id="navbarScrollingDropdown" className='nav-link' >
							<NavDropdown.Item href="#action3">Sub-Menu 1</NavDropdown.Item>
							<NavDropdown.Item href="#action4">Sub-Menu 2</NavDropdown.Item>
							<NavDropdown.Item href="#action5">Sub-Menu 3</NavDropdown.Item>
							<NavDropdown.Item href="#action5">Sub-Menu 4</NavDropdown.Item>
							<NavDropdown.Item href="#action5">Sub-Menu 5</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="OPTICS" id="navbarScrollingDropdown" className='nav-link' >
							<NavDropdown.Item href="#action3">Sub-Menu 1</NavDropdown.Item>
							<NavDropdown.Item href="#action4">Sub-Menu 2</NavDropdown.Item>
							<NavDropdown.Item href="#action5">Sub-Menu 3</NavDropdown.Item>
							<NavDropdown.Item href="#action5">Sub-Menu 4</NavDropdown.Item>
							<NavDropdown.Item href="#action5">Sub-Menu 5</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="ACCESSORIES" id="navbarScrollingDropdown" className='nav-link' >
							<NavDropdown.Item href="#action3">Sub-Menu 1</NavDropdown.Item>
							<NavDropdown.Item href="#action4">Sub-Menu 2</NavDropdown.Item>
							<NavDropdown.Item href="#action5">Sub-Menu 3</NavDropdown.Item>
							<NavDropdown.Item href="#action5">Sub-Menu 4</NavDropdown.Item>
							<NavDropdown.Item href="#action5">Sub-Menu 5</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="DUTY GEAR" id="navbarScrollingDropdown" className='nav-link' >
							<NavDropdown.Item href="#action3">Sub-Menu 1</NavDropdown.Item>
							<NavDropdown.Item href="#action4">Sub-Menu 2</NavDropdown.Item>
							<NavDropdown.Item href="#action5">Sub-Menu 3</NavDropdown.Item>
							<NavDropdown.Item href="#action5">Sub-Menu 4</NavDropdown.Item>
							<NavDropdown.Item href="#action5">Sub-Menu 5</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="KNIVES & TOOLS" id="navbarScrollingDropdown" className='nav-link' >
							<NavDropdown.Item href="#action3">Sub-Menu 1</NavDropdown.Item>
							<NavDropdown.Item href="#action4">Sub-Menu 2</NavDropdown.Item>
							<NavDropdown.Item href="#action5">Sub-Menu 3</NavDropdown.Item>
							<NavDropdown.Item href="#action5">Sub-Menu 4</NavDropdown.Item>
							<NavDropdown.Item href="#action5">Sub-Menu 5</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="FIREARMS" id="navbarScrollingDropdown" className='nav-link' >
							<NavDropdown.Item href="#action3">Sub-Menu 1</NavDropdown.Item>
							<NavDropdown.Item href="#action4">Sub-Menu 2</NavDropdown.Item>
							<NavDropdown.Item href="#action5">Sub-Menu 3</NavDropdown.Item>
							<NavDropdown.Item href="#action5">Sub-Menu 4</NavDropdown.Item>
							<NavDropdown.Item href="#action5">Sub-Menu 5</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="AMMUNITION" id="navbarScrollingDropdown" className='nav-link' >
							<NavDropdown.Item href="#action3">Sub-Menu 1</NavDropdown.Item>
							<NavDropdown.Item href="#action4">Sub-Menu 2</NavDropdown.Item>
							<NavDropdown.Item href="#action5">Sub-Menu 3</NavDropdown.Item>
							<NavDropdown.Item href="#action5">Sub-Menu 4</NavDropdown.Item>
							<NavDropdown.Item href="#action5">Sub-Menu 5</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="GUN PARTS" id="navbarScrollingDropdown" className='nav-link' >
							<NavDropdown.Item href="#action3">Sub-Menu 1</NavDropdown.Item>
							<NavDropdown.Item href="#action4">Sub-Menu 2</NavDropdown.Item>
							<NavDropdown.Item href="#action5">Sub-Menu 3</NavDropdown.Item>
							<NavDropdown.Item href="#action5">Sub-Menu 4</NavDropdown.Item>
							<NavDropdown.Item href="#action5">Sub-Menu 5</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="CLEANING & STORAGE" id="navbarScrollingDropdown" className='nav-link' >
							<NavDropdown.Item href="#action3">Sub-Menu 1</NavDropdown.Item>
							<NavDropdown.Item href="#action4">Sub-Menu 2</NavDropdown.Item>
							<NavDropdown.Item href="#action5">Sub-Menu 3</NavDropdown.Item>
							<NavDropdown.Item href="#action5">Sub-Menu 4</NavDropdown.Item>
							<NavDropdown.Item href="#action5">Sub-Menu 5</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="CAMPING & OUTDOOR" id="navbarScrollingDropdown" className='nav-link'>
							<NavDropdown.Item href="#action3">Sub-Menu 1</NavDropdown.Item>
							<NavDropdown.Item href="#action4">Sub-Menu 2</NavDropdown.Item>
							<NavDropdown.Item href="#action5">Sub-Menu 3</NavDropdown.Item>
							<NavDropdown.Item href="#action5">Sub-Menu 4</NavDropdown.Item>
							<NavDropdown.Item href="#action5">Sub-Menu 5</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="HUNTING" id="navbarScrollingDropdown" className='nav-link'>
							<NavDropdown.Item href="#action3">Sub-Menu 1</NavDropdown.Item>
							<NavDropdown.Item href="#action4">Sub-Menu 2</NavDropdown.Item>
							<NavDropdown.Item href="#action5">Sub-Menu 3</NavDropdown.Item>
							<NavDropdown.Item href="#action5">Sub-Menu 4</NavDropdown.Item>
							<NavDropdown.Item href="#action5">Sub-Menu 5</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Navigationbar;