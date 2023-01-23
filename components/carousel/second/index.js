import AnswerBox from '../../common/AnswerBox';
import QuestionBox from '../../common/QuestionBox';
import { Wrapper } from './style';

function Second({ next }) {
  return (
    <Wrapper>
      <h1>두번째 페이지</h1>
      <QuestionBox question="목표를 이루기 위해 내가 가장 먼저 하는 것은?" />
      <AnswerBox next={next} subject="뭘 하고 싶은지부터 찾아본다." />
      <AnswerBox next={next} subject="목표를 함께 이룰 사람들을 찾아본다" />
      <AnswerBox next={next} subject="다른 사람들의 목표를 구경하며 영감을 얻는다. " />{' '}
      <AnswerBox next={next} subject="확실한 플랜을 세운다." />
      <AnswerBox next={next} subject="일단 주위에 떠벌린다." />
    </Wrapper>
  );
}

export default Second;
