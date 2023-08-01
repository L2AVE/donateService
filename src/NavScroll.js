import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [headerBg, setHeaderBg] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setHeaderBg('#333'); // 스크롤이 100 이상일 때 색상 변경
      } else {
        setHeaderBg('transparent'); // 스크롤이 100 미만일 때 색상 투명으로 변경
      }
    };

    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트를 제거합니다.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app" style={{ backgroundColor: headerBg }}>
      {/* 내용 */}
    </div>
  );
}

export default App;
