import AnswerBox from '../../common/AnswerBox';
import QuestionBox from '../../common/QuestionBox';
import { Wrapper } from './style';

function Fourth({ next }) {
  return (
    <Wrapper>
      <h1>네번째 페이지</h1>
      <QuestionBox question="이럴 때 의지가 불타오른다." />
      <AnswerBox next={next} subject="누군가 철저하 관리/감독해줄 때" />
      <AnswerBox next={next} subject="혼자가 아닌 나, 동료와 함께 할 때" />
      <AnswerBox next={next} subject="돈 받을 때..." />
      <AnswerBox next={next} subject="다른 사람에게 관심과 응원을 받을 때" />
      <AnswerBox next={next} subject="누군가와 목표 달성을 약속 했을 때" />
    </Wrapper>
  );
}

export default Fourth;
