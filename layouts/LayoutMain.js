import styled from 'styled-components';

const LayoutMainWrap = styled.main`
  min-height: 100vh;
  width: 100%;
  background: ${(props) => props.color};

  display: flex; /* flex 셋팅 */
  justify-content: center; /* 가로, 세로 가운데 정렬 */
  align-items: center; /* 위, 아래 가운데 정렬 */
  flex-direction: column; /* 아이템이 흐르는 방향을 위아래로 */
`;

const LayoutMain = ({ children, color }) => {
  return <LayoutMainWrap color={color}>{children}</LayoutMainWrap>;
};

export default LayoutMain;
