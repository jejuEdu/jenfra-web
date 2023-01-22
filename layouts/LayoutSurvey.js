import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { COLORS } from '../constant/colors';
import LayoutBase from './LayoutBase';

const LayoutSurveyWrap = styled.main`
  min-height: 100vh;
  width: 100%;
  background: ${COLORS.bg};
  max-width: 768px;
  margin: 0 auto;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
`;

const LayoutSurvey = ({ children }) => {
  return (
    <LayoutBase>
      <LayoutSurveyWrap>{children}</LayoutSurveyWrap>
    </LayoutBase>
  );
};

export default LayoutSurvey;
