import styled from 'styled-components';
import { COLORS } from '../../../constant/colors';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const AnswerBox = styled.h1`
  width: 100%;
  max-width: 32.1rem;
  padding: 2.4rem 2rem;
  background: #fff;
  border-radius: 1.5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0px 0px 2rem 0.5rem rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:after {
    border-left: 1.2rem solid transparent;
    border-right: 1.2rem solid transparent;
    border-bottom: 1.2rem solid #fff;
    content: '';
    position: absolute;
    bottom: 1.6rem;
    right: -1.6rem;
    transform: rotate(90deg);
  }

  img {
    width: 10rem;
    height: 10rem;
    margin-right: 1.2rem;
  }

  &:hover {
    background: ${COLORS.point};
    h2,
    h4 {
      color: #fff;
    }
    &:after {
      border-bottom: 1.2rem solid ${COLORS.point};
    }
  }
`;

export const AnswerSubject = styled.h2`
  font-weight: 700;
  font-size: 2rem;
  line-height: 3.1rem;
  color: #000;
  word-break: keep-all;
`;

export const AnswerDesc = styled.h4`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.5rem;
  color: #000;
  word-break: keep-all;
`;
