import React, { useState, useEffect } from 'react';



const ScrollCount = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let requestId;
    const duration = 2000; // 전체 시간 1.5초
    const initialPercent = 0.5; // 초기 값 비율 (50%)
    const initialCount = Math.floor(end * initialPercent); // 초기 값
    const targetCount = end; // 목표 값

    const animateCount = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = timestamp - startTime;
      const percentComplete = progress / duration;
      let currentCount;

      if (percentComplete < initialPercent) {
        // 초기 값까지 증가
        currentCount = Math.floor(percentComplete / initialPercent * initialCount);
      } else {
        // 목표 값까지 증가
        currentCount = Math.min(Math.floor((percentComplete - initialPercent) / (1 - initialPercent) * (targetCount - initialCount)) + initialCount, targetCount);
      }

      setCount(currentCount.toLocaleString());

      if (progress < duration) {
        requestId = requestAnimationFrame(animateCount);
      }
    };

    requestId = requestAnimationFrame(animateCount);

    return () => cancelAnimationFrame(requestId);
  }, [end]);

  return <span>{count} </span>;
};


export default ScrollCount
