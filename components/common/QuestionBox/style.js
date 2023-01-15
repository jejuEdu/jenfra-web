import styled from 'styled-components';
import { COLORS } from '../../../constant/colors';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5.3rem;
`;
export const QuestionBox = styled.h1`
  width: 100%;
  max-width: 32.4rem;
  padding: 2rem 1.2rem;
  background: ${COLORS.point};
  border-radius: 1.5rem;
  font-weight: 700;
  font-size: 2rem;
  line-height: 141%;
  color: #ffffff;
  position: relative;
  word-break: keep-all;
  box-shadow: 0px 0px 2rem 0.5rem rgba(0, 0, 0, 0.1);

  &:after {
    border-left: 1.2rem solid transparent;
    border-right: 1.2rem solid transparent;
    border-bottom: 1.2rem solid ${COLORS.point};
    content: '';
    position: absolute;
    bottom: 1.6rem;
    left: -1.6rem;
    transform: rotate(-90deg);
  }
`;
