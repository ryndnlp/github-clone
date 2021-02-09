import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Search from './Search';
import './NavigationBar.css';

const NavigationBar = () => {
  return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#">React</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Search />
            <Nav.Link href="#">Pull Requests</Nav.Link>
            <Nav.Link href="#">Issues</Nav.Link>
            <Nav.Link href="#">Marketplace</Nav.Link>
            <Nav.Link href="#">Explore</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  )
}

export default NavigationBar;