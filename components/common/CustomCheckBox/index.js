import * as S from './style';

function Checkbox({ text }) {
  return (
    <S.StyledLabel htmlFor={text}>
      <S.StyledInput type="checkbox" id={text} name={text} />
      <S.StyledP>{text}</S.StyledP>
    </S.StyledLabel>
  );
}

export default Checkbox;
