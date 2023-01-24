import AnswerBox from '../../common/AnswerBox';
import QuestionBox from '../../common/QuestionBox';
import * as S from './style';
import { useRecoilState, useRecoilValue } from 'recoil';
import { surveyListState } from '../../../recoil/atom';

const SurveyForm = ({ surveyItem = {}, next }) => {
  // const [surveyValue, setSurveyValue] = useRecoilState(surveyValueState);

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
