import React from 'react';
import Button from 'react-bootstrap/Button';

function Transparent(){
    return (
        <div style={{ position: 'relative', width: '1400px', height: '1000px',}}>
            <img 
                className="d-block w-100"
                src="/pic/cash.jpg"
                alt="TransparentDetail"
                style={{ height: '800px', objectFit: 'cover' , display: 'flex',justifyContent: 'center'}}
            />
            <div style={{position: 'absolute', top: '20%', right: '10%', transform: 'translateX(-50%)', textAlign: 'center'}}>
                <h2 style={{ }}>
                    종이비행기는 <br />모든 과정을 공개합니다.
                </h2>
                <Button variant="outline-secondary" style={{ marginTop: '15%', width: '200px', height: '50px'}}>투명한 과정</Button>{' '}
            </div>
        </div>

    );
}


export default Transparent