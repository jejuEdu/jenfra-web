import Link from 'next/link';
import LayoutSurvey from '../layouts/LayoutSurvey';
import styled from 'styled-components';

import First from '../components/carousel/first';
import Second from '../components/carousel/second';
import Third from './../components/carousel/third/index';
import Fourth from './../components/carousel/fourth/index';
import Fifth from './../components/carousel/fifth/index';
import Sixth from './../components/carousel/sixth/index';
import Seventh from '../components/carousel/seventh';
import SurveyEnd from '../components/carousel/ServeyEnd';
import { useState, useEffect, useRef } from 'react';

// 연습용으로 한 파일 안에 모든 코드 다 적어둠.
// 실제 구현할때는 코드 분리할 예정.
const Survey = () => {
  const [list, setList] = useState(1);
  // 불필요한 랜더링을 유발할 수 있음.
  // redux vs recoil vs zustand -> 결과제출 페이지 데이터관리
  const pageRef = useRef();

  useEffect(() => {
    // pageRef.current.style.transition = 'all 0.5s ease-in-out';
    // pageRef.current.style.transform = `translateX(-${list}00%)`;
  }, [list]);

  const handleNext = () => {
    if (list === 8) {
      alert('끝났습니다!');
    } else {
      pageRef.current.style.transition = 'all 0.5s ease-in-out';
      pageRef.current.style.transform = `translateX(-${list}00%)`;
      setList(list + 1);
    }
  };

  const handleBefore = () => {
    pageRef.current.style.transform = `translateX(-${list - 2}00%)`;
    setList(list - 1);
  };

  const checkList = () => {
    console.log(list);
  };

  return (
    <LayoutSurvey>
      {/* 설문페이지
      <br />
      <Link href="/">
        <a>홈으로 이동</a>
      </Link> */}
      <Container>
        <GraphContainer>
          <div onClick={handleBefore} className="arrow">
            화살표
          </div>
          <Graph list={list} src={'/imagescarouselHeaderImg.png'} />
        </GraphContainer>
        {list}/8
        <Wrapper ref={pageRef}>
          <First next={handleNext} />
          <Second next={handleNext} />
          <Third next={handleNext} />
          <Fourth next={handleNext} />
          <Fifth next={handleNext} />
          <Sixth next={handleNext} />
          <Seventh next={handleNext} />
          <SurveyEnd />
        </Wrapper>
      </Container>
      {/* <button onClick={checkList}>check</button> */}
    </LayoutSurvey>
  );
};

export default Survey;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  display: flex;
`;

const GraphContainer = styled.div`
  width: 100%;
  /* border: 1px solid red; */
  /* text-align: end; */
  display: flex;
  /* justify-content: end; */
  align-items: center;

  .arrow {
    background-color: red;
    margin-left: 24px;
    width: 47px;
    height: 25px;
  }
`;

const Graph = styled.div`
  width: ${({ list }) => (list !== 7 ? `${list * 12}%` : '90%')};
  height: 30px;
  margin-left: 30px;
  position: relative;
  transition: width 0.5s ease-out;

  /* background-color: black; */

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: -2rem;
    right: 0;
    width: 4rem;
    height: 5.7rem;
    background: url('/images/carouselHeaderImg.png') no-repeat 50% 50%;
  }
`;
