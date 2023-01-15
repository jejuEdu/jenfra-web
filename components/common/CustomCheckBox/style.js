import styled from 'styled-components';
import { COLORS } from '../../../constant/colors';

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
`;
export const StyledInput = styled.input`
  appearance: none;
  border: 1.5px solid ${COLORS.gray_9};
  border-radius: 0.35rem;
  width: 2rem;
  height: 2rem;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: ${COLORS.point};
  }
`;

export const StyledP = styled.p`
  font-size: 1.6rem;
  margin-left: 0.25rem;
`;
