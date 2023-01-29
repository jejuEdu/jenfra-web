import * as S from './style';

const QuestionBox = ({ question, id }) => {
  let questionValue = question.split('\\n');

  return (
    <S.Container id={id}>
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
