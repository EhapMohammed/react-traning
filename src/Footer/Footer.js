import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';


function Footer() {
  return (
    <>
        <Navbar  className="bg-body-tertiary">
          <Container fluid >
            <Navbar.Brand href="#" className='mx-auto'>Navbar Offcanvas</Navbar.Brand>
          </Container>
        </Navbar>
    </>
  );
}

export default Footer;