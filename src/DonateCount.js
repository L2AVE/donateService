import ScrollCount from './ScrollCount'

function DonateCount() {
    const targetNumber = 555555555;
  
    return (
      <div className="basic-font" style={{ display: 'flex', justifyContent: 'center', margin: '40px' }}>
        <h2>
          <p style={{ fontSize: '60px', fontWeight: 'bold' }}>지금까지</p>
          <ScrollCount end={targetNumber} />원 기부
        </h2>
      </div>
    );
  }

  export default DonateCount