import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Link } from 'react-router-dom'; 

import { useEffect, useState } from 'react';
import axios from 'axios';




function DonateCard() {
  
  var cardNumber = 10;
  const cardDetails = Array.from({ length: cardNumber }).map((_, idx) => ({
    cardSrc: `/pic/board.jpg`,
    cardTitle: "엄마가 밥을 못 먹어요",
    cardText: "엄마가 밥을 못 먹어요, 저는 어떻게 하면 좋을까요?",
    now: 60,
  }));

  return (
    <Row xs={12} md={3} className="g-5" style={{ margin: '0 auto', marginTop: '1px', marginBottom: '100px' }}>
      {cardDetails.map((cardDetail, idx) => (
        <Col key={idx}>
          <Card>
            <Link to="/donate-detail">
              <Card.Img variant="top" src={cardDetail.cardSrc} />
            </Link>
            <Card.Body>
              <Card.Title>{cardDetail.cardTitle}</Card.Title>
              <Card.Text>{cardDetail.cardText}</Card.Text>
              <ProgressBar variant="danger" now={cardDetail.now} style={{ height: '8px' }} />
              
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

  
  export default DonateCard;
  