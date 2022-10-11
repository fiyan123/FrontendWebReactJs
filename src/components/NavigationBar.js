import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="/">ReactFilms</Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="me-auto">
					<Nav.Link href="#trending">Trending</Nav.Link>
					<Nav.Link href="#superhero">SuperHero</Nav.Link>
					<Nav.Link href="#action">Action</Nav.Link>
				</Nav>
				<Nav>
					<NavDropdown title="Tools" id="collasible-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">
							Another action
						</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
					</NavDropdown>
					<Nav.Link href="#deets">More</Nav.Link>
				</Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default NavigationBar;