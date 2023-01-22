import styled from 'styled-components';
import { COLORS } from '../../../constant/colors';

export const CustomInputWrap = styled.div`
  position: relative;
`;

export const CustomLabel = styled.div`
  font-size: 1.5rem;
  line-height: 141%;
  font-weight: 400;
  color: #000;
  margin-bottom: 0.8rem;
  margin-left: 1.2rem;
`;

export const CustomInputStyle = styled.input`
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 2.4rem;
  font-weight: 400;
  background: #ffffff;
  box-shadow: 0px 0px 1.5rem rgba(0, 0, 0, 0.1);
  border-radius: 2rem;
  border: none;

  padding: ${(props) =>
    props.size === 'small'
      ? '1rem 1.3rem'
      : props.size === 'medium'
      ? '1.2rem 1.5rem'
      : '1.4rem 1.8rem'};
  font-size: ${(props) =>
    props.size === 'small' ? '1.3rem' : props.size === 'medium' ? '1.5rem' : '1.8rem'};
  line-height: ${(props) =>
    props.size === 'small' ? '1.5rem' : props.size === 'medium' ? '1.7rem' : '2rem'};
  border-radius: 10rem;

  &::placeholder {
    color: #bababa;
  }

  &:focus {
    outline: ${(props) => (props.type === 'select' ? 'none' : '')};
  }
  &:disabled {
    color: #f00;
  }
`;
