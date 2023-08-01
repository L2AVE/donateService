import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavPlus() {
  return (
    <>
      
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary basic-font" style={{ display: 'flex' }}>
      <Container fluid style={{  display: 'flex' }}>
          <Nav className="mx-auto">
              <Nav.Link href="/donate" style={{ margin: '0 40px'}}>비행중</Nav.Link>
              <Nav.Link href="/donate-review" style={{ margin: '0 40px'}}>비행후기</Nav.Link>
          </Nav>
          
      </Container>
    </Navbar>
    </>
  );
}

export default NavPlus;