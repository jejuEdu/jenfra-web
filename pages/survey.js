import LayoutSurvey from '../layouts/LayoutSurvey';
import styled from 'styled-components';
// import { Image } from 'next/image';

import First from '../components/carousel/first';
import Second from '../components/carousel/second';
import Third from './../components/carousel/third/index';
import Fourth from './../components/carousel/fourth/index';
import Fifth from './../components/carousel/fifth/index';
import Sixth from './../components/carousel/sixth/index';
import Seventh from '../components/carousel/seventh';
import SurveyEnd from '../components/carousel/ServeyEnd';
import { useState, useEffect, useRef } from 'react';
// import arrowImage from '/images/survey_arrow.png';

// 연습용으로 한 파일 안에 모든 코드 다 적어둠.
// 실제 구현할때는 코드 분리할 예정.
const Survey = () => {
  const [list, setList] = useState(1);
  const pageRef = useRef();

  useEffect(() => {
    if (list < 1) {
      alert('첫번째 페이지 입니다.');
      setList(1);
    }
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
    console.log(list);
    setList(list - 1);
  };

  return (
    <LayoutSurvey>
      <Container>
        <GraphContainer>
          <PageBackBtn onClick={handleBefore} />
          <Graph list={list} src={'/imagescarouselHeaderImg.png'}>
            <TopNavigateBorder list={list} />
          </Graph>
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
  padding-top: 3.2rem;
`;

const Wrapper = styled.div`
  display: flex;
`;

const PageBackBtn = styled.div`
  width: 4.7rem;
  height: 2.5rem;

  background: url('/images/survey_arrow.png');
  cursor: pointer;
`;

const GraphContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  overflow-x: hidden;
`;

const Graph = styled.div`
  width: ${({ list }) => (list !== 7 ? `${list * 12}%` : '90%')};
  height: 6rem;
  margin-left: 2.2rem;
  position: relative;
  transition: width 0.5s ease-out;

  display: flex;
  justify-content: start;
  align-items: center;
  /* border: 1px solid black; */

  &::after {
    content: '';
    display: block;
    position: absolute;
    /* top: -0.5rem; */
    top: 0;
    right: 0;
    width: 4rem;
    height: 5.7rem;
    background: url('/images/carouselHeaderImg.png') no-repeat 50% 50%;
  }
`;

const TopNavigateBorder = styled.div`
  width: 97%;
  height: 1px;
  background-color: black;
`;
