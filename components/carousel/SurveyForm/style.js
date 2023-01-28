import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  /* min-height: 100vh; */
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: absolute;
  top: 5rem;
  left: ${(props) => (props.position ? `${props.position * 100}%` : '0')};
`;
