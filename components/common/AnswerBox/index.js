import * as S from './style';

const AnswerBox = ({ img, subject, desc }) => {
  let subjectValue = subject.split('\\n');
  let descValue = desc?.split('\\n');

  return (
    <S.Container>
      <S.AnswerBox>
        <div>{img && <img src={img} alt="" />}</div>
        <div>
          {desc &&
            descValue.map((item) => (
              <S.AnswerDesc>
                {item}
                <br />
              </S.AnswerDesc>
            ))}
          {subjectValue.map((item) => (
            <S.AnswerSubject>
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
