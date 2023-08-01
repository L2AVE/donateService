import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CSSTransition } from 'react-transition-group';


function NavBar() {
  const activeStyle = {
    fontWeight: '800',
    fontSize: '27px'
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track the login status

  // Check the login status when the component mounts
  useEffect(() => {
    // Check if the user is logged in (e.g., using localStorage)
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary basic-font" sticky="top" style={{ display: 'flex' }}>
      <Container fluid style={{  display: 'flex' }}>
      <Navbar.Brand href="/">
          <img
            alt="Logo"
            src="icon/logo.png" // 로고 이미지 경로
            width="60"
            height="60"
            className="d-inline-block align-middle"
          />{' '}
          PAPERPLANE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="mx-auto">
              <Nav.Link href="/donate">기부하기</Nav.Link>
              <Nav.Link href="/service" style={{ margin: '0 40px'}}>작은 한걸음</Nav.Link>
              <Nav.Link href="/process" style={{ margin: '0 40px'}}>투명한 과정</Nav.Link>
            <NavDropdown title="더보기" id="collasible-nav-dropdown" style={{ margin: '0 40px'}}>
              <NavDropdown.Item href="#action/3.1">공지사항</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                보고서
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">
                이용약관
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          {isLoggedIn ? (
            <Nav.Link href="/mypage">마이페이지</Nav.Link>
          ) : (
            <>
              <Nav.Link href="/register">회원가입</Nav.Link>
              <Nav.Link eventKey={2} href="/login">
                로그인
              </Nav.Link>
            </>
          )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}




// function NavBar() {
//   return (
    
//   );
// }

export default NavBar;
