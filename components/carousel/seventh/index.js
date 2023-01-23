import AnswerBox from '../../common/AnswerBox';
import QuestionBox from '../../common/QuestionBox';
import { Wrapper } from './style';
import { useRecoilValue } from 'recoil';
import { surveyQuestionBase } from '../../../recoil/atom';

function Seventh({ next }) {
  const result = useRecoilValue(surveyQuestionBase);
  const question = Object.keys(result);
  const answers = [
    '마땅한 장소를 찾기가 어렵다',
    '마땅한 사람을 찾기가 어렵다',
    '꾸준히 지속하기가 어렵다',
    '과정과 결과를 확인하기 어렵다',
  ];

  return (
    <Wrapper>
      <h1>{`일곱번째 페이지 --> 확정아님`}</h1>
      <QuestionBox question="모임을 만들고 싶을 때, 이런게 허들이다!" />
      <AnswerBox next={() => next(question[6], answers[0])} subject="마땅한 장소를 찾기가 어렵다" />
      <AnswerBox next={() => next(question[6], answers[1])} subject="마땅한 사람을 찾기가 어렵다" />
      <AnswerBox next={() => next(question[6], answers[2])} subject="꾸준히 지속하기가 어렵다" />
      <AnswerBox
        next={() => next(question[6], answers[3])}
        subject="과정과 결과를 확인하기 어렵다"
      />
    </Wrapper>
  );
}

export default Seventh;
