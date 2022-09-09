import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Bite Sized</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">Finished Stories</Nav.Link>

            <Nav.Link href="/newart">New Art</Nav.Link>
            <Nav.Link href="#profile">New Story</Nav.Link>
            <Nav.Link href="#profile">USER_Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
