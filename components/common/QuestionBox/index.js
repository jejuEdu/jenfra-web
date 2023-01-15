import * as S from './style';

const QuestionBox = ({ question }) => {
  let questionValue = question.split('\\n');

  return (
    <S.Container>
      <S.QuestionBox>
        {questionValue.map((item) => (
          <p key={item}>
            {item}
            <br />
          </p>
        ))}
      </S.QuestionBox>
    </S.Container>
  );
};

export default QuestionBox;
