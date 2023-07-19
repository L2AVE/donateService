import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function MainCarousel() {
  return (
    <Container fluid>
    <Row>
      <Col className="mx-auto basic-font" style={{ maxWidth: '1400px', margin: '30px' }}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/pic/child2.jpg"
              alt="First slide"
              style={{ height: '500px', objectFit: 'cover' }}
            />
          </Carousel.Item>
          <Carousel.Item>
              <img
                className="d-block w-100"
                src="/pic/child3.jpg"
                alt="First slide"
                style={{ height: '500px', objectFit: 'cover' }}

              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/pic/child.jpg"
                alt="First slide"
                style={{ height: '500px', objectFit: 'cover' }}

              />
            </Carousel.Item>
            </Carousel>
        </Col>
      </Row>
    </Container>
    
  );
}

export default MainCarousel;