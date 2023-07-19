import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

function MainCard() {
  return (
    <div className="basic-font">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
            <Card style={{ width: '1000px', height: '500px', margin: '0 20px' }}>
                <Card.Body style={{ display: 'flex', alignItems: 'center' }}>
                <Card.Img src="/pic/bus.jpg" style={{ width: '400px', height: '400px', objectFit: 'cover', marginRight: '20px' }} />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Stack direction="horizontal" gap={2} style={{}}>
                            <Button variant="outline-dark" style={{ alignSelf: 'flex-start' }}>동참하기</Button>
                            <Badge bg="light" text="dark" style={{ width: '80px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: 'lighter'}}>
                                진행중
                            </Badge>
                        </Stack>
                        <div>
                            <Card.Title style={{ fontSize: '30px', fontWeight: 'bold',}}>대중교통 이용하기</Card.Title>
                            <Card.Text>끊임없이 늘어나는 이산화탄소 줄이기에 동참해주세요.</Card.Text>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
            <Card style={{ width: '1000px', height: '500px', margin: '0 20px' }}>
                <Card.Body style={{ display: 'flex', alignItems: 'center' }}>
                <Card.Img src="/pic/bus.jpg" style={{ width: '400px', height: '400px', objectFit: 'cover', marginRight: '20px' }} />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Stack direction="horizontal" gap={2} style={{}}>
                            <Button variant="outline-dark" style={{ alignSelf: 'flex-start' }}>동참하기</Button>
                            <Badge bg="light" text="dark" style={{ width: '80px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: 'lighter'}}>
                                진행중
                            </Badge>
                        </Stack>
                        <div>
                            <Card.Title style={{ fontSize: '30px', fontWeight: 'bold',}}>대중교통 이용하기</Card.Title>
                            <Card.Text>끊임없이 늘어나는 이산화탄소 줄이기에 동참해주세요.</Card.Text>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
            <Card style={{ width: '1000px', height: '500px', margin: '0 20px' }}>
                <Card.Body style={{ display: 'flex', alignItems: 'center' }}>
                <Card.Img src="/pic/bus.jpg" style={{ width: '400px', height: '400px', objectFit: 'cover', marginRight: '20px' }} />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Stack direction="horizontal" gap={2} style={{}}>
                            <Button variant="outline-dark" style={{ alignSelf: 'flex-start' }}>동참하기</Button>
                            <Badge bg="light" text="dark" style={{ width: '80px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: 'lighter'}}>
                                진행중
                            </Badge>
                        </Stack>
                        <div>
                            <Card.Title style={{ fontSize: '30px', fontWeight: 'bold',}}>대중교통 이용하기</Card.Title>
                            <Card.Text>끊임없이 늘어나는 이산화탄소 줄이기에 동참해주세요.</Card.Text>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    </div>
  );
}

export default MainCard;
