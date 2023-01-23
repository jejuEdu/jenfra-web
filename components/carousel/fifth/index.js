import AnswerBox from '../../common/AnswerBox';
import QuestionBox from '../../common/QuestionBox';
import { Wrapper } from './style';

function Fifth({ next }) {
  return (
    <Wrapper>
      <h1>{`다섯번째 페이지 --> 확정아님.`}</h1>
      <QuestionBox question="그룹 활동에서 내 성향은?" />
      <AnswerBox
        next={next}
        subject="내가 계획하고 내가 주도하는게 맘 편함"
        desc="리더 혹은 내가 계획하여 남과 같이 진행하는 것을 선호함"
      />
      <AnswerBox
        next={next}
        subject="짜여진 계획에 따르고 참여하는게 맘 편함"
        desc="내가 계획하기 보다는 리더를 따르고 정해진 계획에 따른느 것을 선호함."
      />
    </Wrapper>
  );
}

export default Fifth;
