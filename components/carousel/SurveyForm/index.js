import { useEffect } from 'react';
import AnswerBox from '../../common/AnswerBox';
import QuestionBox from '../../common/QuestionBox';
import * as S from './style';

const SurveyForm = ({ surveyItem = {}, next }) => {
  useEffect(() => {
    if (surveyItem.id) {
      let questionBoxHeight = document.getElementById('questionBox' + surveyItem.id).clientHeight;
      document.getElementById(
        'answerScrollHeight' + surveyItem.id,
      ).style.height = `calc(var(--vh, 1vh) * 100 - 20rem - ${questionBoxHeight}px)`;
      console.log(document.getElementById('answerScrollHeight'));
    }
  }, [surveyItem.id]);

  return (
    <S.Wrapper position={surveyItem.id}>
      <QuestionBox id={'questionBox' + (surveyItem.id + 1)} question={surveyItem.question} />
      <S.AnswerScroll id={'answerScrollHeight' + (surveyItem.id + 1)}>
        {surveyItem?.value.map((answer) => (
          <AnswerBox
            key={surveyItem.question + answer.id}
            next={() => next(surveyItem.id, answer.id)}
            subject={answer.subject}
          />
        ))}
      </S.AnswerScroll>
    </S.Wrapper>
  );
};

export default SurveyForm;
