import styled from 'styled-components';
import LayoutBase from './LayoutBase';

const LayoutMainWrap = styled.main`
  min-height: 100vh;
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  background: ${(props) => props.color};
`;

const LayoutMain = ({ children, color }) => {
  return (
    <LayoutBase>
      <LayoutMainWrap color={color}>{children}</LayoutMainWrap>;
    </LayoutBase>
  );
};

export default LayoutMain;
