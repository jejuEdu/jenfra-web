import AnswerBox from '../../common/AnswerBox';
import QuestionBox from '../../common/QuestionBox';
import * as S from './style';

const SurveyForm = ({ surveyItem = {}, next }) => {
  return (
    <S.Wrapper position={surveyItem.id}>
      <QuestionBox question={surveyItem.question} />
      {surveyItem?.value.map((answer) => (
        <AnswerBox
          key={surveyItem.question + answer.id}
          next={() => next(surveyItem.id, answer.id)}
          subject={answer.subject}
        />
      ))}
    </S.Wrapper>
  );
};

export default SurveyForm;
