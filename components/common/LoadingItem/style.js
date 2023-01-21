import styled, { keyframes } from 'styled-components';
import { COLORS } from '../../../constant/colors';

const LoadingMove = keyframes`
    0%{width: 0px;}
    70%{width: 100%; opacity: 1;}
    90%{opacity: 0; width: 100%;}
    100%{opacity: 0;width: 0px;}
`;

export const LoadingWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${COLORS.point};
`;

export const LoadingBar = styled.div`
  position: relative;
  width: 100%;
  max-width: 25rem;
  height: 1rem;
  border-radius: 1rem;
  background-color: rgba(255, 255, 255, 0.2);
  margin-top: 2rem;

  &:before {
    content: '';
    position: absolute;
    background-color: #fff;
    top: 0px;
    left: 0px;
    height: 1rem;
    border-radius: 1rem;
    width: 0px;
    z-index: 0;
    opacity: 1;
    -webkit-transform-origin: 100% 0%;
    transform-origin: 100% 0%;
    -webkit-animation: ${LoadingMove} 2s ease-in-out infinite;
    animation: ${LoadingMove} 2s ease-in-out infinite;
  }
`;

export const LoadingText = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 141%;
  color: #fff;
  margin-top: 2rem;
`;
