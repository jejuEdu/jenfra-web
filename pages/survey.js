import Link from 'next/link';
import LayoutSurvey from '../layouts/LayoutSurvey';
import styled from 'styled-components';

import First from '../components/carousel/first';
import Second from '../components/carousel/second';
import Third from './../components/carousel/third/index';

import { useState, useEffect, useRef } from 'react';

// 연습용으로 한 파일 안에 모든 코드 다 적어둠.
// 실제 구현할때는 코드 분리할 예정.
const Survey = () => {
  const [list, setList] = useState(0);
  const pageRef = useRef();

  useEffect(() => {
    pageRef.current.style.transition = 'all 0.5s ease-in-out';
    pageRef.current.style.transform = `translateX(-${list}00%)`;
  }, [list]);

  const handleNext = () => {
    if (list >= 2) {
      setList(0);
    } else {
      setList(list + 1);
    }
  };

  const handleBefore = () => {
    setList(list - 1);
  };

  const checkList = () => {
    console.log(list);
  };

  return (
    <LayoutSurvey>
      설문페이지
      <br />
      <Link href="/">
        <a>홈으로 이동</a>
      </Link>
      <Container>
        <GraphContainer>
          <Graph list={list} />
        </GraphContainer>
        {list}/3
        <Wrapper ref={pageRef}>
          <First next={handleNext} />
          <Second next={handleNext} />
          <Third next={handleNext} />
        </Wrapper>
      </Container>
      <button onClick={checkList}>list Check</button>
    </LayoutSurvey>
  );
};

export default Survey;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 85vh;
  overflow: hidden;
`;

const Wrapper = styled.div`
  display: flex;
`;

const GraphContainer = styled.div`
  width: 100%;
  border: 1px solid red;
`;

const Graph = styled.div`
  width: ${({ list }) => (list !== 3 ? `${list * 3}0%` : '100%')};
  height: 50px;

  background-color: red;
`;
