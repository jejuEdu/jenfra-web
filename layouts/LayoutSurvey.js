import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';

const LayoutSurveyWrap = styled.main`
  min-height: 100vh;
  width: 100%;
  background: #fff;
  padding: 6rem 0;

  @media screen and (min-width: 769px) {
    max-width: 768px;
    margin: 0 auto;
    box-shadow: 0 2px 8px 0 rgb(0 0 0 / 10%);
  }
`;

const LayoutSurvey = ({ children }) => {
  return (
    <>
      <Header />
      <LayoutSurveyWrap>{children}</LayoutSurveyWrap>
      <Footer />
    </>
  );
};

export default LayoutSurvey;
