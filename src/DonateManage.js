import React, { useState } from 'react';

function Donate() {
  const [donateList, setDonateList] = useState([]);
  const [inProgressList, setInProgressList] = useState([]);
  const [completedList, setCompletedList] = useState([]);

  // 기부글 등록 함수
  const registerDonate = (newDonate) => {
    setDonateList((prevList) => [...prevList, newDonate]);
  };

  // 기부글 상태 업데이트 함수 (진행중으로 변경)
  const moveToInProgress = (donateId) => {
    setInProgressList((prevList) => [...prevList, donateList.find((item) => item.id === donateId)]);
    setDonateList((prevList) => prevList.filter((item) => item.id !== donateId));
  };

  // 기부글 상태 업데이트 함수 (기부완료로 변경)
  const moveToCompleted = (donateId) => {
    setCompletedList((prevList) => [...prevList, inProgressList.find((item) => item.id === donateId)]);
    setInProgressList((prevList) => prevList.filter((item) => item.id !== donateId));
  };

  // Donate 컴포넌트 렌더링 및 기부글 등록

  // 이후 각 상태별로 배열을 사용하여 기부글을 렌더링하는 부분을 작성합니다.
}

export default Donate;
