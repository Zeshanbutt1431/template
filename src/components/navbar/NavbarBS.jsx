import "./NavbarBS.css"
import { navItems } from '../../data/taxonomycontent'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const NavbarBS = () => {
    return (
        <Navbar bg="sharporange" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Container fluid>
                    <Nav className="me-auto justify-content-center">
                        {navItems.map((nav) => (
                            <NavDropdown title={nav.DEPT} id="collasible-nav-dropdown">
                                {nav.Type?.map((m) => (
                                    m.SubType ? <NavDropdown title={m.TYPE}>
                                        {m.SubType?.map((sm) => (
                                            <NavDropdown.Item href="#action/3.1">{sm.SUBTYPE}</NavDropdown.Item>
                                        ))}
                                    </NavDropdown> : <NavDropdown.Item href="#action/3.1">{m.TYPE}</NavDropdown.Item>
                                ))}
                            </NavDropdown>
                        ))
                        }
                    </Nav>
                </Container>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavbarBS