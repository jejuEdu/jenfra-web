import AnswerBox from '../../common/AnswerBox';
import QuestionBox from '../../common/QuestionBox';
import { Wrapper } from './style';
import { useRecoilValue } from 'recoil';
import { surveyQuestionBase } from '../../../recoil/atom';

function Sixth({ next }) {
  const result = useRecoilValue(surveyQuestionBase);
  const question = Object.keys(result);
  const answers = [
    '하루도 빠짐없이, 당신은 성실er...',
    '오랫동안 꾸준히, 당신은 끈기er...',
    '동료들이 인정한, 당신은 능력er...',
    '타인의 성장을 도운, 당신은 응원er...',
  ];

  return (
    <Wrapper>
      <h1>{`여섯번째 페이지 --> 확정아님`}</h1>
      <QuestionBox question="나에게 이런 '성장 뱃지'가 주어진다면?" />
      <AnswerBox
        next={() => next(question[5], answers[0])}
        subject="하루도 빠짐없이, 당신은 성실er..."
      />
      <AnswerBox
        next={() => next(question[5], answers[1])}
        subject="오랫동안 꾸준히, 당신은 끈기er..."
      />
      <AnswerBox
        next={() => next(question[5], answers[2])}
        subject="동료들이 인정한, 당신은 능력er..."
      />
      <AnswerBox
        next={() => next(question[5], answers[3])}
        subject="타인의 성장을 도운, 당신은 응원er..."
      />
    </Wrapper>
  );
}

export default Sixth;
