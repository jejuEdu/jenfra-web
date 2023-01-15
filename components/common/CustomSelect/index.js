import * as S from './style';

const CustomSelect = ({
  size = 'medium',
  label = '',
  style = {},
  dataList = [],
  selected,
  setSelected,
  openOptions,
  onClick,
  disabled,
}) => {
  const handleSelect = (item) => {
    setSelected(item);
    onClick();
  };

  return (
    <S.CustomSelectWrap>
      {label && <S.CustomLabel>{label}</S.CustomLabel>}
      <S.CustomSelectStyle style={style} size={size} onClick={onClick} disabled={disabled}>
        {selected.value}
      </S.CustomSelectStyle>
      <S.SelectWrap style={style}>
        <S.BtnArrow onClick={onClick}>
          <S.ArrowImage src="/images/arrow.png" openOptions={openOptions} />
        </S.BtnArrow>
        {openOptions && (
          <S.OptionPanel style={style}>
            {dataList.map((item) => (
              <S.OptionItem key={item.id} size={size} onClick={() => handleSelect(item)}>
                {item.value}
              </S.OptionItem>
            ))}
          </S.OptionPanel>
        )}
      </S.SelectWrap>
    </S.CustomSelectWrap>
  );
};

export default CustomSelect;
