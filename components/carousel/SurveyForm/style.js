import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  /* min-height: 100vh; */
`;

export const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  box-sizing: border-box;
  position: absolute;
  top: 5rem;
  left: ${(props) => (props.position ? `${props.position * 100}%` : '0')};
  /* overflow-y: scroll; */
`;

export const AnswerScroll = styled.div`
  width: 100%;
  padding: 2rem 0;
  overflow-x: hidden;
  overflow-y: scroll;
`;
