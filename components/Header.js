import styled from 'styled-components';

const HeaderWrap = styled.header`
  width: 100%;
  max-width: 768px;
  height: 6rem;
  background: #fff;
  border: 1px solid #f00;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
`;
const Header = () => {
  return <HeaderWrap>HeaderWrap!</HeaderWrap>;
};
export default Header;
