import AnswerBox from '../../common/AnswerBox';
import QuestionBox from '../../common/QuestionBox';
import { Wrapper } from './style';

function First({ next }) {
  return (
    <Wrapper>
      <h1>첫번째 페이지</h1>
      <QuestionBox question="2023년 새해, 올해 이것 만큼은 꼭 해보고 싶다!" />
      <AnswerBox next={next} subject="나만의 작은 취미 만들기" />
      <AnswerBox next={next} subject="새로운 언어 정복하기" />
      <AnswerBox next={next} subject="커리어 개발을 위한 사이드 프로젝트" />
      <AnswerBox next={next} subject="재테크/부업 성공하기" />
      <AnswerBox next={next} subject="1인 창업가, 크리에이터 되기" />
      <AnswerBox next={next} subject="직장인 되기" />
      <AnswerBox next={next} subject="체력, 체력, 체력 ..." />
    </Wrapper>
  );
}

export default First;
