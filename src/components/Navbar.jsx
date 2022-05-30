import {
    Container,
    Navbar,
    Nav,
    Button
} from 'react-bootstrap';

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand>BookStore</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/books">Book</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Button href="/login" variant="primary">Login</Button>
            </Container>
        </Navbar>
    )
}

export default NavBar;