import styled from 'styled-components';
import { COLORS } from '../../../constant/colors';

export const CustomInputWrap = styled.div`
  position: relative;
`;

export const CustomLabel = styled.div`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${COLORS.gray_3};
  margin-bottom: 1rem;
`;

export const CustomInputStyle = styled.input`
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 1.5rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-weight: 500;

  padding: ${(props) =>
    props.size === 'small' ? '1rem 2rem' : props.size === 'medium' ? '1.5rem 3rem' : '2rem 4rem'};
  font-size: ${(props) =>
    props.size === 'small' ? '1.2rem' : props.size === 'medium' ? '1.6rem' : '2.4rem'};
  line-height: ${(props) =>
    props.size === 'small' ? '1.8rem' : props.size === 'medium' ? '2.4rem' : '3rem'};
  border-radius: 1rem;

  &::placeholder {
    color: ${COLORS.gray_c};
  }

  &:focus {
    outline: ${(props) => (props.type === 'select' ? 'none' : '')};
  }
  &:disabled {
    color: #f00;
  }
`;
