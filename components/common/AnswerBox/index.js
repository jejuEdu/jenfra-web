import * as S from './style';

const AnswerBox = ({ img, subject, desc, next }) => {
  let subjectValue = subject.split('\\n');
  let descValue = desc?.split('\\n');

  return (
    <S.Container>
      <S.AnswerBox onClick={next}>
        <div>{img && <img src={img} alt="" />}</div>
        <div>
          {desc &&
            descValue.map((item) => (
              <S.AnswerDesc key={item}>
                {item}
                <br />
              </S.AnswerDesc>
            ))}
          {subjectValue.map((item) => (
            <S.AnswerSubject key={item}>
              {item}
              <br />
            </S.AnswerSubject>
          ))}
        </div>
      </S.AnswerBox>
    </S.Container>
  );
};

export default AnswerBox;
