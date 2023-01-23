import AnswerBox from '../../common/AnswerBox';
import QuestionBox from '../../common/QuestionBox';
import { Wrapper } from './style';
import { useRecoilValue } from 'recoil';
import { surveyQuestionBase } from '../../../recoil/atom';

function Third({ next }) {
  const result = useRecoilValue(surveyQuestionBase);
  const question = Object.keys(result);
  const answers = [
    '만약, 내 목표를 누군가와 함께 이룰 수 있다면, 어떤 사람들과 함께 하고 싶나요?',
    '우리 지역, 우리 동네에 사는 또래 동료와',
    '남녀노소 불문, 제주도 내 뜻이 같은 모든 사람들과',
    '타지에 사는 다양한 사람들과',
    '배움이 우선! 곳곳에 숨은 능력자들과',
  ];

  return (
    <Wrapper>
      <h1>세번째 페이지</h1>
      <QuestionBox question="만약, 내 목표를 누군가와 함께 이룰 수 있다면, 어떤 사람들과 함께 하고 싶나요?" />
      <AnswerBox
        next={() => next(question[2], answers[0])}
        subject="우리 지역, 우리 동네에 사는 또래 동료와"
      />
      <AnswerBox
        next={() => next(question[2], answers[1])}
        subject="남녀노소 불문, 제주도 내 뜻이 같은 모든 사람들과"
      />
      <AnswerBox next={() => next(question[2], answers[2])} subject="타지에 사는 다양한 사람들과" />
      <AnswerBox
        next={() => next(question[2], answers[3])}
        subject="배움이 우선! 곳곳에 숨은 능력자들과"
      />
    </Wrapper>
  );
}

export default Third;
