import styled from 'styled-components';

const LayoutMainWrap = styled.main`
  min-height: 100vh;
  width: 100%;
  background: #fff;

  @media screen and (min-width: 769px) {
    max-width: 768px;
    margin: 0 auto;
    box-shadow: 0 2px 8px 0 rgb(0 0 0 / 10%);
  }
`;

const LayoutMain = ({ children }) => {
  return <LayoutMainWrap>{children}</LayoutMainWrap>;
};

export default LayoutMain;
