import ScrollCount from './ScrollCount'


function ServiceCount() {
    const targetNumber = 1100000;
  
    return (
      <div className="basic-font" style={{ display: 'flex', justifyContent: 'center', margin: '40px' }}>
        <h2>
          <p style={{ fontSize: '60px', fontWeight: 'bold' }}>지금까지</p>
          <ScrollCount end={targetNumber} />명 동참
        </h2>
      </div>
    );
  }
  export default ServiceCount
