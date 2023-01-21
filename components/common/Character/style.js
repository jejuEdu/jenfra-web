import styled, { keyframes } from 'styled-components';

const characterMove = keyframes`
  0% {
    top: 0;
  }
  20% {
    top: -3rem;
  }
  45% {
    top: 0;
  }
`;
const shadowMove = keyframes`
  0% {
    width: 9rem;
    opacity: 1;
  }
  20% {
    width: 5.6rem;
    opacity: 0.4;
  }
  45% {
    width: 9rem;
    opacity: 1;
  }
`;

export const Character = styled.img`
  width: 13.2rem;
  height: 16.6rem;
  position: relative;
  animation: ${characterMove} 1.5s ease-out infinite;
`;
export const Shadow = styled.div`
  width: 9rem;
  height: 1.1rem;
  animation: ${shadowMove} 1.5s ease-out infinite;
  background: #000;
  margin: 0 auto;
  border-radius: 50%;
`;
