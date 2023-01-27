import styled from 'styled-components';
import LayoutBase from './LayoutBase';

const LayoutResultWrap = styled.main`
  min-height: 100vh;
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  background-color: ${(props) => props.bgColor};
  background-image: url('/images/bg-resultpage.svg');
  background-repeat: no-repeat;
  background-position: 0 100%;
  background-size: 100%;
`;

const LayoutResult = ({ children, bgColor }) => {
  return (
    <LayoutBase>
      <LayoutResultWrap bgColor={bgColor}>{children}</LayoutResultWrap>
    </LayoutBase>
  );
};

export default LayoutResult;
