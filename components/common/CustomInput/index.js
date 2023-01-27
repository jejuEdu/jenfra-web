import * as S from './style';

const CustomInput = ({
  size = 'medium',
  label = '',
  type = 'text',
  placeholder = '',
  style = {},
  value,
  onChange,
  maxLength,
  disabled,
}) => {
  const handleOnChange = (e) => {
    if (label === '핸드폰 번호') {
      if (e.target.value.length > maxLength) {
        return (e.target.value = e.target.value.slice(0, e.target.maxLength));
      }
    }
    onChange(e.target.value);
  };
  return (
    <S.CustomInputWrap>
      {label && <S.CustomLabel>{label}</S.CustomLabel>}
      <S.CustomInputStyle
        type={type === 'select' ? 'button' : type}
        style={style}
        value={value}
        size={size}
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={handleOnChange}
        disabled={disabled}
      />
    </S.CustomInputWrap>
  );
};

export default CustomInput;
