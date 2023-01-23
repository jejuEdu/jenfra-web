import AnswerBox from '../../common/AnswerBox';
import QuestionBox from '../../common/QuestionBox';
import { Wrapper } from './style';
import { useRecoilValue } from 'recoil';
import { surveyQuestionBase } from '../../../recoil/atom';

function Second({ next }) {
  const result = useRecoilValue(surveyQuestionBase);
  const question = Object.keys(result);
  const answers = [
    '목표를 이루기 위해 내가 가장 먼저 하는 것은?',
    '뭘 하고 싶은지부터 찾아본다.',
    '다른 사람들의 목표를 구경하며 영감을 얻는다. ',
    '확실한 플랜을 세운다.',
    '일단 주위에 떠벌린다.',
  ];
  return (
    <Wrapper>
      <h1>두번째 페이지</h1>
      <QuestionBox question="목표를 이루기 위해 내가 가장 먼저 하는 것은?" />
      <AnswerBox
        next={() => next(question[1], answers[0])}
        subject="뭘 하고 싶은지부터 찾아본다."
      />
      <AnswerBox
        next={() => next(question[1], answers[1])}
        subject="목표를 함께 이룰 사람들을 찾아본다"
      />
      <AnswerBox
        next={() => next(question[1], answers[2])}
        subject="다른 사람들의 목표를 구경하며 영감을 얻는다. "
      />
      <AnswerBox next={() => next(question[1], answers[3])} subject="확실한 플랜을 세운다." />
      <AnswerBox next={() => next(question[1], answers[4])} subject="일단 주위에 떠벌린다." />
    </Wrapper>
  );
}

export default Second;
