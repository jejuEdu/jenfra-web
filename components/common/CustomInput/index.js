import * as S from './style';

const CustomInput = ({
  size = 'medium',
  label = '',
  type = 'text',
  placeholder = '',
  style = {},
  value,
  onChange,
  disabled,
}) => {
  return (
    <S.CustomInputWrap>
      {label && <S.CustomLabel>{label}</S.CustomLabel>}
      <S.CustomInputStyle
        type={type === 'select' ? 'button' : type}
        style={style}
        value={value}
        size={size}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      />
    </S.CustomInputWrap>
  );
};

export default CustomInput;
