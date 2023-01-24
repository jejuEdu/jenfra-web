import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 5rem;
  width: 100%;
  box-sizing: border-box;

  position: absolute;
  left: ${(props) => (props.position ? `${props.position * 100}%` : '0')};
`;
