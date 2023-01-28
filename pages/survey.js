import LayoutSurvey from '../layouts/LayoutSurvey';
import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { surveyQuestionBase, surveyValueState } from '../recoil/atom';

import SurveyEnd from '../components/carousel/ServeyEnd';
import { SURVEY_DATA } from '../constant/survey';
import SurveyForm from '../components/carousel/SurveyForm';

// 연습용으로 한 파일 안에 모든 코드 다 적어둠.
// 실제 구현할때는 코드 분리할 예정.
const Survey = () => {
  const [list, setList] = useState(1);
  const pageRef = useRef();
  const [surveyValue, setSurveyValue] = useRecoilState(surveyValueState);

  useEffect(() => {
    if (list < 1) {
      alert('첫번째 페이지 입니다.');
      setList(1);
    }
  }, [list]);

  const [resultList, setResultList] = useRecoilState(surveyQuestionBase);

  const handleNext = (question, answer) => {
    if (list === 8) {
      alert('끝났습니다!');
    } else {
      pageRef.current.style.transition = 'all 0.5s ease-in-out';
      pageRef.current.style.transform = `translateX(-${list}00%)`;
      setList(list + 1);
      if (surveyValue.length >= question) {
        let newTitleArray = [...surveyValue];
        newTitleArray[question] = answer;
        setSurveyValue(newTitleArray);
        return;
      }
      setSurveyValue([...surveyValue, answer]);
    }
  };
  console.log('tttt', surveyValue);

  const handleBefore = () => {
    pageRef.current.style.transform = `translateX(-${list - 2}00%)`;
    setList(list - 1);
  };

  return (
    <LayoutSurvey>
      <Container>
        <GraphContainer list={list}>
          <PageBackBtn onClick={handleBefore} />
          <Graph list={list} src={'/imagescarouselHeaderImg.png'}>
            <TopNavigateBorder list={list} />
          </Graph>
        </GraphContainer>
        <Wrapper ref={pageRef}>
          {SURVEY_DATA?.map((surveyItem) => (
            <SurveyForm key={surveyItem.id} surveyItem={surveyItem} next={handleNext} />
          ))}
          <SurveyEnd resultList={resultList} />
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
  height: 100%;
  padding-top: 3.2rem;
  overflow: hidden;

  &::before {
    content: '';
    border-top: 0.3rem dashed black;
    width: 80vw;
    height: 0.1rem;
    position: relative;
    top: 3.8rem;
    left: 0;
    transform: translate(10vh, 0);
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const PageBackBtn = styled.div`
  width: 4.7rem;
  height: 2.5rem;

  background: url('/images/survey_arrow.png');
  background-size: cover;

  cursor: pointer;
`;

const GraphContainer = styled.div`
  width: 100%;
  height: 7rem;
  display: flex;
  position: relative;
  align-items: center;

  &::after {
    content: '${(props) => props.list}/8';
    width: 50px;
    height: 50px;
    position: relative;
    top: 55px;
    left: -25px;
  }
`;

const Graph = styled.div`
  width: ${({ list }) => (list !== 8 ? `${list}0%` : '100%')};
  height: 6rem;
  margin-left: 2.2rem;
  position: relative;
  transition: width 0.5s ease-in-out;

  display: flex;
  justify-content: start;
  align-items: center;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 4rem;
    height: 5.7rem;
    background: url('/images/carouselHeaderImg.png') no-repeat 50% 50%;
  }
`;

const TopNavigateBorder = styled.div`
  width: 97%;
  height: 0.4rem;
  background-color: black;
`;

const DottedBorder = styled.div`
  /* float: right; */
  /* position: relative;
  top: 100px;
  left: 0px;
  width: 97%;
  height: 1px;
  border-top: 1px dotted black; */
`;
