import * as S from './style';

function Checkbox({ text, onChange, style }) {
  return (
    <S.StyledLabel htmlFor={text} style={style}>
      <S.StyledInput type="checkbox" id={text} name={text} onChange={onChange} />
      <S.StyledP>{text}</S.StyledP>
    </S.StyledLabel>
  );
}

export default Checkbox;
