import AnswerBox from '../../common/AnswerBox';
import QuestionBox from '../../common/QuestionBox';
import { Wrapper } from './style';

function Seventh({ next }) {
  return (
    <Wrapper>
      <h1>{`일곱번째 페이지 --> 확정아님`}</h1>
      <QuestionBox question="모임을 만들고 싶을 때, 이런게 허들이다!" />
      <AnswerBox next={next} subject="마땅한 장소를 찾기가 어렵다" />
      <AnswerBox next={next} subject="마땅한 사람을 찾기가 어렵다" />
      <AnswerBox next={next} subject="꾸준히 지속하기가 어렵다" />
      <AnswerBox next={next} subject="과정과 결과를 확인하기 어렵다" />
    </Wrapper>
  );
}

export default Seventh;
