import AnswerBox from '../../common/AnswerBox';
import QuestionBox from '../../common/QuestionBox';
import { Wrapper } from './style';

function Sixth({ next }) {
  return (
    <Wrapper>
      <h1>여섯번째 페이지</h1>
      <QuestionBox question="질문 질문 \n \ n 으로 줄넘김 처리" />
      <AnswerBox
        next={next}
        subject="타이틀 타 이틀 타이 틀타이틀"
        desc="설명설명 설명 설 명설명"
      />
      <AnswerBox
        next={next}
        subject="타이틀 타 이틀 타이 틀타이틀"
        desc="설명설명 설명 설 명설명"
      />
      <AnswerBox
        next={next}
        subject="타이틀 타 이틀 타이 틀타이틀"
        desc="설명설명 설명 설 명설명"
      />
    </Wrapper>
  );
}

export default Sixth;
