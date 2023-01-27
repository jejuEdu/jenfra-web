import { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../constant/colors';
import { SURVEY_DATA } from '../../../constant/survey';

const CardWrap = styled.div`
  transition: 0.5s ease-out;
`;
const QuestionComponent = styled.div`
  display: inline-block;
  width: fit-content;
  height: 2.5rem;
  padding: 0 1.45rem;
  background: ${(props) => (props.index % 2 === 1 ? '#FFFFFF' : COLORS.point)};
  border-radius: 2rem;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 155%;
  display: flex;
  align-items: center;
  color: ${(props) => (props.index % 2 === 1 ? '#000000' : '#ffffff')};
  margin-bottom: 0.8rem;
`;
const QuestionTitle = styled.div`
  font-weight: 700;
  font-size: 2rem;
  line-height: 155%;
  display: flex;
  align-items: center;
  color: #000000;
  margin-bottom: 2rem;
`;
const AnswerWrap = styled.div`
  > div:first-child {
    position: relative;
    background: ${COLORS.point};
    padding: 1.5rem 2rem;

    &:after {
      content: 'Your Pick!';
      display: block;
      position: absolute;
      top: 50%;
      right: 1.2rem;
      transform: translate(0, -50%);
      font-weight: 700;
      font-size: 1.3rem;
      line-height: 155%;
      width: 3.5rem;
      color: #ffffff;
    }

    div {
      color: #fff;
    }

    div:nth-child(2) {
      width: calc(100% - 8rem);
    }
  }
`;
const AnswerComponentWrap = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 1.2rem;
  margin-bottom: 1.2rem;

  &:last-child {
    margin-bottom: ${(props) => (props.customMarginBottom ? '2.6rem' : '7rem')};
  }
`;
const Rank = styled.div`
  min-width: 2.6rem;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 155%;
  color: #000000;
  margin-right: 2rem;
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 155%;
  color: #000000;
`;

const ToggleButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 3.2rem;

  span {
    margin: 0.2rem 0;
    font-weight: 700;
    font-size: 1.3rem;
    line-height: 155%;
    color: #000000;
  }

  img {
    transform: ${(props) => (props.openAnswer ? 'rotate(180deg)' : '')};
  }
`;

const ResultQuestionCard = ({ index = null, question }) => {
  const [openAnswer, setOpenAnswer] = useState(false);
  const [newArray, setNewArray] = useState(question.slice(0, 2));

  return (
    <CardWrap>
      <QuestionComponent index={index + 1}>Question {index + 1}</QuestionComponent>
      <QuestionTitle>{SURVEY_DATA[index].question}</QuestionTitle>
      {openAnswer ? (
        <AnswerWrap>
          {question.map((answer, key) => {
            return (
              <AnswerComponentWrap
                key={key + answer.Title}
                customMarginBottom={question.length > 2}
              >
                <Rank>{answer.rank}위</Rank>
                <Title>{answer.Title}</Title>
              </AnswerComponentWrap>
            );
          })}
        </AnswerWrap>
      ) : (
        <AnswerWrap>
          {newArray.map((answer, key) => {
            return (
              <AnswerComponentWrap
                key={key + answer.Title}
                customMarginBottom={question.length > 2}
              >
                <Rank>{answer.rank}위</Rank>
                <Title>{answer.Title}</Title>
              </AnswerComponentWrap>
            );
          })}
        </AnswerWrap>
      )}
      {question.length > 2 && (
        <div onClick={() => setOpenAnswer(!openAnswer)}>
          {openAnswer ? (
            <ToggleButton openAnswer={openAnswer}>
              <img src="/images/arrow-toggle.svg" />
              <span>접기</span>
            </ToggleButton>
          ) : (
            <ToggleButton openAnswer={openAnswer}>
              <span>모두보기</span>
              <img src="/images/arrow-toggle.svg" />
            </ToggleButton>
          )}
        </div>
      )}
    </CardWrap>
  );
};

export default ResultQuestionCard;
